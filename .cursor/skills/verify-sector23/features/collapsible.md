# Collapsible

The first collapsible starts closed. Its trigger is Statuses. Opening it lists statuses from In Development through In Archived. The string "What's included in Sector23?" is not on the page.

## Sub-features

- `collapsible-closed` starts collapsed, without the panel sentence.
- `collapsible-open` expands the trigger and shows the panel sentence.

## How to get to it (user POV)

- Open `/docs/components/collapsible`.

## Driving it with the Cursor IDE browser

Preconditions:

- Sector23 is healthy at `http://127.0.0.1:4173`.
- `bun .cursor/skills/verify-sector23/verify.mjs doctor` reports that URL and `title=Toggle | Sector23`.

- **Open the demo.** Go to the collapsible page. Run `browser_navigate` with url `http://127.0.0.1:4173/docs/components/collapsible`, then `browser_lock` with action `lock`, then `browser_snapshot`. The first button named `Statuses` is collapsed. A second button named `Statuses` is disabled and already expanded. The page does not show `What's included in Sector23?`.
- **Open it.** Click the first `Statuses` button. Run `browser_click` on the snapshot ref whose role is `button` and name is `Statuses`. That button is expanded, and the panel lists `In Development` through `In Archived`.
- **Proof.** Save the open snapshot to `artifacts/collapsible/open.aria.txt` and copy a screenshot to `artifacts/collapsible/open.png`. Both show Sector23 and `In Development`.

## Gotchas

- Two buttons are named `Statuses`. Use the first. The second is disabled and starts expanded.
- The panel text is absent until the first trigger is expanded.
