# Menubar

The menubar starts with File, Edit, View, and a disabled Help. Opening File shows New file.

## Sub-features

- `menubar-closed` shows File, Edit, View, and disabled Help, with no menu items.
- `menubar-file` opens File and shows New file.

## How to get to it (user POV)

- Open `/docs/components/menubar`.

## Driving it with the Cursor IDE browser

Preconditions:

- Sector23 is healthy at `http://127.0.0.1:4173`.
- `bun .cursor/skills/verify-sector23/verify.mjs doctor` reports that URL and `title=Toggle | Sector23`.

- **Open the demo.** Go to the menubar page. Run `browser_navigate` with url `http://127.0.0.1:4173/docs/components/menubar`, then `browser_lock` with action `lock`, then `browser_snapshot`. Menuitems named `File`, `Edit`, and `View` are collapsed. The menuitem named `Help` is disabled. No menuitem whose name starts with `New file` is present.
- **Open File.** Click `File`. Run `browser_click` on the snapshot ref whose role is `menuitem` and name is `File`. If `File` stays collapsed, run `browser_press_key` with key `ArrowDown` while it is focused. A menuitem whose name starts with `New file` is present. Its accessible name includes the shortcut. A menuitem named `Export` is present.
- **Proof.** Save the open snapshot to `artifacts/menubar/file.aria.txt` and copy a screenshot to `artifacts/menubar/file.png`. Both show Sector23 and `New file`.

## Gotchas

- `Help` is disabled. A click there does not open a menu.
- `Edit` and `View` are separate menus. This recipe does not open them.
- `Export` has a submenu. This recipe records that the item is present and does not open the submenu.
