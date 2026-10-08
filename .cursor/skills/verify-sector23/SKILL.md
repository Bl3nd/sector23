---
name: verify-sector23
description: Drive the Sector23 Next.js component docs in a browser and prove a demo behaves as a user sees it. Use when a change touches a docs page, a component demo, or theme switching and the proof has to be a real click or keypress on http://127.0.0.1:4173.
---

# Verify Sector23

Sector23 is a React component library. The user-facing surface is the Next.js docs site. `/` renders an empty page whose document title is `Sector23`. Each component demo is its own route under `/docs/components/<name>`. There is no shared navigation, auth, seed data, or CLI. The feature map lists every docs demo that changes visible state. Avatar, button, meter, and separator do not change visible state, so they stay unmapped. Driving one mapped demo does not verify the others.

The harness is the Cursor IDE browser (`cursor-ide-browser`). Launch, health, and teardown go through the helper below. Do not install a second browser driver.

## Launch

From the repo root:

```bash
bun .cursor/skills/verify-sector23/verify.mjs launch
```

That starts `bun --bun next dev --hostname 127.0.0.1 --port 4173` and waits until `http://127.0.0.1:4173/docs/components/toggle` returns 200 with `<title>Sector23</title>`. A second launch while that server is still healthy prints `already running` and the same URL.

The helper records the process id in `.cursor/skills/verify-sector23/run/server.pid` and the log in `.cursor/skills/verify-sector23/run/server.log`. Next listens from a child of that process. The helper treats that child as part of the server it started.

This checkout can run one Next dev server. They share `.next/dev/lock`. If port 4173 is already held by a process this run did not start, launch exits with an error and does not kill it. Do not drive port 3000 or any other server. If the process exits before the page is ready, read the log it printed and stop.

## Doctor

Run this before driving, and again whenever the page looks wrong:

```bash
bun .cursor/skills/verify-sector23/verify.mjs doctor
```

A healthy instance prints `ok`, `url=http://127.0.0.1:4173`, the recorded pid, `ready=http://127.0.0.1:4173/docs/components/toggle`, and `title=Sector23`. Any other result means this instance is not worth driving. Do not point the browser at a different origin to compensate.

## Drive

Read `.cursor/skills/verify-sector23/features/README.md`, then the feature file for the behavior under test. Drive every entry point that file lists. A proof that uses one convenient route does not cover the others.

1. Run doctor.
2. `browser_navigate` to the feature URL. Omit the position parameter.
3. `browser_lock` with action `lock`.
4. `browser_snapshot`. Match controls by role and accessible name from the feature file. Snapshot refs expire; take a new snapshot after every navigation or click before using a ref.
5. `browser_click` or `browser_press_key` for the user action. Do not click `Open Next.js Dev Tools`. That button is the dev overlay.
6. Snapshot again and record the resulting state named in the feature file.
7. `browser_lock` with action `unlock` when the browser work is finished.

## Evidence

Write proof under `.cursor/skills/verify-sector23/artifacts/<feature-id>/`. Cleanup never removes this directory.

For each driven entry point, keep the action and the resulting state:

- An accessibility snapshot from before the action and one from after it. Include the URL, document title `Sector23`, feature id, and entry point in the file.
- A screenshot copied out of the browser tool's temp path into this directory. `browser_take_screenshot` does not write the artifacts directory itself.
- For theme, also record `document.documentElement.classList` before and after `d`, via `Runtime.evaluate`. The class token `dark` or `light` is the state. A screenshot alone is not that proof.

Exercise the demo the way a user would: open the route, click or press the key, then read the resulting control state. Do not call component setters or test-only endpoints. These demos do not write files, rows, or messages. The observable result is the control state on the page. There is no dry-run mode.

## Cleanup

When the verification run is finished:

```bash
bun .cursor/skills/verify-sector23/verify.mjs cleanup
```

Cleanup reads `server.pid` and kills that process tree with `taskkill /PID <pid> /T /F` only when the command line contains `next` and `4173`. It then deletes the pid file and the log. It does not kill by process name, and it does not delete `.cursor/skills/verify-sector23/artifacts/`. Run it after a failed launch too, so a half-started server is not left behind.

## Helpers

`verify.mjs` is the only helper. Invoke it with `bun` from the repo root, as shown in Launch, Doctor, and Cleanup.
