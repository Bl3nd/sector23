# Accordion

The accordion demo starts collapsed. "When will my order ship?" is disabled. Opening "How do I track a package?" shows that panel.

## Sub-features

- `accordion-closed` starts with every panel collapsed, and the first trigger disabled.
- `accordion-open` opens the "How do I track a package?" panel.

## How to get to it (user POV)

- Open `/docs/components/accordion`.

## Driving it with the Cursor IDE browser

Preconditions:

- Sector23 is healthy at `http://127.0.0.1:4173`.
- `bun .cursor/skills/verify-sector23/verify.mjs doctor` reports that URL and `title=Sector23 Docs | Toggle`.

- **Open the demo.** Go to the accordion page. Run `browser_navigate` with url `http://127.0.0.1:4173/docs/components/accordion`, then `browser_lock` with action `lock`, then `browser_snapshot`. The trigger named `When will my order ship?` is disabled. The trigger named `How do I track a package?` is collapsed. The panel sentence is absent.
- **Open a panel.** Click `How do I track a package?`. Run `browser_click` on the snapshot ref whose role is `button` and name is `How do I track a package?`. That trigger is expanded, and the page shows `Use the tracking link in your shipping email. It updates when the carrier scans the package.`
- **Proof.** Save the open snapshot to `artifacts/accordion/open.aria.txt` and copy a screenshot to `artifacts/accordion/open.png`. Both show Sector23 and the opened panel sentence.

## Gotchas

- `When will my order ship?` has `aria-disabled` true. The accessibility snapshot can list it as collapsed without a disabled state. A click there does not open a panel.
- `Where is my refund?` is a separate item. This recipe does not open it.
