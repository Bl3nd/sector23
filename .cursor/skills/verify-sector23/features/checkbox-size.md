# Checkbox size

The Size example shows three checkboxes named Small, Medium (default), and Large. All three start checked. A click on Small unchecks that box. Medium (default) and Large stay checked.

## Sub-features

- `checkbox-size-checked` opens with Small, Medium (default), and Large checked.
- `checkbox-size-uncheck-small` unchecks Small and leaves the other two checked.

## How to get to it (user POV)

- Open `/docs/components/checkbox`. The Size example is the first block under Examples.

## Driving it with the Cursor IDE browser

Preconditions:

- Sector23 is healthy at `http://127.0.0.1:4173`.
- `bun .cursor/skills/verify-sector23/verify.mjs doctor` reports that URL and `title=Toggle | Sector23`.

- **Open the demo.** Go to the checkbox page. Run `browser_navigate` with url `http://127.0.0.1:4173/docs/components/checkbox`, then `browser_lock` with action `lock`, then `browser_snapshot`. The heading Size is present. Checkboxes named Small, Medium (default), and Large are checked.
- **Uncheck Small.** Click the checkbox named Small. Run `browser_click` on its snapshot ref. Small is not checked. Medium (default) and Large stay checked.
- **Proof.** Save the snapshot to `artifacts/checkbox-size/unchecked-small.aria.txt` and copy a screenshot to `artifacts/checkbox-size/unchecked-small.png`. Both show `Checkbox | Sector23` and the Size example.

## Gotchas

- Small, Medium (default), and Large are three different checkboxes. Do not click Accept terms and conditions.
- Match role `checkbox`. The visible words sit on the label.
