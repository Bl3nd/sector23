# Demo viewport

The width frame is opt-in. Accordion, alert dialog, and autocomplete do not mount it. Those routes have no Mobile, Tablet, or Desktop buttons.

## Sub-features

- `demo-viewport-absent` finds no `[data-slot="demo-viewport-frame"]` on accordion, alert dialog, and autocomplete.

## How to get to it (user POV)

- Open `/docs/components/accordion`.
- Open `/docs/components/alert-dialog`.
- Open `/docs/components/autocomplete`.

## Driving it with the Cursor IDE browser

Preconditions:

- Sector23 is healthy at `http://127.0.0.1:4173`.
- `bun .cursor/skills/verify-sector23/verify.mjs doctor` reports that URL and `title=Toggle | Sector23`.

- **Open the demo.** Go to one entry route. Run `browser_navigate` with that url, then `browser_lock` with action `lock`, then `browser_snapshot`. The document title is `Accordion | Sector23`, `Alert Dialog | Sector23`, or `Autocomplete | Sector23`, matching the route. The snapshot has no button named Mobile, Tablet, or Desktop.
- **Confirm the frame is absent.** Run `browser_cdp` with method `Runtime.evaluate` and expression `!!document.querySelector('[data-slot=demo-viewport-frame]')`. The value is false.
- **Proof.** Save the snapshot and the evaluated result under `artifacts/demo-viewport/`. The proof is the absence of the frame. Do not report a width change.

## Gotchas

- `showViewport` defaults to false in the component demo tag, and no docs page sets it. The frame code exists. These routes do not mount it.
- A pass that only checks one route does not cover the other two.
- Do not turn `showViewport` on to manufacture the buttons. That is a product change, and this map records the pages as they are.
