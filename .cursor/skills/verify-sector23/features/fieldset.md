# Fieldset

The fieldset demo is an account form. Typing in Email shows that address in the field.

## Sub-features

- `fieldset-empty` opens with empty Email, Password, and Confirm Password fields.
- `fieldset-email` shows `ada@sector23.dev` in Email after typing.

## How to get to it (user POV)

- Open `/docs/components/fieldset` and type in Email.

## Driving it with the Cursor IDE browser

Preconditions:

- Sector23 is healthy at `http://127.0.0.1:4173`.
- `bun .cursor/skills/verify-sector23/verify.mjs doctor` reports that URL and `title=Sector23 Docs | Toggle`.

- **Open the demo.** Go to the fieldset page. Run `browser_navigate` with url `http://127.0.0.1:4173/docs/components/fieldset`, then `browser_lock` with action `lock`, then `browser_snapshot`. The group is named `Account Information`. The textbox named `Email` is empty.
- **Type an email.** Type into Email. Run `browser_type` on the snapshot ref whose role is `textbox` and name is `Email`, with text `ada@sector23.dev`. The Email textbox value is `ada@sector23.dev`. Password and Confirm Password stay empty.
- **Proof.** Save the snapshot after typing to `artifacts/fieldset/email.aria.txt` and copy a screenshot to `artifacts/fieldset/email.png`. Both show Sector23 and `ada@sector23.dev`.

## Gotchas

- `d` would type into these fields. This page is not a theme page.
- Password fields stay masked. This recipe types only in Email.
