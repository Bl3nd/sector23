# Menu

The menu demo starts closed. Opening File shows New file. Choosing nothing leaves the page where it is.

## Sub-features

- `menu-closed` shows the File button and no menu items.
- `menu-open` shows New file after File is clicked.

## How to get to it (user POV)

- Open `/docs/components/menu`.

## Driving it with the Cursor IDE browser

Preconditions:

- Sector23 is healthy at `http://127.0.0.1:4173`.
- `bun .cursor/skills/verify-sector23/verify.mjs doctor` reports that URL and `title=Sector23`.

- **Open the demo.** Go to the menu page. Run `browser_navigate` with url `http://127.0.0.1:4173/docs/components/menu`, then `browser_lock` with action `lock`, then `browser_snapshot`. A button named `File` is collapsed. No menuitem named `New file` is present.
- **Open File.** Click `File`. Run `browser_click` on the snapshot ref whose role is `button` and name is `File`. A menuitem whose name starts with `New file` is present. The accessible name includes the shortcut, `New file Ctrl + N`. A menuitem named `Exit application` is present.
- **Proof.** Save the open snapshot to `artifacts/menu/open.aria.txt` and copy a screenshot to `artifacts/menu/open.png`. Both show Sector23 and `New file`.

## Gotchas

- The items do not create files or leave the route. This recipe stops once the menu is open.
- Match the button named `File` on this page. The menubar demo is a different route.
