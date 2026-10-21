# Theme

Pressing `d` flips the document between the `dark` and `light` theme classes. Pressing it again restores the previous class.

## Sub-features

- `theme-read` records the current theme class on a docs page.
- `theme-flip` presses `d` and lands on the other theme class.
- `theme-restore` presses `d` again and returns to the class from `theme-read`.

## How to get to it (user POV)

- Focus the page background, not a text field, and press `d`. The tabs demo is a safe page because it has no text field.

## Driving it with the Cursor IDE browser

Preconditions:

- Sector23 is healthy at `http://127.0.0.1:4173`.
- `bun .cursor/skills/verify-sector23/verify.mjs doctor` reports that URL and `title=Toggle | Sector23`.
- Focus is not in an editable control.

- **Open a page without a text field.** Go to the tabs demo. Run `browser_navigate` with url `http://127.0.0.1:4173/docs/components/tabs`, then `browser_lock` with action `lock`.
- **Read the theme.** Read the document class. Run `browser_cdp` with method `Runtime.evaluate`, params `{ "expression": "document.documentElement.classList.contains('dark') ? 'dark' : document.documentElement.classList.contains('light') ? 'light' : 'neither'", "returnByValue": true }`. The value is `dark` or `light`. Record it as the start token.
- **Flip.** Press `d`. Run `browser_press_key` with key `d`, then run the same `Runtime.evaluate`. The value is the other token.
- **Restore.** Press `d` again. Run `browser_press_key` with key `d`, then run the same `Runtime.evaluate`. The value is the start token.
- **Proof.** Save the three tokens to `artifacts/theme/class-tokens.txt` in order, and copy a screenshot of each theme to `artifacts/theme/before.png` and `artifacts/theme/after.png`. The document title on the page is `Tabs | Sector23`.

## Gotchas

- The starting token follows the operating system. `defaultTheme` is `system`. Assert that the token flips and flips back, not that the first token is `dark`.
- Match the class token `dark` or `light`. Font class names on `<html>` contain other words; `classList.contains` is the check.
- `d` types a letter when an input, textarea, select, or contenteditable element is focused. Do not start this recipe on a field demo.
- `Ctrl`, `Alt`, and `Meta` with `d` do not flip the theme. `Shift+d` still flips, because the handler checks `event.key` and does not check `shiftKey`.
