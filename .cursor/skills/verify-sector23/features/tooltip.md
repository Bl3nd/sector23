# Tooltip

Focusing Bold shows the tooltip Bold text. The same page has Italicize text and Underline text on the other toggles.

## Sub-features

- `tooltip-hidden` shows the Bold, Italic, and Underline toggles without a tooltip.
- `tooltip-bold` shows `Bold text` when Bold is focused.

## How to get to it (user POV)

- Open `/docs/components/tooltip` and rest on the Bold toggle.

## Driving it with the Cursor IDE browser

Preconditions:

- Sector23 is healthy at `http://127.0.0.1:4173`.
- `bun .cursor/skills/verify-sector23/verify.mjs doctor` reports that URL and `title=Sector23 Docs | Toggle`.

- **Open the demo.** Go to the tooltip page. Run `browser_navigate` with url `http://127.0.0.1:4173/docs/components/tooltip`, then `browser_lock` with action `lock`, then `browser_snapshot`. Buttons named `Bold`, `Italic`, and `Underline` are present. The text `Bold text` is absent.
- **Show the tooltip.** Hover Bold. A click focuses and presses Bold and does not show `Bold text`. The popup is not in the page until a real pointer hover. When the hover lands, the page shows `Bold text`.
- **Proof.** Save the snapshot that contains `Bold text` to `artifacts/tooltip/bold.aria.txt` and copy a screenshot to `artifacts/tooltip/bold.png`. Both show Sector23 and `Bold text`.

## Gotchas

- Clicking Bold presses that toggle and does not open the tooltip. The IDE browser has no hover action, and a scripted mouse event does not open it.
- The proof is the tooltip text `Bold text` after a real pointer hover.
- Italic shows `Italicize text`. Underline shows `Underline text`. This recipe does not open those.
- A snapshot taken before the tooltip delay can miss `Bold text`. Snapshot again once the text is in the tree.
