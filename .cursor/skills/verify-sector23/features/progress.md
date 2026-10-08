# Progress

The progress demo labels itself Uploading... and the value climbs from 10 toward 100 on its own.

## Sub-features

- `progress-start` shows Uploading... with a value below 100.
- `progress-climb` shows a higher value about a second later, still on the same page.

## How to get to it (user POV)

- Open `/docs/components/progress` and watch the value.

## Driving it with the Cursor IDE browser

Preconditions:

- Sector23 is healthy at `http://127.0.0.1:4173`.
- `bun .cursor/skills/verify-sector23/verify.mjs doctor` reports that URL and `title=Sector23`.

- **Open the demo.** Go to the progress page. Run `browser_navigate` with url `http://127.0.0.1:4173/docs/components/progress`, then `browser_lock` with action `lock`. The page shows `Uploading...`. Read `aria-valuenow` on the progressbar. The accessibility snapshot can omit that progressbar.
- **Wait.** Read `aria-valuenow` again after about a second. The second value is greater than the first, or it has reached 100. The label is still `Uploading...`.
- **Proof.** Save both values to `artifacts/progress/values.txt` and copy a screenshot to `artifacts/progress/uploading.png`. The screenshot shows Sector23 and `Uploading...`.

## Gotchas

- The step size is random, up to 25, once a second. Assert that the value increased, not a specific second reading.
- No click is required. Clicking the bar does not set the value.
