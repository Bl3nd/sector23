# Toast

Create toast adds a notification titled with the next count, with the description "This is a toast notification". The notification leaves on its own after about five seconds.

## Sub-features

- `toast-create` shows the first toast after Create toast is clicked on a fresh load.
- `toast-leave` removes that toast without another click.

## How to get to it (user POV)

- Open `/docs/components/toast`.

## Driving it with the Cursor IDE browser

Preconditions:

- Sector23 is healthy at `http://127.0.0.1:4173`.
- `bun .cursor/skills/verify-sector23/verify.mjs doctor` reports that URL and `title=Toggle | Sector23`.
- The page was loaded fresh, so the next title is `Toast 1 created`.

- **Open the demo.** Go to the toast page. Run `browser_navigate` with url `http://127.0.0.1:4173/docs/components/toast`, then `browser_lock` with action `lock`, then `browser_snapshot`. A button named `Create toast` is present, and a region named `Notifications` contains no toast heading.
- **Create the toast.** Click `Create toast`. Run `browser_click` on the snapshot ref whose role is `button` and name is `Create toast`. The snapshot returned by that click contains a heading named `Toast 1 created` and the text `This is a toast notification` inside the `Notifications` region.
- **Confirm it leaves.** Take another snapshot after the toast is gone. Run `browser_snapshot` once the heading is no longer in the tree. The `Notifications` region remains, and `Toast 1 created` does not.
- **Proof.** Save the click snapshot to `artifacts/toast/created.aria.txt`. Copy a screenshot taken after the entrance, showing the toast title, to `artifacts/toast/created.png`. Save the later snapshot to `artifacts/toast/gone.aria.txt`.

## Gotchas

- The count lives in the page. After one click the next title is `Toast 2 created`. Reload the route before expecting `Toast 1 created`.
- The toast root is a `dialog` in the DOM and contains a button named `Dismiss`. The accessibility snapshot can omit that button while still showing the heading. If `Dismiss` has no ref, do not invent a click. This recipe proves creation from the heading and removal from the later snapshot.
- The toast enters from below the viewport. A screenshot taken in the same instant as the click can miss it even when the heading is already in the snapshot. Wait until the toast is on screen before taking `created.png`.
- The toast stays for about five seconds while the pointer is off the `Notifications` region. A pointer on that region pauses the timer. A snapshot taken after the toast leaves, which lacks the heading, is the removal proof. Do not treat that absence as a failed create.
