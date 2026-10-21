# Input

The input demo is one empty email field. Typing shows that text in the field.

## Sub-features

- `input-empty` opens with the placeholder `Enter you email` and an empty value.
- `input-type` shows `ada@sector23.dev` after typing.

## How to get to it (user POV)

- Open `/docs/components/input` and type in the field.

## Driving it with the Cursor IDE browser

Preconditions:

- Sector23 is healthy at `http://127.0.0.1:4173`.
- `bun .cursor/skills/verify-sector23/verify.mjs doctor` reports that URL and `title=Toggle | Sector23`.

- **Open the demo.** Go to the input page. Run `browser_navigate` with url `http://127.0.0.1:4173/docs/components/input`, then `browser_lock` with action `lock`, then `browser_snapshot`. One textbox is present. Its name and placeholder are `Enter you email`, and its value is empty.
- **Type.** Type into that textbox. Run `browser_type` on the snapshot ref whose role is `textbox` and name is `Enter you email`, with text `ada@sector23.dev`. The textbox value is `ada@sector23.dev`.
- **Proof.** Save the snapshot after typing to `artifacts/input/typed.aria.txt` and copy a screenshot to `artifacts/input/typed.png`. Both show Sector23 and `ada@sector23.dev`.

## Gotchas

- The placeholder is `Enter you email`, including that spelling.
- The textbox has no separate visible label. Its accessible name is the placeholder `Enter you email`.
- `d` would type into this field. This page is not a theme page.
