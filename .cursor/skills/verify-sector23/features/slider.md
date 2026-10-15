# Slider

The volume slider opens at 25. Arrow Right raises the value.

## Sub-features

- `slider-default` shows Volume at 25.
- `slider-increase` raises the value above 25.

## How to get to it (user POV)

- Open `/docs/components/slider`, focus the thumb, and press Arrow Right.

## Driving it with the Cursor IDE browser

Preconditions:

- Sector23 is healthy at `http://127.0.0.1:4173`.
- `bun .cursor/skills/verify-sector23/verify.mjs doctor` reports that URL and `title=Sector23 Docs | Toggle`.

- **Open the demo.** Go to the slider page. Run `browser_navigate` with url `http://127.0.0.1:4173/docs/components/slider`, then `browser_lock` with action `lock`, then `browser_snapshot`. The slider named `Volume` shows `25`.
- **Raise it.** Focus the thumb and press Arrow Right. A click on the slider ref can be intercepted by the thumb. Click the thumb, then run `browser_press_key` with key `ArrowRight`. The value changes from `25` to `26`.
- **Proof.** Save the snapshot after the key to `artifacts/slider/increased.aria.txt` and copy a screenshot to `artifacts/slider/increased.png`. Both show Sector23, `Volume`, and a value greater than 25.

## Gotchas

- Assert that the value increased. The step is 1 unless the control says otherwise, so the next value is 26 when the step is 1.
- Arrow Left lowers the value. This recipe presses Arrow Right.
