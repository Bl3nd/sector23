# Checkbox

The checkbox page has four controls named Accept terms and conditions. The first, above Examples, starts unchecked. A click checks that one.

## Sub-features

- `checkbox-unchecked` opens unchecked.
- `checkbox-check` checks Accept terms and conditions.

## How to get to it (user POV)

- Open `/docs/components/checkbox`.

## Driving it with the Cursor IDE browser

Preconditions:

- Sector23 is healthy at `http://127.0.0.1:4173`.
- `bun .cursor/skills/verify-sector23/verify.mjs doctor` reports that URL and `title=Toggle | Sector23`.

- **Open the demo.** Go to the checkbox page. Run `browser_navigate` with url `http://127.0.0.1:4173/docs/components/checkbox`, then `browser_lock` with action `lock`, then `browser_snapshot`. Four checkboxes are named `Accept terms and conditions`. The first, above Examples, is unchecked.
- **Check it.** Click that first checkbox. Run `browser_click` on its snapshot ref. That checkbox is checked. The invalid checkbox stays unchecked.
- **Proof.** Save the checked snapshot to `artifacts/checkbox/checked.aria.txt` and copy a screenshot to `artifacts/checkbox/checked.png`. Both show Sector23 and the checked Accept terms and conditions checkbox.

## Gotchas

- Four checkboxes share the name `Accept terms and conditions`. Use the first, above Examples.
- Match role `checkbox`. The visible words sit on the label.
