# Tabs

The tabs demo opens on Account. Choosing Settings shows the Settings panel and leaves Account unselected.

## Sub-features

- `tabs-default` opens with Account selected and the Account panel text visible.
- `tabs-settings` selects Settings and shows the Settings panel text.

## How to get to it (user POV)

- Open `/docs/components/tabs`.

## Driving it with the Cursor IDE browser

Preconditions:

- Sector23 is healthy at `http://127.0.0.1:4173`.
- `bun .cursor/skills/verify-sector23/verify.mjs doctor` reports that URL and `title=Toggle | Sector23`.

- **Open the demo.** Go to the tabs page. Run `browser_navigate` with url `http://127.0.0.1:4173/docs/components/tabs`, then `browser_lock` with action `lock`, then `browser_snapshot`. The tab named `Account` has state `selected`, and a text node named `Account` is present.
- **Select Settings.** Click the Settings tab. Run `browser_click` on the snapshot ref whose role is `tab` and name is `Settings`. That tab has state `selected`, the text node is named `Settings`, and `Account` is no longer selected.
- **Proof.** Save the snapshot after the click to `artifacts/tabs/settings.aria.txt` and copy a screenshot to `artifacts/tabs/settings.png`. Both show Sector23, the selected Settings tab, and the Settings text.

## Gotchas

- Match role `tab`, not a button with the same visible word.
- The panel text and the tab name are both `Settings` after the click. The proof is the selected state plus that text, not the tab name alone.
- `Billing` is a third tab. This recipe does not select it, so do not report Billing as verified.
