# Toolbar

The toolbar alignment toggles start released. Pressing Align center presses that toggle.

## Sub-features

- `toolbar-released` opens with Align left, Align center, and Align right released.
- `toolbar-center` presses Align center.

## How to get to it (user POV)

- Open `/docs/components/toolbar`.

## Driving it with the Cursor IDE browser

Preconditions:

- Sector23 is healthy at `http://127.0.0.1:4173`.
- `bun .cursor/skills/verify-sector23/verify.mjs doctor` reports that URL and `title=Sector23`.

- **Open the demo.** Go to the toolbar page. Run `browser_navigate` with url `http://127.0.0.1:4173/docs/components/toolbar`, then `browser_lock` with action `lock`, then `browser_snapshot`. Buttons named `Align left`, `Align center`, and `Align right` are released. A link named `Help` is present.
- **Press Align center.** Click `Align center`. Run `browser_click` on the snapshot ref whose role is `button` and name is `Align center`. That button is pressed. `Align left` and `Align right` stay released.
- **Proof.** Save the snapshot after the click to `artifacts/toolbar/center.aria.txt` and copy a screenshot to `artifacts/toolbar/center.png`. Both show Sector23 and Align center pressed.

## Gotchas

- `Format as currency` and `Format as percentage` are separate buttons. This recipe does not press them.
- `Help` is a link to `#`. This recipe does not follow it.
