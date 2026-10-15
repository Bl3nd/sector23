# Checkbox group

The checkbox group opens with Option 1 checked. Checking Option 2 leaves Option 1 checked.

## Sub-features

- `checkbox-group-default` opens with Option 1 checked and Option 2 unchecked.
- `checkbox-group-add` checks Option 2 without clearing Option 1.

## How to get to it (user POV)

- Open `/docs/components/checkbox-group`.

## Driving it with the Cursor IDE browser

Preconditions:

- Sector23 is healthy at `http://127.0.0.1:4173`.
- `bun .cursor/skills/verify-sector23/verify.mjs doctor` reports that URL and `title=Sector23 Docs | Toggle`.

- **Open the demo.** Go to the checkbox group page. Run `browser_navigate` with url `http://127.0.0.1:4173/docs/components/checkbox-group`, then `browser_lock` with action `lock`, then `browser_snapshot`. The group is named `Options`. The checkbox named `Option 1` is checked. The checkbox named `Option 2` is unchecked.
- **Check Option 2.** Click `Option 2`. Run `browser_click` on the snapshot ref whose role is `checkbox` and name is `Option 2`. `Option 1` and `Option 2` are both checked.
- **Proof.** Save the snapshot after the click to `artifacts/checkbox-group/option-2.aria.txt` and copy a screenshot to `artifacts/checkbox-group/option-2.png`. Both show Sector23 with Option 1 and Option 2 checked.

## Gotchas

- Option 3 stays unchecked. This recipe does not report it as verified.
- Match role `checkbox`, not the legend text alone.
