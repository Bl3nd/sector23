# Label

The label demo pairs the word Name with an empty field. Typing shows that text in the Name field.

## Sub-features

- `label-empty` opens with an empty Name field.
- `label-type` shows `Ada` in the Name field.

## How to get to it (user POV)

- Open `/docs/components/label` and type in the Name field.

## Driving it with the Cursor IDE browser

Preconditions:

- Sector23 is healthy at `http://127.0.0.1:4173`.
- `bun .cursor/skills/verify-sector23/verify.mjs doctor` reports that URL and `title=Sector23`.

- **Open the demo.** Go to the label page. Run `browser_navigate` with url `http://127.0.0.1:4173/docs/components/label`, then `browser_lock` with action `lock`, then `browser_snapshot`. A textbox named `Name` is empty. Its placeholder is `Enter your name`.
- **Type a name.** Type into that textbox. Run `browser_type` on the snapshot ref whose role is `textbox` and name is `Name`, with text `Ada`. The textbox value is `Ada`.
- **Proof.** Save the snapshot after typing to `artifacts/label/typed.aria.txt` and copy a screenshot to `artifacts/label/typed.png`. Both show Sector23 and `Ada` in the Name field.

## Gotchas

- The accessible name is `Name`, from the label wrapped around the field.
- `d` would type into this field. This page is not a theme page.
