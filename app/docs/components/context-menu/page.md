---
nextjs:
  metadata:
    title: Context Menu
    description: A menu that opens at the pointer when the user right clicks or long presses an area.
---

{% component-demo component="context-menu-default" /%}

## Examples

### Trigger

`ContextMenuTrigger` renders a `div` that marks the area the menu belongs to. A right click inside it opens the menu at the pointer. On a touch screen, a long press of 500ms opens it. Moving the finger more than 10px cancels the press. A left click does not open the menu.

The trigger has no role and no styles. The dashed box in the examples comes from `className` on `ContextMenuTrigger`. The trigger is not focusable, so a keyboard user cannot open the menu from it.

_Note:_ Treat the context menu as a shortcut. **Every action in it also needs a visible control**, such as a button or a toolbar menu.

_Note:_ A `dir` prop on `ContextMenuTrigger` or `ContextMenuPortal` is ignored. Sector23 sets `dir` from `DirectionProvider`.

### Icons and shortcuts

To add an icon, place an `svg` before the text in `ContextMenuItem`. To show a shortcut, place a `kbd` after the text. The item lays out as a grid. An icon gets its own column, the text fills the middle, and the `kbd` sits at the end in muted text. Icons are `size-3.5`. Icons inside `kbd` are `size-3` unless they set their own `size-*` class.

_Note:_ The `kbd` is **decorative**. It does not bind the key. Register the shortcut yourself.

When the item holds more than plain text, set the `label` prop on `ContextMenuItem` to the text typeahead should match.

### Destructive items

There is no destructive variant. To color an item, add classes to `className` on `ContextMenuItem`. The Delete item in the examples uses `text-destructive data-highlighted:text-destructive`.

_Note:_ Set the color for **both states**. A highlighted item switches to the accent foreground color unless `data-highlighted` sets its own.

### Submenu

To nest a menu, wrap a `ContextMenuSubmenuTrigger` and its own `ContextMenuPortal`, `ContextMenuPositioner`, and `ContextMenuPopup` in `ContextMenuSubmenu`. `ContextMenuSubmenu` is the Sector23 name for Base UI's `SubmenuRoot`.

The submenu opens when the pointer rests on the trigger, and when the user clicks the trigger. `openOnHover` defaults to `true`, `delay` to `100`, and `closeDelay` to `0`. Both delays are milliseconds. Set them on `ContextMenuSubmenuTrigger`.

`ContextMenuSubmenuTrigger` lays icons out by count. With one `svg`, that icon sits at the end of the row. With two, the first sits at the start and the second sits at the end. The nested example uses a folder icon and a chevron this way.

The example sets `sideOffset={-6}` on the submenu's `ContextMenuPositioner` so the submenu overlaps the parent popup padding.

Escape closes the open submenu and leaves the parent open. To close the whole menu instead, set `closeParentOnEsc` on `ContextMenuSubmenu`. It defaults to `false`.

{% component-demo component="context-menu-nested" /%}

### Checkbox and radio items

To add an option the user turns on or off, use `ContextMenuCheckboxItem` with a `ContextMenuCheckboxItemIndicator` after the text. To start it checked, use `defaultChecked`. To control it, pass `checked` and `onCheckedChange` together.

To add a set of options where one is chosen, wrap `ContextMenuRadioItem` elements in a `ContextMenuRadioGroup`. Give each radio item a `value`. To set the starting choice, use `defaultValue` on the group. To control it, pass `value` and `onValueChange` together.

Sector23 renders `CheckIcon` in `ContextMenuCheckboxItemIndicator` and `CircleSmallIcon` in `ContextMenuRadioItemIndicator`. Each indicator sits at the end of the row and fades in over 150ms. To use another icon, pass it as the indicator's children. To keep the indicator mounted while it is unchecked, set `keepMounted`.

These items stay open after a click. The Close on click section covers that default.

_Note:_ Checkbox and radio items **do not use the icon grid**. A leading `svg` sits in the row with the text, and a `kbd` is not pushed to the end.

{% component-demo component="context-menu-items" /%}

### Groups and separators

To label a set of items, wrap them in `ContextMenuGroup` and place a `ContextMenuGroupLabel` first inside it. A label inside `ContextMenuRadioGroup` names that radio group the same way. The label renders as small muted text. Groups add a small gap below themselves unless they are last.

_Note:_ `ContextMenuGroupLabel` must sit inside `ContextMenuGroup` or `ContextMenuRadioGroup`. **Outside either, it throws.**

