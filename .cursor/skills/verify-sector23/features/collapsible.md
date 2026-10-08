# Collapsible

The collapsible demo starts closed. Opening "What's included in Sector23?" shows the Base UI sentence.

## Sub-features

- `collapsible-closed` starts collapsed, without the panel sentence.
- `collapsible-open` expands the trigger and shows the panel sentence.

## How to get to it (user POV)

- Open `/docs/components/collapsible`.

## Driving it with the Cursor IDE browser

Preconditions:

- Sector23 is healthy at `http://127.0.0.1:4173`.
- `bun .cursor/skills/verify-sector23/verify.mjs doctor` reports that URL and `title=Sector23`.

- **Open the demo.** Go to the collapsible page. Run `browser_navigate` with url `http://127.0.0.1:4173/docs/components/collapsible`, then `browser_lock` with action `lock`, then `browser_snapshot`. The button named `What's included in Sector23?` is collapsed. The page does not show `Base UI`.
- **Open it.** Click that button. Run `browser_click` on the snapshot ref whose role is `button` and name is `What's included in Sector23?`. The button is expanded, and the page shows `Accessible, unstyled primitives from Base UI, paired with Tailwind CSS styles you can copy into your project and customize.`
- **Proof.** Save the open snapshot to `artifacts/collapsible/open.aria.txt` and copy a screenshot to `artifacts/collapsible/open.png`. Both show Sector23 and `Base UI`.

## Gotchas

- The trigger name includes the question mark. Match that full name.
- The panel is absent until the trigger is expanded.
