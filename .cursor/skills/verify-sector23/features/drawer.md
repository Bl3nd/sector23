# Drawer

The drawer page lists six collapsed triggers: `Open bottom sheet`, `Open left drawer`, `Open drawer`, `Open top drawer`, `Open snap sheet`, and `Account settings`. Each opens a drawer that Close dismisses. The first demo is the bottom sheet, which is the default swipe direction. The left and top drawers set their swipe direction, and the shopping cart opens on the right. The snap sheet toggles between a half-height and a full-height snap point. The account drawer stacks a security drawer on top of it. Checkout does not leave the page.

## Sub-features

- `drawer-closed` shows six collapsed triggers and no drawer titles.
- `drawer-default-open` / `drawer-default-close` opens `Open bottom sheet`, shows the heading `Bottom sheet` with `data-swipe-direction="down"`, and dismisses with `Close`.
- `drawer-left` opens `Open left drawer`, shows the heading `Filters` with direction `left`, then dismisses with `Close`.
- `drawer-up` opens `Open top drawer`, shows the heading `Notifications` with direction `up`, then dismisses with `Close`.
- `drawer-right` opens `Open drawer`, shows the heading `Shopping cart` with direction `right`, then dismisses with `Close`. Do not click `Checkout`.
- `drawer-snap-peek` opens `Open snap sheet`, shows the heading `Snap points`, and the popup has no `data-expanded`.
- `drawer-snap-expanded` clicks `Expand sheet`. The popup has `data-expanded`.
- `drawer-snap-peek-again` clicks `Peek sheet`. The popup loses `data-expanded`. Then dismiss with `Close`.
- `drawer-nested-parent` opens `Account settings` and shows the heading `Account`. One popup is present and it has no `data-nested-drawer-open`.
- `drawer-nested-child` opens `Security settings` and shows the heading `Security`. Two popups and two backdrops are present. The first popup has `data-nested-drawer-open` and `--nested-drawers` of `1`.
- `drawer-nested-child-close` clicks `Done`. The heading `Security` is gone, `Account` remains, and focus returns to `Security settings`.

## How to get to it (user POV)

- Open `/docs/components/drawer`.

## Driving it with the Cursor IDE browser

Preconditions:

- Sector23 is healthy at `http://127.0.0.1:4173`.
- `bun .cursor/skills/verify-sector23/verify.mjs doctor` reports that URL and `title=Sector23 Docs | Toggle`.

- **Open the demo.** Go to the drawer page. Run `browser_navigate` with url `http://127.0.0.1:4173/docs/components/drawer`, then `browser_lock` with action `lock`, then `browser_snapshot`. Buttons named `Open bottom sheet`, `Open left drawer`, `Open drawer`, `Open top drawer`, `Open snap sheet`, and `Account settings` are collapsed. The page shows none of the drawer titles.
- **Bottom sheet.** Click `Open bottom sheet` with `browser_click` on the ref whose role is `button` and name is `Open bottom sheet`. The snapshot contains the heading `Bottom sheet`, the text `This sheet uses the default swipe direction, down.`, and a button named `Close`. Read the direction with `browser_cdp` `Runtime.evaluate` and `returnByValue` on `document.querySelector('[data-slot="drawer-popup"]').getAttribute('data-swipe-direction')`. It is `down`. Click `Close`, snapshot again, and confirm the heading `Bottom sheet` is gone.
- **Left drawer.** Click `Open left drawer`. The heading is `Filters` and the text is `Filters stay on the left.` The popup's `data-swipe-direction` is `left`. Click `Close`.
- **Top drawer.** Click `Open top drawer`. The heading is `Notifications` and the text is `This sheet dismisses upward.` The popup's `data-swipe-direction` is `up`. Click `Close`.
- **Shopping cart.** Click `Open drawer`. The snapshot contains the heading `Shopping cart`, the text `View your shopping cart and checkout.`, a button named `Close`, and a button named `Checkout`. The popup's `data-swipe-direction` is `right`. Click `Close` and confirm `Open drawer` is collapsed again.
- **Snap points.** Click `Open snap sheet` and wait for the heading `Snap points`. Evaluate `document.querySelector('[data-slot="drawer-popup"]').hasAttribute('data-expanded')`. It is `false`. Click `Expand sheet` and evaluate again. It is `true`. Click `Peek sheet` and evaluate again. It is `false`. Click `Close`.
- **Nested drawers.** Click `Account settings` and wait for the heading `Account`. Evaluate `document.querySelectorAll('[data-slot="drawer-popup"]').length`. It is `1`, and the popup has no `data-nested-drawer-open`. Click `Security settings` and wait for the heading `Security`. Evaluate the popup and backdrop counts, both `2`. Evaluate `document.querySelector('[data-slot="drawer-popup"]').hasAttribute('data-nested-drawer-open')` and `getComputedStyle(document.querySelector('[data-slot="drawer-popup"]')).getPropertyValue('--nested-drawers')`. They are `true` and `1`.
- **Close the child.** Click `Done`. Poll until the heading `Security` is gone. `Account` is still present and the button named `Security settings` is focused. Click `Close` to dismiss the parent.
- **Proof.** For the shopping cart, save the open snapshot to `artifacts/drawer/open.aria.txt`, the closed snapshot to `artifacts/drawer/closed.aria.txt`, and a screenshot of the open drawer to `artifacts/drawer/open.png`. The open artifacts show Sector23 and `Shopping cart`. For the bottom sheet, save `artifacts/drawer/default-open.aria.txt`, `artifacts/drawer/default-closed.aria.txt`, and `artifacts/drawer/default-open.png`. The open artifacts show Sector23 and `Bottom sheet`.

## Gotchas

- Each drawer header also has an icon close control with no accessible name. Dismiss with the button named `Close`, or `Done` in the security drawer.
- The snapshot taken in the same instant as a close click can still list the heading while the drawer animates out. Snapshot again once that heading is gone.
- Attribute checks run through `browser_cdp` `Runtime.evaluate` with `returnByValue`. Do not assert them from the accessibility snapshot. Query `[data-slot="drawer-popup"]` and wait for the heading first.
- `data-nested-drawer-swiping` is not driven. A click cannot set it, and only a real swipe gesture does.
- The down and up drawers will not slide. Popup and viewport styles only cover left and right, so check the attributes, not the motion.
- Open one drawer at a time. Dismiss it before opening the next trigger, or the backdrop blocks the click.
- `Checkout` does not navigate away. This recipe does not click it.
