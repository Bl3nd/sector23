# Accordion

The accordion demo starts collapsed. "What is Sector23?" is disabled. Opening "How to use Sector23?" shows that panel.

## Sub-features

- `accordion-closed` starts with every panel collapsed, and the first trigger disabled.
- `accordion-open` opens the "How to use Sector23?" panel.

## How to get to it (user POV)

- Open `/docs/components/accordion`.

## Driving it with the Cursor IDE browser

Preconditions:

- Sector23 is healthy at `http://127.0.0.1:4173`.
- `bun .cursor/skills/verify-sector23/verify.mjs doctor` reports that URL and `title=Sector23 Docs | Toggle`.

- **Open the demo.** Go to the accordion page. Run `browser_navigate` with url `http://127.0.0.1:4173/docs/components/accordion`, then `browser_lock` with action `lock`, then `browser_snapshot`. The trigger named `What is Sector23?` is disabled. The trigger named `How to use Sector23?` is collapsed. The panel sentence is absent.
- **Open a panel.** Click `How to use Sector23?`. Run `browser_click` on the snapshot ref whose role is `button` and name is `How to use Sector23?`. That trigger is expanded, and the page shows `To use Sector23, you need to install components you need from the Shadcn Registry.`
- **Proof.** Save the open snapshot to `artifacts/accordion/open.aria.txt` and copy a screenshot to `artifacts/accordion/open.png`. Both show Sector23 and the opened panel sentence.

## Gotchas

- `What is Sector23?` has `aria-disabled` true. The accessibility snapshot can list it as collapsed without a disabled state. A click there does not open a panel.
- The long third trigger is a separate item. This recipe does not open it.
