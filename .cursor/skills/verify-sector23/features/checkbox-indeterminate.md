# Checkbox indeterminate

The Indeterminate example starts mixed. The checkbox is named Some notifications. It is not checked, and `aria-checked` is `mixed`. A click checks it and clears the mixed state.

## Sub-features

- `checkbox-mixed` opens with aria-checked mixed.
- `checkbox-clear-mixed` checks Some notifications.

## How to get to it (user POV)

- Open `/docs/components/checkbox`.

## Driving it with the Cursor IDE browser

Preconditions:

- Sector23 is healthy at `http://127.0.0.1:4173`.
- `bun .cursor/skills/verify-sector23/verify.mjs doctor` reports that URL and `title=Toggle | Sector23`.

- **Open the demo.** Go to the checkbox page. Run `browser_navigate` with url `http://127.0.0.1:4173/docs/components/checkbox`, then `browser_lock` with action `lock`, then `browser_snapshot`. One checkbox is named `Some notifications`. Its checked state is mixed.
- **Check it.** Click that checkbox. Run `browser_click` on its snapshot ref. The checkbox named Some notifications is checked, and it is no longer mixed.
- **Proof.** Save the checked snapshot to `artifacts/checkbox-indeterminate/checked.aria.txt` and copy a screenshot to `artifacts/checkbox-indeterminate/checked.png`.

## Gotchas

- The mixed box has an empty background and a minus. After the click it is filled and shows a check.
- Do not treat an unchecked Accept terms checkbox as this demo.
