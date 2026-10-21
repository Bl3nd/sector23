# Dialog

The closed dialog page lists four triggers: `Delete project`, `What's new`, `Keyboard shortcuts`, and `Manage subscription`. The Delete project demo opens a confirmation titled "Delete project?" for Acme Website. Close dismisses it. Neither button deletes a project. The Manage subscription demo nests a second dialog inside the first.

## Sub-features

- `dialog-closed` shows the four collapsed triggers: `Delete project`, `What's new`, `Keyboard shortcuts`, and `Manage subscription`.
- `dialog-open` shows the confirmation title and description.
- `dialog-close` dismisses the confirmation with Close.
- `dialog-nested-parent` opens `Manage subscription` and shows the heading `Subscription`.
- `dialog-nested-child` opens `Cancel plan` and shows the heading `Cancel your plan?`.
- `dialog-nested-child-close` clicks `Keep plan`. The child heading is gone. The parent heading remains. Focus is on the button named `Cancel plan`.

## How to get to it (user POV)

- Open `/docs/components/dialog`.

## Driving it with the Cursor IDE browser

Preconditions:

- Sector23 is healthy at `http://127.0.0.1:4173`.
- `bun .cursor/skills/verify-sector23/verify.mjs doctor` reports that URL and `title=Toggle | Sector23`.

- **Open the demo.** Go to the dialog page. Run `browser_navigate` with url `http://127.0.0.1:4173/docs/components/dialog`, then `browser_lock` with action `lock`, then `browser_snapshot`. The page has buttons named `Delete project`, `What's new`, `Keyboard shortcuts`, and `Manage subscription`, each with state `collapsed`. Drive Delete project through the steps below.
- **Open the confirmation.** Click that button. Run `browser_click` on the snapshot ref whose role is `button`, name is `Delete project`, and state is `collapsed`. The resulting snapshot contains the heading `Delete project?`, the description text `Acme Website`, a button named `Close`, and a button named `Delete project` inside the dialog.
- **Dismiss.** Click Close. Run `browser_snapshot`, then `browser_click` on the ref whose role is `button` and name is `Close`. The heading `Delete project?` is gone, and the collapsed `Delete project` button is back.
- **Open the nested dialogs.** Click `Manage subscription` and wait for the heading `Subscription`. Click `Cancel plan` and wait for the heading `Cancel your plan?`.
- **Read the nested attributes.** Use `browser_cdp` with `Runtime.evaluate` and `returnByValue`, after the headings are visible. Do not assert them from the accessibility snapshot.
  - Parent open, child closed. One `[data-slot="dialog-popup"]` and one `[data-slot="dialog-viewport"]`. Neither has `data-nested` or `data-nested-dialog-open`.
  - Child open. Two popups and two viewports. The first popup and viewport in DOM order have `data-nested-dialog-open` and do not have `data-nested`. The second pair have `data-nested` and do not have `data-nested-dialog-open`. The parent popup's `--nested-dialogs` is `1`.
- **Close the child.** Click `Keep plan`. Poll until the heading `Cancel your plan?` is gone. `Subscription` is still present. The remaining popup and viewport do not have `data-nested-dialog-open`. The button named `Cancel plan` is focused.
- **Proof.** Save the open snapshot to `artifacts/dialog/open.aria.txt` and the closed snapshot to `artifacts/dialog/closed.aria.txt`. Copy a screenshot of the open confirmation to `artifacts/dialog/open.png`. The open artifacts show Sector23, `Delete project?`, and `Acme Website`.

## Gotchas

- Before the dialog is open, the confirmation copy is not in the page text. Absence of `Acme Website` on the closed page is expected.
- After it opens, two controls are named `Delete project`: the trigger and the button inside the dialog. Dismiss with `Close`.
- The buttons only open and close the demo. Do not look for a deleted project, a network call, or a changed route.
