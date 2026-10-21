# Tooltip

Clicking Bold presses that toggle and leaves the tooltip closed. The IDE browser cannot rest a real pointer on Bold, and its Tab key does not set `:focus-visible`.

## Sub-features

- `tooltip-hidden` shows the Bold, Italic, and Underline toggles without a tooltip.
- `tooltip-bold` stays closed after a click and after `browser_press_key` Tab. A real pointer hover is the untested open path.

## How to get to it (user POV)

- Open `/docs/components/tooltip` and rest on the Bold toggle.

## Driving it with the Cursor IDE browser

Preconditions:

- Sector23 is healthy at `http://127.0.0.1:4173`.
- `bun .cursor/skills/verify-sector23/verify.mjs doctor` reports that URL and `title=Toggle | Sector23`.

- **Open the demo.** Go to the tooltip page. Run `browser_navigate` with url `http://127.0.0.1:4173/docs/components/tooltip`, then `browser_lock` with action `lock`, then `browser_snapshot`. Buttons named `Bold`, `Italic`, and `Underline` are present. The text `Bold text` is absent.
- **Click Bold.** Run `browser_click` on the button named `Bold`. Bold is pressed. The text `Bold text` is absent. `browser_press_key` with `Shift+Tab` and then `Tab` can return focus to Bold without setting `:focus-visible` and without opening a tooltip.
- **Proof.** Save that snapshot to `artifacts/tooltip/closed.aria.txt` and copy a screenshot to `artifacts/tooltip/closed.png`. Both show Sector23, pressed Bold, and no `Bold text`. Record the open path as not driven.

## Gotchas

- Clicking Bold presses that toggle and does not open the tooltip.
- The IDE browser has no hover action. `browser_press_key` does not set `:focus-visible`. Do not mark the open path verified through either of those.
- Italic shows `Italicize text`. Underline shows `Underline text`. This recipe does not open those.
- A snapshot taken before the tooltip delay can miss `Bold text`. Snapshot again once the text is in the tree.
