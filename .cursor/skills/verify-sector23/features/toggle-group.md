# Toggle group

The text-alignment group opens with the left toggle pressed. Choosing center presses center and releases left.

## Sub-features

- `toggle-group-left` opens with the left alignment toggle pressed.
- `toggle-group-center` presses the center toggle and releases the left toggle.

## How to get to it (user POV)

- Open `/docs/components/toggle-group`.

## Driving it with the Cursor IDE browser

Preconditions:

- Sector23 is healthy at `http://127.0.0.1:4173`.
- `bun .cursor/skills/verify-sector23/verify.mjs doctor` reports that URL and `title=Toggle | Sector23`.

- **Open the demo.** Go to the toggle group page. Run `browser_navigate` with url `http://127.0.0.1:4173/docs/components/toggle-group`, then `browser_lock` with action `lock`, then `browser_snapshot`. Three unnamed buttons are the alignment toggles. The first has state `pressed`. The second has state `released`.
- **Choose center.** Click the second toggle. Run `browser_click` on that released button. It has state `pressed`. The first button has state `released`.
- **Proof.** Save the snapshot after the click to `artifacts/toggle-group/center.aria.txt` and copy a screenshot to `artifacts/toggle-group/center.png`. Both show Sector23 with the center toggle pressed.

## Gotchas

- The three alignment buttons have no accessible name. Order is left, center, right. Use pressed state and that order.
- The right toggle stays released. This recipe does not press it.
- This is not the single Bold toggle. That demo is `/docs/components/toggle`.