To divide the popup, place a `ContextMenuSeparator` between items or groups. It renders a horizontal 1px line with a small margin above and below. To divide a horizontal menu, set `orientation="vertical"`.

### Close on click

`ContextMenuItem` closes the menu when the user activates it. `closeOnClick` defaults to `true`. To keep the menu open, set `closeOnClick={false}`.

`ContextMenuCheckboxItem`, `ContextMenuRadioItem`, and `ContextMenuLinkItem` default `closeOnClick` to `false`.

To run an action, pass `onClick` to `ContextMenuItem`.

`ContextMenuItem`, `ContextMenuSubmenuTrigger`, `ContextMenuCheckboxItem`, and `ContextMenuRadioItem` default `nativeButton` to `false`. Set `nativeButton` only when `render` replaces that part with a `button`.

### Link items

To navigate from the menu, use `ContextMenuLinkItem`. It renders an `a`. Pass `href` for a normal link. To route inside the app, pass an element that renders an anchor to the `render` prop, such as a Next.js `Link`.

A link item stays open after a click. To close the menu as the page changes, set `closeOnClick`.

_Note:_ `ContextMenuLinkItem` has **no Sector23 styles**. It does not get the padding, height, or highlight of `ContextMenuItem`. Add those classes on `className`.

### Keyboard

Arrow keys move the highlight through the items. The highlight wraps from the last item to the first. To stop at the ends, set `loopFocus={false}` on `ContextMenu`. It defaults to `true`.

Moving the pointer over an item highlights it. To leave the highlight to the keyboard, set `highlightItemOnHover={false}` on `ContextMenu`. It defaults to `true`.

The arrow keys follow `orientation` on `ContextMenu`. It defaults to `vertical`. Set it to `horizontal` only when the items sit in a row.

### Open state

To control whether the menu is open, pass `open` and `onOpenChange` to `ContextMenu` together. `onOpenChange` receives the next state and then `eventDetails`. `eventDetails.reason` is `trigger-press` when a right click or a long press opens the menu. It is `item-press`, `outside-press`, or `escape-key` for the common ways the menu closes.

To run code after the close animation ends, use `onOpenChangeComplete`.

While the menu is open, `ContextMenuTrigger` sets `data-popup-open`. Style the area with the `data-popup-open:` variant.

_Note:_ Setting `open` to `true` before any right click places the menu at the **top left of the window**. The anchor is that corner until a right click or a long press moves it.

### Position

The popup opens at the pointer. A submenu opens against its trigger.

`side` on `ContextMenuPositioner` defaults to `bottom`. `align` defaults to `start`. A submenu defaults `side` to `inline-end`.

On a root context menu, `sideOffset` defaults to `-5` and `alignOffset` defaults to `2` when `side` is omitted and `align` is not `center`. Otherwise both default to `0`.

_Note:_ Passing `side`, even `side="bottom"`, makes **both offsets `0`**. Omit `side` to keep `-5` and `2`.

The popup may change side to stay on screen. To keep a margin from the edge, use `collisionPadding`. It defaults to `5`.

`ContextMenuArrow` and `ContextMenuBackdrop` have no Sector23 styles. Neither is visible until `className` sets a size and a color.

### Disabled

To turn the menu off, use the `disabled` prop on `ContextMenu`. It defaults to `false`. A right click on a disabled trigger opens the browser's own menu.

To disable one item, set `disabled` on that item. The Share item in the examples is disabled. A disabled item renders at half opacity, ignores activation, and is announced with `aria-disabled`. `ContextMenuCheckboxItem`, `ContextMenuRadioItem`, `ContextMenuRadioGroup`, `ContextMenuSubmenuTrigger`, and `ContextMenuSubmenu` accept `disabled` too.

## Additional Base UI examples

### Using with a menu

To see this example, visit [using with Menu](https://base-ui.com/react/components/context-menu#using-with-menu).

The example pairs a visible menu button with a context menu that repeats the same actions. The Trigger section above is that rule.

### Close on click in Menu

To see this example, visit [close on click](https://base-ui.com/react/components/menu#close-on-click).

The example uses Menu parts. `closeOnClick` works the same on context menu items.

## Credits

### Base UI

This component is based on Base UI's [Context Menu](https://base-ui.com/react/components/context-menu). You can view the full API reference [here](https://base-ui.com/react/components/context-menu#api-reference).
