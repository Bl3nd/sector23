// Usage: bun scripts/component-docs.mjs migrate [slug...] | check
import {
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  statSync,
  unlinkSync,
  writeFileSync,
} from "node:fs";
import { join } from "node:path";

const componentsRoot = "app/docs/components";
const registryPath = "app/markdoc/tags/component-demo.tsx";
const tailMarker = "type DemoPath = keyof typeof demoRegistry;";
const acronyms = { otp: "OTP" };

function titleFromSlug(slug) {
  return slug
    .split("-")
    .map((word) => acronyms[word] ?? word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function pageMarkdown(slug) {
  return `---\ntitle: ${titleFromSlug(slug)}\n---\n\n{% component-demo component="${slug}-01" /%}\n`;
}

function listSlugs() {
  return readdirSync(componentsRoot)
    .filter((name) => statSync(join(componentsRoot, name)).isDirectory())
    .sort();
}

function transformPage(source, slug) {
  const match = source.match(/export default function (\w+)Page\(/);
  if (!match) {
    throw new Error(`${slug}: expected "export default function <Name>Page("`);
  }

  const exportName = `${match[1]}01`;
  const next = source.replace(
    `export default function ${match[1]}Page(`,
    `export default function ${exportName}(`,
  );

  if (next === source || !next.includes(`export default function ${exportName}(`)) {
    throw new Error(`${slug}: failed to rename ${match[1]}Page`);
  }

  return { source: next, exportName };
}

function readDemoExport(slug) {
  const demoPath = join(componentsRoot, slug, "demos", `${slug}-01.tsx`);
  const source = readFileSync(demoPath, "utf8");
  const match = source.match(/export default function (\w+)\(/);
  if (!match) {
    throw new Error(`${demoPath}: expected a default function export`);
  }
  return { demoPath, source, exportName: match[1] };
}

function renderRegistry(entries) {
  const existing = readFileSync(registryPath, "utf8");
  const tailAt = existing.indexOf(tailMarker);
  if (tailAt < 0) {
    throw new Error(`${registryPath}: missing ${tailMarker}`);
  }

  const imports = [...entries]
    .sort((a, b) =>
      `@/app/docs/components/${a.slug}/demos/${a.slug}-01`.localeCompare(
        `@/app/docs/components/${b.slug}/demos/${b.slug}-01`,
      ),
    )
    .map(
      (entry) =>
        `import ${entry.exportName} from "@/app/docs/components/${entry.slug}/demos/${entry.slug}-01";`,
    )
    .join("\n");
  const keys = entries.map((entry) => `  "${entry.slug}-01": ${entry.exportName},`).join("\n");

  return `import type { ReactNode } from "react";

${imports}

import { DemoViewportFrame } from "./demo-viewport-frame";

const demoRegistry = {
${keys}
} satisfies Record<string, () => ReactNode>;

${existing.slice(tailAt)}`;
}

function migrate(only) {
  const slugs = listSlugs().filter((slug) => !only || only.includes(slug));

  for (const slug of slugs) {
    const pagePath = join(componentsRoot, slug, "page.tsx");
    if (!existsSync(pagePath)) {
      continue;
    }

    const demoDir = join(componentsRoot, slug, "demos");
    const demoPath = join(demoDir, `${slug}-01.tsx`);
    const mdPath = join(componentsRoot, slug, "page.md");
    const transformed = transformPage(readFileSync(pagePath, "utf8"), slug);
    const markdown = pageMarkdown(slug);

    if (existsSync(demoPath) && readFileSync(demoPath, "utf8") !== transformed.source) {
      throw new Error(`${demoPath} already exists and does not match the page.tsx transform`);
    }
    if (existsSync(mdPath) && readFileSync(mdPath, "utf8") !== markdown) {
      throw new Error(`${mdPath} already exists and does not match the title template`);
    }

    mkdirSync(demoDir, { recursive: true });
    writeFileSync(demoPath, transformed.source);
    writeFileSync(mdPath, markdown);
    unlinkSync(pagePath);

    if (
      readFileSync(demoPath, "utf8") !== transformed.source ||
      readFileSync(mdPath, "utf8") !== markdown ||
      existsSync(pagePath)
    ) {
      throw new Error(`${slug}: written files did not match the transform`);
    }

    console.log(`migrated ${slug} -> ${transformed.exportName}`);
  }

  const entries = listSlugs()
    .filter((slug) => existsSync(join(componentsRoot, slug, "demos", `${slug}-01.tsx`)))
    .map((slug) => ({ slug, exportName: readDemoExport(slug).exportName }));
  writeFileSync(registryPath, renderRegistry(entries));
  console.log(`registry ${entries.length} demos`);
}

function check() {
  const failures = [];
  const slugs = listSlugs();
  const entries = [];

  for (const slug of slugs) {
    const pagePath = join(componentsRoot, slug, "page.tsx");
    const mdPath = join(componentsRoot, slug, "page.md");
    const demoPath = join(componentsRoot, slug, "demos", `${slug}-01.tsx`);

    if (existsSync(pagePath)) {
      failures.push(`${slug}: page.tsx still exists`);
    }
    if (!existsSync(mdPath)) {
      failures.push(`${slug}: missing page.md`);
    } else if (readFileSync(mdPath, "utf8") !== pageMarkdown(slug)) {
      failures.push(`${slug}: page.md does not match the title template`);
    }
    if (!existsSync(demoPath)) {
      failures.push(`${slug}: missing demos/${slug}-01.tsx`);
      continue;
    }

    entries.push({ slug, exportName: readDemoExport(slug).exportName });
  }

  if (entries.length === slugs.length) {
    const expected = renderRegistry(entries);
    const actual = readFileSync(registryPath, "utf8");
    if (actual !== expected) {
      failures.push("component-demo.tsx registry does not match the demos on disk");
    }
  }

  if (failures.length > 0) {
    for (const failure of failures) {
      console.error(failure);
    }
    process.exit(1);
  }

  console.log(`ok ${slugs.length} component docs pages`);
}

const [command, ...slugs] = process.argv.slice(2);

if (command === "migrate") {
  migrate(slugs.length > 0 ? slugs : null);
} else if (command === "check") {
  check();
} else {
  console.error("Usage: bun scripts/component-docs.mjs migrate [slug...] | check");
  process.exit(1);
}
