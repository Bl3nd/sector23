# Field

The workspace slug field starts empty, with the hint about lowercase letters. The error stays hidden on that pristine field. The error appears after the field has been edited, emptied, and then left.

## Sub-features

- `field-hint` shows the description while the field is still valid.
- `field-required` stays hidden on a pristine empty field. This harness did not produce the error.

## How to get to it (user POV)

- Open `/docs/components/field`. The hint is visible and the error is not.

## Driving it with the Cursor IDE browser

Preconditions:

- Sector23 is healthy at `http://127.0.0.1:4173`.
- `bun .cursor/skills/verify-sector23/verify.mjs doctor` reports that URL and `title=Toggle | Sector23`.

- **Open the demo.** Go to the field page. Run `browser_navigate` with url `http://127.0.0.1:4173/docs/components/field`, then `browser_lock` with action `lock`, then `browser_snapshot`. A textbox named `Workspace slug` is empty. The page shows `Lowercase letters, numbers, and hyphens only.` The error `Enter a slug for your workspace.` is absent.
- **Leave the pristine field.** Focus the textbox, then try to move away. `browser_press_key` with key `Tab` can leave focus on the slug input, and the error stays absent.
- **Edit and clear.** `browser_type` with text `a` sets the value to `a`. `browser_press_key` with key `Backspace` does not remove it. A value clear that does not go through the field's change handler, followed by a blur, still leaves `Enter a slug for your workspace.` absent and `aria-invalid` null.
- **Proof.** Save the hint snapshot to `artifacts/field/hint.aria.txt`. Record the error path as not driven when Backspace does not change the value. Do not call that a product failure.

## Gotchas

- A pristine empty blur does not show the slug error. The error needs a real edit that the input receives, then an empty value, then blur.
- `browser_press_key` does not insert or delete text in this field. `browser_type` does insert.
- `d` toggles the theme unless focus is already in the field.
