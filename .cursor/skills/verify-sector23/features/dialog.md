# Dialog

The dialog demo starts as a collapsed Delete project button. Opening it shows a confirmation titled "Delete project?" for Acme Website. Close dismisses it. Neither button deletes a project.

## Sub-features

- `dialog-closed` shows only the collapsed Delete project button.
- `dialog-open` shows the confirmation title and description.
- `dialog-close` dismisses the confirmation with Close.

## How to get to it (user POV)

- Open `/docs/components/dialog`.

## Driving it with the Cursor IDE browser

Preconditions:

- Sector23 is healthy at `http://127.0.0.1:4173`.
- `bun .cursor/skills/verify-sector23/verify.mjs doctor` reports that URL and `title=Sector23 Docs | Toggle`.

- **Open the demo.** Go to the dialog page. Run `browser_navigate` with url `http://127.0.0.1:4173/docs/components/dialog`, then `browser_lock` with action `lock`, then `browser_snapshot`. The only demo control is a button named `Delete project` with state `collapsed`. The page text is `Delete project`.
- **Open the confirmation.** Click that button. Run `browser_click` on the snapshot ref whose role is `button`, name is `Delete project`, and state is `collapsed`. The resulting snapshot contains the heading `Delete project?`, the description text `Acme Website`, a button named `Close`, and a button named `Delete project` inside the dialog.
- **Dismiss.** Click Close. Run `browser_snapshot`, then `browser_click` on the ref whose role is `button` and name is `Close`. The heading `Delete project?` is gone, and the collapsed `Delete project` button is back.
- **Proof.** Save the open snapshot to `artifacts/dialog/open.aria.txt` and the closed snapshot to `artifacts/dialog/closed.aria.txt`. Copy a screenshot of the open confirmation to `artifacts/dialog/open.png`. The open artifacts show Sector23, `Delete project?`, and `Acme Website`.

## Gotchas

- Before the dialog is open, the confirmation copy is not in the page text. Absence of `Acme Website` on the closed page is expected.
- After it opens, two controls are named `Delete project`: the trigger and the button inside the dialog. Dismiss with `Close`.
- The buttons only open and close the demo. Do not look for a deleted project, a network call, or a changed route.
