# OTP field

The verification code is six empty boxes. Typing `1` fills the first box.

## Sub-features

- `otp-empty` opens with six empty boxes and the email hint.
- `otp-digit` shows `1` in the first box.

## How to get to it (user POV)

- Open `/docs/components/otp-field` and type in the first box.

## Driving it with the Cursor IDE browser

Preconditions:

- Sector23 is healthy at `http://127.0.0.1:4173`.
- `bun .cursor/skills/verify-sector23/verify.mjs doctor` reports that URL and `title=Sector23`.

- **Open the demo.** Go to the OTP page. Run `browser_navigate` with url `http://127.0.0.1:4173/docs/components/otp-field`, then `browser_lock` with action `lock`, then `browser_snapshot`. The page shows `Enter the verification code sent to your email`. The first code box is empty.
- **Type a digit.** Type `1` into the first box. Run `browser_type` on the snapshot ref whose role is `textbox` and name is `Verification code`, with text `1`. That box shows `1`. The later boxes stay empty.
- **Proof.** Save the snapshot after typing to `artifacts/otp-field/digit.aria.txt` and copy a screenshot to `artifacts/otp-field/digit.png`. Both show Sector23 and the digit `1` in the first box.

## Gotchas

- The first box is named `Verification code`. Later boxes are named `Character 2 of 6` through `Character 6 of 6`. Typing `1` moves focus to the second box.
- `d` would type into a box. This page is not a theme page.
