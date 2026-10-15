# Field

The workspace slug field starts empty, with the hint about lowercase letters. Leaving it empty shows Enter a slug for your workspace.

## Sub-features

- `field-hint` shows the description while the field is still valid.
- `field-required` shows the error after the empty field is left.

## How to get to it (user POV)

- Open `/docs/components/field`, focus the slug field, then leave it without typing.

## Driving it with the Cursor IDE browser

Preconditions:

- Sector23 is healthy at `http://127.0.0.1:4173`.
- `bun .cursor/skills/verify-sector23/verify.mjs doctor` reports that URL and `title=Sector23 Docs | Toggle`.

- **Open the demo.** Go to the field page. Run `browser_navigate` with url `http://127.0.0.1:4173/docs/components/field`, then `browser_lock` with action `lock`, then `browser_snapshot`. A textbox named `Workspace slug` is empty. The page shows `Lowercase letters, numbers, and hyphens only.` The error `Enter a slug for your workspace.` is absent.
- **Leave it empty.** Focus the textbox, then move focus away. Run `browser_click` on the textbox named `Workspace slug`, then `browser_press_key` with key `Tab`. The page shows `Enter a slug for your workspace.`
- **Proof.** Save the snapshot after Tab to `artifacts/field/error.aria.txt` and copy a screenshot to `artifacts/field/error.png`. Both show Sector23 and `Enter a slug for your workspace.`

## Gotchas

- The error waits for blur. A snapshot taken while the field is still focused can miss it.
- `d` would type into this field. This page is not a theme page.
