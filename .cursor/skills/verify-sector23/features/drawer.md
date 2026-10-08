# Drawer

The drawer demo starts closed. Open drawer shows a shopping cart. Close dismisses it. Checkout does not leave the page.

## Sub-features

- `drawer-closed` shows the Open drawer button and no shopping cart title.
- `drawer-open` shows the Shopping cart title and description.
- `drawer-close` dismisses the drawer with Close.

## How to get to it (user POV)

- Open `/docs/components/drawer`.

## Driving it with the Cursor IDE browser

Preconditions:

- Sector23 is healthy at `http://127.0.0.1:4173`.
- `bun .cursor/skills/verify-sector23/verify.mjs doctor` reports that URL and `title=Sector23`.

- **Open the demo.** Go to the drawer page. Run `browser_navigate` with url `http://127.0.0.1:4173/docs/components/drawer`, then `browser_lock` with action `lock`, then `browser_snapshot`. A button named `Open drawer` is collapsed. The page does not show `Shopping cart`.
- **Open the drawer.** Click `Open drawer`. Run `browser_click` on the snapshot ref whose role is `button` and name is `Open drawer`. The snapshot contains the heading `Shopping cart`, the text `View your shopping cart and checkout.`, a button named `Close`, and a button named `Checkout`.
- **Dismiss.** Click Close. Run `browser_snapshot`, then `browser_click` on the ref whose role is `button` and name is `Close`. The heading `Shopping cart` is gone, and `Open drawer` is collapsed again.
- **Proof.** Save the open snapshot to `artifacts/drawer/open.aria.txt` and the closed snapshot to `artifacts/drawer/closed.aria.txt`. Copy a screenshot of the open drawer to `artifacts/drawer/open.png`. The open artifacts show Sector23 and `Shopping cart`.

## Gotchas

- The header also has an icon close control with no accessible name. Dismiss with the button named `Close`.
- The snapshot taken in the same instant as Close can still list Shopping cart while the drawer animates out. Snapshot again once that heading is gone.
- `Checkout` does not navigate away. This recipe does not click it.
