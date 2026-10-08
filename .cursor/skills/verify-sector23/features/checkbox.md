# Checkbox

The checkbox demo shows one unchecked control labelled Accept terms and conditions. A click checks it.

## Sub-features

- `checkbox-unchecked` opens unchecked.
- `checkbox-check` checks Accept terms and conditions.

## How to get to it (user POV)

- Open `/docs/components/checkbox`.

## Driving it with the Cursor IDE browser

Preconditions:

- Sector23 is healthy at `http://127.0.0.1:4173`.
- `bun .cursor/skills/verify-sector23/verify.mjs doctor` reports that URL and `title=Sector23`.

- **Open the demo.** Go to the checkbox page. Run `browser_navigate` with url `http://127.0.0.1:4173/docs/components/checkbox`, then `browser_lock` with action `lock`, then `browser_snapshot`. The checkbox named `Accept terms and conditions` is unchecked.
- **Check it.** Click that checkbox. Run `browser_click` on the snapshot ref whose role is `checkbox` and name is `Accept terms and conditions`. The same checkbox is checked.
- **Proof.** Save the checked snapshot to `artifacts/checkbox/checked.aria.txt` and copy a screenshot to `artifacts/checkbox/checked.png`. Both show Sector23 and the checked Accept terms and conditions checkbox.

## Gotchas

- Match role `checkbox`. The visible words sit on the label.
- One click checks it. This recipe does not click again to clear it.
