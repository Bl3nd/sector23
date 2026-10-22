# Sector23 verification map

This directory is the maintained source for verifying the user-facing behavior of Sector23. Read this index before driving the app, then use the matching feature file as the recipe.

## Baseline preconditions

- Launch Sector23 at `http://127.0.0.1:4173` with `bun .cursor/skills/verify-sector23/verify.mjs launch`.
- Run `bun .cursor/skills/verify-sector23/verify.mjs doctor` and require `url=http://127.0.0.1:4173` and `title=Toggle | Sector23`.
- There is no seed data and no login.
- Never drive an instance that was not started by this verification run. Port 3000 is not a fallback.

## Driving conventions

- Start every recipe from the route in its feature file.
- Prefer ARIA roles and accessible names over CSS selectors or screen coordinates.
- Treat every command as literal. Keep quoted names and keys unchanged.
- Run browser actions through the Cursor IDE browser: `browser_navigate`, `browser_lock`, `browser_snapshot`, `browser_click`, `browser_press_key`, `browser_take_screenshot`.
- Ignore the button named `Open Next.js Dev Tools`.
- Do not remove proof artifacts during cleanup.

## Proof and skip reporting

- Capture the user action and the resulting state, not only the final screen.
- UI proof includes an accessibility snapshot and a screenshot. The snapshot must show the document title `<Component> | Sector23`.
- Theme proof also includes the `dark` or `light` class token before and after the key.
- Record the feature id and entry point with every artifact.
- Report an unreachable path with the attempted command and the unmet precondition.
- Do not report a skipped entry point as verified through a different path.

## Feature entry contract

Each feature file starts with an H1 title and one paragraph describing the user-visible behavior. It then uses exactly four H2 sections in this order.

1. `Sub-features` lists short IDs with one line for each behavior.
2. `How to get to it (user POV)` lists every user entry point.
3. `Driving it with the Cursor IDE browser` starts with `Preconditions:` and uses labeled bullets that pair each user action with an exact command and observable result.
4. `Gotchas` lists traps that can waste or invalidate a verification run.

## Features

- [Accordion](./accordion.md) covers opening the "How do I track a package?" panel. The first item stays disabled.
- [Alert dialog](./alert-dialog.md) covers opening the Atlas launch confirmation and dismissing it with Cancel.
- [Autocomplete](./autocomplete.md) covers filtering to `security` and choosing it.
- [Checkbox](./checkbox.md) covers checking Accept terms and conditions.
- [Checkbox size](./checkbox-size.md) covers unchecking Small while Medium (default) and Large stay checked.
- [Checkbox group](./checkbox-group.md) covers checking Option 2 while Option 1 stays checked.
- [Collapsible](./collapsible.md) covers opening the first Statuses panel.
- [Combobox](./combobox.md) covers choosing Canada.
- [Context menu](./context-menu.md) covers right-clicking the dashed area until Rename is shown.
- [Dialog](./dialog.md) covers opening the delete-project demo and dismissing it with Close.
- [Drawer](./drawer.md) covers opening the shopping cart and dismissing it with Close.
- [Field](./field.md) covers the slug hint. The required error stays hidden until the field has been edited.
- [Fieldset](./fieldset.md) covers typing an email into Account Information.
- [Form](./form.md) covers submitting the empty form and seeing Name and Email errors.
- [Input](./input.md) covers typing into the textbox named `Enter you email`.
- [Label](./label.md) covers typing into the Name field.
- [Menu](./menu.md) covers opening File until New file is shown.
- [Menubar](./menubar.md) covers opening File until New file is shown. Help stays disabled.
- [Navigation menu](./navigation-menu.md) covers opening Women until The Autumn Edit is shown.
- [Number field](./number-field.md) covers raising Price from 100 to 101.
- [OTP field](./otp-field.md) covers typing a digit into the first code box.
- [Popover](./popover.md) covers opening Notifications and dismissing it with Mark all as read.
- [Preview card](./preview-card.md) covers showing Priya Raman's role.
- [Progress](./progress.md) covers the Uploading... value climbing on its own.
- [Radio group](./radio-group.md) covers choosing Green after Red.
- [Scroll area](./scroll-area.md) covers scrolling until the second paragraph is visible.
- [Select](./select.md) covers choosing Eastern Time.
- [Slider](./slider.md) covers raising Volume from 25.
- [Switch](./switch.md) covers turning Notifications on.
- [Tabs](./tabs.md) covers the default Account panel and selecting Settings.
- [Theme](./theme.md) covers the `d` hotkey flipping the document theme class.
- [Toast](./toast.md) covers creating a toast and its later absence.
- [Toggle](./toggle.md) covers pressing and releasing the Bold toggle on its demo page.
- [Toggle group](./toggle-group.md) covers moving the pressed alignment toggle from left to center.
- [Demo viewport](./demo-viewport.md) covers the missing width frame on accordion, alert dialog, and autocomplete.
- [Toolbar](./toolbar.md) covers pressing Align center.
- [Tooltip](./tooltip.md) covers the Bold toggle. A click presses it and leaves the tooltip closed.

Avatar (`app/docs/components/avatar/page.md`), button (`app/docs/components/button/page.md`), meter (`app/docs/components/meter/page.md`), and separator (`app/docs/components/separator/page.md`) do not change visible state, so they stay unmapped. Driving a mapped feature does not verify another one.
