# Demo viewport

A component demo opens at a mobile width. Tablet makes the inner screen wider. Desktop makes it fill the stage. The stage stays the full width of the card, and a diagonal pattern shows in the unused part.

## Sub-features

- `demo-viewport-mobile` opens with Mobile pressed and the inner screen at 390px.
- `demo-viewport-tablet` presses Tablet and sets the inner screen to 768px.
- `demo-viewport-desktop` presses Desktop and makes the inner screen as wide as the stage.
- `demo-viewport-repress` presses Mobile again and leaves Mobile pressed.

## How to get to it (user POV)

- Open `/docs/components/accordion`.
- Open `/docs/components/alert-dialog`.
- Open `/docs/components/autocomplete`.

## Driving it with the Cursor IDE browser

Preconditions:

- Sector23 is healthy at `http://127.0.0.1:4173`.
- `bun .cursor/skills/verify-sector23/verify.mjs doctor` reports that URL and `title=Sector23`.
- The browser window is wider than 768px, so tablet and desktop are different widths.

- **Open the demo.** Go to one entry route. Run `browser_navigate` with that url, then `browser_lock` with action `lock`, then `browser_snapshot`. The document title is Sector23. The button named Mobile has state `pressed`. Tablet and Desktop have state `released`.
- **Read the mobile width.** The inner screen is `[data-slot="demo-viewport-frame"]` with `data-viewport="mobile"`. Its width is 390. The stage `[data-slot="demo-viewport-stage"]` is wider, and its background is a repeating diagonal gradient.
- **Choose tablet.** Click the button named Tablet. It has state `pressed`. Mobile has state `released`. The inner screen has `data-viewport="tablet"` and width 768. The stage is still wider.
- **Choose desktop.** Click the button named Desktop. It has state `pressed`. The inner screen has `data-viewport="desktop"` and the same width as the stage.
- **Press Mobile again.** Click Mobile, then click Mobile a second time. It stays `pressed`. The inner screen returns to width 390.
- **Proof.** Save the snapshot and a screenshot for the width you drove under `artifacts/demo-viewport/`.

## Gotchas

- Drive each entry route. The three pages share `DemoViewportFrame`, and a pass on one page does not cover the others.
- Tailwind `sm:` and `md:` follow the browser window, not the inner screen.
- Alert dialog and autocomplete popups render on `document.body`. They do not stay inside the inner screen.
- A window narrower than 768px makes tablet and desktop the same width. Widen the window before treating that as a failure.
