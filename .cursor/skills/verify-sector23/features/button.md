# Button

The Button page has one demo. It opens as a medium primary button with an icon on the left and the words Click me. The controls sit in a rail on a wide window and in a right drawer on a narrow one. Changing a control changes that button.

## Sub-features

- `button-initial` opens with Medium pressed, Icon left pressed, and the preview named Click me.
- `button-size` presses Small and the preview uses the small size classes.
- `button-content` presses Icon only and the preview is an icon with accessible name Click me.
- `button-disabled` turns Disabled on and the preview button is disabled.
- `button-variant` chooses Destructive and the preview uses the destructive color.
- `button-drawer` on a narrow window opens Controls and presses Large. The preview uses the large size classes.

## How to get to it (user POV)

- Open `/docs/components/button`.

## Driving it with the Cursor IDE browser

Preconditions:

- Sector23 is healthy at `http://127.0.0.1:4173`.
- `bun .cursor/skills/verify-sector23/verify.mjs doctor` reports that URL and `title=Sector23 Docs | Toggle`.

- **Open the demo.** Go to the button page. Run `browser_navigate` with url `http://127.0.0.1:4173/docs/components/button`, then `browser_lock` with action `lock`, then `browser_snapshot`. The preview button is named `Click me`. `Medium` and `Icon left` are pressed. `Disabled` is off.
- **Change size.** Click the button named `Small`. `Small` is pressed and `Medium` is released.
- **Change content.** Click the button named `Icon only`. The preview button's accessible name is `Click me` and it has no text.
- **Disable it.** Click the switch named `Disabled`. The preview button is disabled.
- **Change variant.** Click the combobox named `Variant`, then the option named `Destructive`. The preview button uses the destructive color.
- **Narrow drawer.** Set the viewport to 390px wide. The rail toggles are gone and a button named `Controls` is present. Click `Controls`. Click `Large`. `Large` is pressed inside the drawer and the preview uses the large size classes.
- **Proof.** Save the snapshot after `Destructive` to `artifacts/button/destructive.aria.txt` and copy a screenshot to `artifacts/button/destructive.png`. Both show the title `Button | Sector23` and the disabled preview.

## Gotchas

- The variant combobox opens from the keyboard with ArrowDown. A click on the closed combobox can leave it collapsed.
- Below 640px the rail is hidden. The same controls are inside the Controls drawer.
- Widening the window hides an open drawer. The portaled popup, backdrop, and viewport use `sm:hidden`.
- Do not click `Open Next.js Dev Tools`.
