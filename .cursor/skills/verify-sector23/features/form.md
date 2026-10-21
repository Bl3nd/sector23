# Form

Submitting the empty form shows errors for Name and Email. The page stays on the form route.

## Sub-features

- `form-empty` opens with empty Name and Email fields and no errors.
- `form-invalid` shows both errors after Submit.

## How to get to it (user POV)

- Open `/docs/components/form` and press Submit without typing.

## Driving it with the Cursor IDE browser

Preconditions:

- Sector23 is healthy at `http://127.0.0.1:4173`.
- `bun .cursor/skills/verify-sector23/verify.mjs doctor` reports that URL and `title=Toggle | Sector23`.

- **Open the demo.** Go to the form page. Run `browser_navigate` with url `http://127.0.0.1:4173/docs/components/form`, then `browser_lock` with action `lock`, then `browser_snapshot`. Textboxes named `Name` and `Email` are empty. A button named `Submit` is present. No error text is shown.
- **Submit empty.** Click Submit. Run `browser_click` on the snapshot ref whose role is `button` and name is `Submit`. Name and Email have state `invalid`. The page text is `Please fill out this field.` under each. The URL is still `http://127.0.0.1:4173/docs/components/form`.
- **Proof.** Save the snapshot after Submit to `artifacts/form/invalid.aria.txt` and copy a screenshot to `artifacts/form/invalid.png`. Both show Sector23, `invalid` on Name and Email, and `Please fill out this field.`

## Gotchas

- Fill nothing before Submit. Typed values are a different path.
- `d` would type into these fields. This page is not a theme page.
