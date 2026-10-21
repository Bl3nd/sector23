# Preview card

The preview card names Priya Raman's role. A click on the link adds `#` and the card appears after the open delay. An immediate snapshot can still miss it.

## Sub-features

- `preview-card-hidden` shows the sentence and the Priya Raman link, without the role.
- `preview-card-open` shows Site Reliability Engineer on the card.

## How to get to it (user POV)

- Open `/docs/components/preview-card` and rest on the Priya Raman link.

## Driving it with the Cursor IDE browser

Preconditions:

- Sector23 is healthy at `http://127.0.0.1:4173`.
- `bun .cursor/skills/verify-sector23/verify.mjs doctor` reports that URL and `title=Toggle | Sector23`.

- **Open the demo.** Go to the preview card page. Run `browser_navigate` with url `http://127.0.0.1:4173/docs/components/preview-card`, then `browser_lock` with action `lock`, then `browser_snapshot`. A link named `Priya Raman` is present. The text `Site Reliability Engineer` is absent.
- **Show the card.** Click the link named `Priya Raman`. The URL gains `#`. Wait, then snapshot again. The page shows `Site Reliability Engineer`. The IDE browser has no hover action. Programmatic focus and `browser_press_key` Tab do not set `:focus-visible` and did not open the card.
- **Proof.** Save the open snapshot to `artifacts/preview-card/open.aria.txt` and copy a screenshot to `artifacts/preview-card/open.png`. Both show Sector23 and `Site Reliability Engineer`.

## Gotchas

- The link href is `#`. A click stays on this route and adds `#`.
- The card can still be closed in the snapshot returned by the click. Read the page again after the open delay.
- The IDE browser has no hover action. Do not mark a hover path verified.
