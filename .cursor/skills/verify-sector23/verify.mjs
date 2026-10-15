#!/usr/bin/env bun
import { spawn, spawnSync } from "node:child_process";
import {
  existsSync,
  mkdirSync,
  openSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const skillDir = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(skillDir, "../../..");
const runDir = resolve(skillDir, "run");
const pidFile = resolve(runDir, "server.pid");
const logFile = resolve(runDir, "server.log");
const port = 4173;
const origin = `http://127.0.0.1:${port}`;
const readyPath = "/docs/components/toggle";
const readyUrl = `${origin}${readyPath}`;

const command = process.argv[2];

if (!["launch", "doctor", "cleanup"].includes(command)) {
  console.error(
    "usage: bun .cursor/skills/verify-sector23/verify.mjs <launch|doctor|cleanup>",
  );
  process.exit(2);
}

if (command === "launch") {
  await launch();
} else if (command === "doctor") {
  doctor();
} else {
  cleanup();
}

function readPid() {
  if (!existsSync(pidFile)) {
    return null;
  }
  const pid = Number(readFileSync(pidFile, "utf8").trim());
  return Number.isInteger(pid) && pid > 0 ? pid : null;
}

function alive(pid) {
  try {
    process.kill(pid, 0);
    return true;
  } catch {
    return false;
  }
}

function commandLine(pid) {
  const result = spawnSync(
    "powershell.exe",
    [
      "-NoProfile",
      "-Command",
      `(Get-CimInstance Win32_Process -Filter "ProcessId=${pid}").CommandLine`,
    ],
    { encoding: "utf8" },
  );
  return (result.stdout ?? "").trim();
}

function listeningPids(targetPort) {
  const result = spawnSync("netstat", ["-ano", "-p", "tcp"], {
    encoding: "utf8",
  });
  const pids = new Set();
  for (const line of (result.stdout ?? "").split(/\r?\n/)) {
    if (!line.includes("LISTENING")) {
      continue;
    }
    const parts = line.trim().split(/\s+/);
    const local = parts[1] ?? "";
    if (!local.endsWith(`:${targetPort}`)) {
      continue;
    }
    const pid = Number(parts.at(-1));
    if (Number.isInteger(pid)) {
      pids.add(pid);
    }
  }
  return [...pids];
}

function isOurServer(pid) {
  if (!alive(pid)) {
    return false;
  }
  const line = commandLine(pid).toLowerCase();
  return line.includes("next") && line.includes(String(port));
}

function parentPid(pid) {
  const result = spawnSync(
    "powershell.exe",
    [
      "-NoProfile",
      "-Command",
      `(Get-CimInstance Win32_Process -Filter "ProcessId=${pid}").ParentProcessId`,
    ],
    { encoding: "utf8" },
  );
  const parent = Number((result.stdout ?? "").trim());
  return Number.isInteger(parent) && parent > 0 ? parent : null;
}

function listenerBelongsTo(rootPid) {
  const listeners = listeningPids(port);
  for (const listener of listeners) {
    let current = listener;
    for (let depth = 0; depth < 8 && current; depth += 1) {
      if (current === rootPid) {
        return true;
      }
      current = parentPid(current);
    }
  }
  return false;
}

function tailLog() {
  if (!existsSync(logFile)) {
    return "";
  }
  const lines = readFileSync(logFile, "utf8").split(/\r?\n/);
  return lines.slice(-40).join("\n");
}

async function waitUntilReady(pid) {
  const deadline = Date.now() + 90_000;
  while (Date.now() < deadline) {
    if (!alive(pid)) {
      throw new Error(`dev server exited before it was ready\n${tailLog()}`);
    }
    try {
      const response = await fetch(readyUrl);
      if (response.ok) {
        const html = await response.text();
        if (html.includes("<title>Sector23 Docs | Toggle</title>")) {
          return;
        }
      }
    } catch {
      // Server is still booting.
    }
    await new Promise((resolveDelay) => setTimeout(resolveDelay, 500));
  }
  throw new Error(`timed out waiting for ${readyUrl}\n${tailLog()}`);
}

function doctor() {
  const pid = readPid();
  if (pid === null || !isOurServer(pid)) {
    console.error(
      "doctor: no Sector23 verification server. Run launch. Do not drive another port.",
    );
    process.exit(1);
  }
  if (!listenerBelongsTo(pid)) {
    const listeners = listeningPids(port);
    console.error(
      `doctor: pid ${pid} does not own ${origin}. listeners=${listeners.join(",") || "none"}`,
    );
    process.exit(1);
  }
  const response = spawnSync(
    "powershell.exe",
    [
      "-NoProfile",
      "-Command",
      `$r = Invoke-WebRequest -UseBasicParsing ${readyUrl}; if ($r.StatusCode -ne 200 -or $r.Content -notlike '*<title>Sector23 Docs | Toggle</title>*') { exit 1 }; Write-Output $r.StatusCode`,
    ],
    { encoding: "utf8" },
  );
  if (response.status !== 0) {
    console.error(`doctor: ${readyUrl} did not return the Sector23 document`);
    process.exit(1);
  }
  console.log(`ok`);
  console.log(`url=${origin}`);
  console.log(`pid=${pid}`);
  console.log(`ready=${readyUrl}`);
  console.log(`title=Sector23 Docs | Toggle`);
}

async function launch() {
  mkdirSync(runDir, { recursive: true });
  const existing = readPid();
  if (existing !== null && isOurServer(existing)) {
    await waitUntilReady(existing);
    console.log(`already running`);
    console.log(`url=${origin}`);
    console.log(`pid=${existing}`);
    return;
  }
  if (existing !== null) {
    rmSync(pidFile, { force: true });
  }
  const listeners = listeningPids(port);
  if (listeners.length > 0) {
    console.error(
      `refusing to start: port ${port} is held by pid ${listeners.join(",")}. This run did not start it. Do not kill it and do not drive it.`,
    );
    process.exit(1);
  }
  const logFd = openSync(logFile, "w");
  const child = spawn(
    "bun",
    ["--bun", "next", "dev", "--hostname", "127.0.0.1", "--port", String(port)],
    {
      cwd: repoRoot,
      detached: true,
      stdio: ["ignore", logFd, logFd],
      windowsHide: true,
    },
  );
  child.unref();
  writeFileSync(pidFile, `${child.pid}\n`);
  try {
    await waitUntilReady(child.pid);
  } catch (error) {
    cleanup();
    console.error(error instanceof Error ? error.message : String(error));
    process.exit(1);
  }
  console.log(`started`);
  console.log(`url=${origin}`);
  console.log(`pid=${child.pid}`);
  console.log(`log=${logFile}`);
}

function cleanup() {
  const pid = readPid();
  if (pid !== null && alive(pid)) {
    const line = commandLine(pid).toLowerCase();
    if (!line.includes("next") || !line.includes(String(port))) {
      console.error(
        `refusing to kill pid ${pid}: its command line is not this verification server.`,
      );
      process.exit(1);
    }
    const killed = spawnSync("taskkill", ["/PID", String(pid), "/T", "/F"], {
      encoding: "utf8",
    });
    if (killed.status !== 0 && alive(pid)) {
      console.error(
        (killed.stderr || killed.stdout || "taskkill failed").trim(),
      );
      process.exit(1);
    }
  }
  rmSync(pidFile, { force: true });
  rmSync(logFile, { force: true });
  console.log("cleaned up");
}
