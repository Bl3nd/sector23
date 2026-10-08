# Context menu

Right-clicking the dashed area opens a menu. Rename is one of the items. The menu does not rename anything.

## Sub-features

- `context-menu-closed` shows the trigger text `Right click me` and no menu.
- `context-menu-open` shows Rename after a right click.

## How to get to it (user POV)

- Open `/docs/components/context-menu` and right-click the dashed area.

## Driving it with the Cursor IDE browser

Preconditions:

- Sector23 is healthy at `http://127.0.0.1:4173`.
- `bun .cursor/skills/verify-sector23/verify.mjs doctor` reports that URL and `title=Sector23`.

- **Open the demo.** Go to the context menu page. Run `browser_navigate` with url `http://127.0.0.1:4173/docs/components/context-menu`, then `browser_lock` with action `lock`, then `browser_snapshot`. The words `Right click me` are on screen. No menuitem named `Rename` is present.
- **Open the menu.** Right-click the dashed area. The trigger has no role, so it has no snapshot ref. Take `browser_take_screenshot`, then `browser_mouse_click_xy` with button `right` on the center of that dashed box. A menuitem named `Rename` is present. `Share` is `aria-disabled`.
- **Proof.** Save the open snapshot to `artifacts/context-menu/open.aria.txt` and copy a screenshot to `artifacts/context-menu/open.png`. Both show Sector23 and `Rename`.

## Gotchas

- A normal left click does not open this menu. The button is `right`.
- `browser_mouse_click_xy` uses coordinates from the latest screenshot, not viewport CSS pixels. Take the screenshot first.
- `Delete` is a menu item. This recipe does not activate it. The page does not delete anything.
