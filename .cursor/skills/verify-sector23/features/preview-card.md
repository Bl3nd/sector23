# Preview card

The preview card stays hidden until Priya Raman is hovered or focused. The card names her role.

## Sub-features

- `preview-card-hidden` shows the sentence and the Priya Raman link, without the role.
- `preview-card-open` shows Site Reliability Engineer on the card.

## How to get to it (user POV)

- Open `/docs/components/preview-card` and rest on the Priya Raman link.

## Driving it with the Cursor IDE browser

Preconditions:

- Sector23 is healthy at `http://127.0.0.1:4173`.
- `bun .cursor/skills/verify-sector23/verify.mjs doctor` reports that URL and `title=Sector23 Docs | Toggle`.

- **Open the demo.** Go to the preview card page. Run `browser_navigate` with url `http://127.0.0.1:4173/docs/components/preview-card`, then `browser_lock` with action `lock`, then `browser_snapshot`. A link named `Priya Raman` is present. The text `Site Reliability Engineer` is absent.
- **Show the card.** Hover the link named `Priya Raman`. A click focuses the link, adds `#` to the URL, and does not show `Site Reliability Engineer`. The card appears after a real pointer hover.
- **Proof.** Save the open snapshot to `artifacts/preview-card/open.aria.txt` and copy a screenshot to `artifacts/preview-card/open.png`. Both show Sector23 and `Site Reliability Engineer`.

## Gotchas

- The link href is `#`. A click stays on this route and adds `#`. It does not open the card.
- The IDE browser has no hover action, and a scripted mouse event does not open the card.
- The card copy is absent until the link is hovered or focused.
