# Alert dialog

The alert dialog starts as a collapsed Delete project button. Opening it shows a confirmation titled Delete "Atlas launch"?. Cancel dismisses it. Neither button deletes a project.

## Sub-features

- `alert-dialog-closed` shows only the collapsed Delete project button.
- `alert-dialog-open` shows the confirmation title and the task count.
- `alert-dialog-cancel` dismisses the confirmation with Cancel.

## How to get to it (user POV)

- Open `/docs/components/alert-dialog`.

## Driving it with the Cursor IDE browser

Preconditions:

- Sector23 is healthy at `http://127.0.0.1:4173`.
- `bun .cursor/skills/verify-sector23/verify.mjs doctor` reports that URL and `title=Sector23`.

- **Open the demo.** Go to the alert dialog page. Run `browser_navigate` with url `http://127.0.0.1:4173/docs/components/alert-dialog`, then `browser_lock` with action `lock`, then `browser_snapshot`. The only demo control is a button named `Delete project` with state `collapsed`.
- **Open the confirmation.** Click that button. Run `browser_click` on the snapshot ref whose role is `button`, name is `Delete project`, and state is `collapsed`. The resulting snapshot contains the heading `Delete "Atlas launch"?`, the text `24 tasks`, a button named `Cancel`, and a button named `Delete project` inside the dialog.
- **Dismiss.** Click Cancel. Run `browser_snapshot`, then `browser_click` on the ref whose role is `button` and name is `Cancel`. The heading is gone, and the collapsed `Delete project` button is back.
- **Proof.** Save the open snapshot to `artifacts/alert-dialog/open.aria.txt` and the closed snapshot to `artifacts/alert-dialog/closed.aria.txt`. Copy a screenshot of the open confirmation to `artifacts/alert-dialog/open.png`. The open artifacts show Sector23, `Delete "Atlas launch"?`, and `24 tasks`.

## Gotchas

- Two controls are named `Delete project` while the dialog is open. Dismiss with `Cancel`.
- The snapshot taken in the same instant as Cancel can still list the heading while the dialog animates out. Snapshot again once `Delete "Atlas launch"?` is gone.
- The buttons only open and close the demo. The route stays `/docs/components/alert-dialog`.
