# Navigation menu

The navigation menu starts closed. Opening Women shows The Autumn Edit.

## Sub-features

- `navigation-menu-closed` shows Women, Men, Home, Collections, and Sale, with no panel.
- `navigation-menu-women` opens Women and shows The Autumn Edit.

## How to get to it (user POV)

- Open `/docs/components/navigation-menu`.

## Driving it with the Cursor IDE browser

Preconditions:

- Sector23 is healthy at `http://127.0.0.1:4173`.
- `bun .cursor/skills/verify-sector23/verify.mjs doctor` reports that URL and `title=Sector23`.

- **Open the demo.** Go to the navigation menu page. Run `browser_navigate` with url `http://127.0.0.1:4173/docs/components/navigation-menu`, then `browser_lock` with action `lock`, then `browser_snapshot`. Buttons named `Women`, `Men`, `Home`, and `Collections` are present. A link named `Sale` is present. The text `The Autumn Edit` is absent.
- **Open Women.** Click `Women`. Run `browser_click` on the snapshot ref whose role is `button` and name is `Women`. The page shows `The Autumn Edit` and `Layer-ready knits, tailored coats, and warm neutrals.`
- **Proof.** Save the open snapshot to `artifacts/navigation-menu/women.aria.txt` and copy a screenshot to `artifacts/navigation-menu/women.png`. Both show Sector23 and `The Autumn Edit`.

## Gotchas

- `Men`, `Home`, and `Collections` open different panels. This recipe does not open them.
- `Sale` is a link, not a panel trigger. This recipe does not follow it.
