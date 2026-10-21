# Popover

The popover starts closed. Opening Notifications shows three unread items. Mark all as read only closes the popover.

## Sub-features

- `popover-closed` shows the Notifications button and no unread count.
- `popover-open` shows the unread count and the first message.
- `popover-close` dismisses the popover with Mark all as read.

## How to get to it (user POV)

- Open `/docs/components/popover`.

## Driving it with the Cursor IDE browser

Preconditions:

- Sector23 is healthy at `http://127.0.0.1:4173`.
- `bun .cursor/skills/verify-sector23/verify.mjs doctor` reports that URL and `title=Toggle | Sector23`.

- **Open the demo.** Go to the popover page. Run `browser_navigate` with url `http://127.0.0.1:4173/docs/components/popover`, then `browser_lock` with action `lock`, then `browser_snapshot`. A button named `Notifications` is collapsed. The text `You have 3 unread notifications.` is absent.
- **Open it.** Click `Notifications`. Run `browser_click` on the snapshot ref whose role is `button` and name is `Notifications`. The snapshot contains `You have 3 unread notifications.` and `Sarah commented on Acme Website`, plus a button named `Mark all as read`.
- **Dismiss.** Click `Mark all as read`. Run `browser_snapshot`, then `browser_click` on the ref whose role is `button` and name is `Mark all as read`. The unread sentence is gone, and the collapsed `Notifications` button is back.
- **Proof.** Save the open snapshot to `artifacts/popover/open.aria.txt` and the closed snapshot to `artifacts/popover/closed.aria.txt`. Copy a screenshot of the open popover to `artifacts/popover/open.png`. The open artifacts show Sector23 and `You have 3 unread notifications.`

## Gotchas

- `Mark all as read` closes the popover. The unread sentence does not change to a read state.
- The snapshot taken in the same instant as that click can still list the popover while it animates out. Snapshot again once `You have 3 unread notifications.` is gone.
- The toast demo also uses the word Notifications, for a region. This recipe is the popover button.
