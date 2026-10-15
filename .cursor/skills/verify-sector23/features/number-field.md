# Number field

The price field opens at 100. The increase control changes it to 101.

## Sub-features

- `number-field-default` shows 100 in the Price field.
- `number-field-increment` changes the value to 101.

## How to get to it (user POV)

- Open `/docs/components/number-field`.

## Driving it with the Cursor IDE browser

Preconditions:

- Sector23 is healthy at `http://127.0.0.1:4173`.
- `bun .cursor/skills/verify-sector23/verify.mjs doctor` reports that URL and `title=Sector23 Docs | Toggle`.

- **Open the demo.** Go to the number field page. Run `browser_navigate` with url `http://127.0.0.1:4173/docs/components/number-field`, then `browser_lock` with action `lock`, then `browser_snapshot`. The textbox named `Price` has value `100`. A button named `Increase` and a button named `Decrease` are present.
- **Increase.** Click `Increase`. Run `browser_click` on the snapshot ref whose role is `button` and name is `Increase`. The Price value is `101`.
- **Proof.** Save the snapshot after the click to `artifacts/number-field/incremented.aria.txt` and copy a screenshot to `artifacts/number-field/incremented.png`. Both show Sector23 and `101`.

## Gotchas

- The increase control is the button named `Increase`. `Decrease` would show 99.
- `d` would type into the Price field. This page is not a theme page.
