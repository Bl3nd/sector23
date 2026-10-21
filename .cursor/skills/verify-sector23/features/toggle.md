# Toggle

The toggle demo shows one Bold button. A click presses it, and the next click releases it.

## Sub-features

- `toggle-released` shows Bold released when the page opens.
- `toggle-press` presses Bold.
- `toggle-release` releases Bold after it is pressed.

## How to get to it (user POV)

- Open `/docs/components/toggle`.

## Driving it with the Cursor IDE browser

Preconditions:

- Sector23 is healthy at `http://127.0.0.1:4173`.
- `bun .cursor/skills/verify-sector23/verify.mjs doctor` reports that URL and `title=Toggle | Sector23`.

- **Open the demo.** Go to the toggle page. Run `browser_navigate` with url `http://127.0.0.1:4173/docs/components/toggle`, then `browser_lock` with action `lock`, then `browser_snapshot`. The document is named `Toggle | Sector23` and the button named `Bold` has state `released`.
- **Press Bold.** Click that button. Run `browser_click` on the snapshot ref whose role is `button` and name is `Bold`. The same button now has state `pressed`.
- **Release Bold.** Click `Bold` again. Run `browser_snapshot`, then `browser_click` on the new ref for `Bold`. The button has state `released`.
- **Proof.** Save the released snapshot and the pressed snapshot, and copy a screenshot of the pressed button. The pressed snapshot is `artifacts/toggle/pressed.aria.txt` and the screenshot is `artifacts/toggle/pressed.png`. Both identify Sector23 and the Bold button.

## Gotchas

- The dev overlay button `Open Next.js Dev Tools` is not Bold. Clicking it opens the overlay and does not press the toggle.
- Snapshot refs expire after a click. Take a new snapshot before the second click.
- `released` and `pressed` are the states that prove the toggle. Focus alone does not.
