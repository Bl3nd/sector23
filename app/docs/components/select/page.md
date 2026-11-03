---
nextjs:
  metadata:
    title: Select
    description: A control that the user opens to choose a predefined value.
---

{% component-demo component="select-default" /%}

## Examples

### Item values

`Select` renders no element of its own. `SelectTrigger` renders a button with `role="combobox"`.

To give the select its options, pass `items` on `Select` and render each one as a `SelectItem`. The `value` on `SelectItem` is what `value`, `defaultValue`, and `onValueChange` receive.

When `items` is an array of `{ label, value }` objects, `SelectValue` shows the matching `label`. The demo at the top of the page shows "Eastern Time (UTC−05:00)" in the trigger and submits `America/New_York`.

`items` can also be a record from a value to its label, as the Multiple example does, or an array of groups, as the Grouped example does.

When the item value is an object other than `{ label, value }`, pass `itemToStringLabel` for the trigger text and `itemToStringValue` for the string a form submits. If you rebuild those objects on each render, pass `isItemEqualToValue` so the select can tell two objects are the same item. Comparison defaults to `Object.is`.

To learn more, visit Base UI's [formatting the value](https://base-ui.com/react/components/select#formatting-the-value) section.

### Label

`SelectLabel` names the trigger. It renders a `div`. A click on the text focuses the trigger and leaves the popup closed.

_Note:_ With no `SelectLabel` and no `aria-label` on `SelectTrigger`, the trigger has **no accessible name**.

Inside a `Field`, use `FieldLabel` instead of `SelectLabel`, as the Invalid example does. Field links that label to the trigger.

A `dir` prop on `SelectLabel`, `SelectTrigger`, or `SelectPortal` is replaced. Sector23 sets `dir` from `DirectionProvider`.

To learn more, visit Base UI's [labeling a select](https://base-ui.com/react/components/select#labeling-a-select) section.

### Size

To change the size, use the `size` prop on `Select`. It accepts `sm`, `md`, or `lg` and defaults to `md`. The trigger, the icon, every item, the check, and the group label scale with it.

_Note:_ Set `size` on `Select`, not on `SelectTrigger` or `SelectItem`. Those parts read **the size from the root**.

{% component-demo component="select-size" /%}

### Placeholder

To show text before a value is chosen, set `placeholder` on `SelectValue`. The text uses the muted foreground color. The demo at the top of the page starts as "Select a timezone".

_Note:_ A placeholder is **not** an item. The user cannot pick it, so the list cannot clear the value.

To let the user clear the value from the list, add an item with `value={null}` and a label to `items`. `SelectValue` then shows that label while nothing is selected, and it ignores `placeholder`.

To learn more, visit Base UI's [placeholder values](https://base-ui.com/react/components/select#placeholder-values) section.

### Formatting the value

With no children, `SelectValue` renders the label from `items`. To format the selection yourself, pass a function as the children of `SelectValue`. The function receives the current value.

_Note:_ Treat that value as **read-only**. In multiple mode, an empty value can be a shared frozen array.

To control the value, pass `value` and `onValueChange` together. `onValueChange` receives the next value and `eventDetails`. `eventDetails.reason` names the cause. Picking an item uses `item-press`.

### Multiple

To let the user pick more than one item, set `multiple` on `Select`. The value is an array. Choosing a selected item removes it, and the popup stays open.

This example passes a function to `SelectValue` so the trigger shows the first language and a count of the rest. It also sets `alignItemWithTrigger` to `false` on `SelectPositioner`, so the list opens under the trigger.

To learn more, visit Base UI's [multiple selection](https://base-ui.com/react/components/select#multiple-selection) example.

{% component-demo component="select-multiple" /%}

### Object values

To keep the whole object as the value, pass that object to `value` on `SelectItem`. Pass `itemToStringValue` when the object is not `{ label, value }`, so the form receives a string. This example submits `standard`, `express`, or `overnight`. `isItemEqualToValue` compares `id`. The function child of `SelectValue` prints the name, the duration, and the price.

To learn more, visit Base UI's [object values](https://base-ui.com/react/components/select#object-values) example.

{% component-demo component="select-object" /%}

### Grouped

To add headings inside the popup, wrap items in `SelectGroup` and place `SelectGroupLabel` first inside it. The label is associated with the group. Place `SelectSeparator` between groups. The demo at the top of the page does this and passes a flat `items` array, so each label is found by its `value`.

To pass the groups through `items` itself, use an array of `{ value, items }`. `value` is the heading. Each entry in `items` is a `{ label, value }` item. `SelectValue` still shows the item label.

_Note:_ `SelectGroupLabel` must sit inside `SelectGroup`. **Outside it, the label throws.**

To learn more, visit Base UI's [grouped](https://base-ui.com/react/components/select#grouped) example.

{% component-demo component="select-grouped" /%}

### Indicator

`SelectItem` renders the option. To show a check, place `SelectItemIndicator` inside it. Sector23 renders `CheckIcon`. The check is mounted only while the item is selected. To keep it mounted, set `keepMounted`.

_Note:_ Without `SelectItemIndicator`, a selected item shows **no check**.

To use another icon, pass it as the indicator's children.

`SelectItem` renders a `div`. `nativeButton` defaults to `false`. Set `nativeButton` only when `render` replaces the item with a `button`.

_Note:_ If `render` is a `button`, also set **`nativeButton`**. The two must agree.

`SelectTrigger` renders a `button`, and its `nativeButton` defaults to `true`. Set `nativeButton` to `false` only when `render` replaces the trigger with another element.

### Scroll arrows

Place `SelectScrollUpArrow` and `SelectScrollDownArrow` inside `SelectPopup`, around `SelectList`. An arrow appears when the list can scroll that way. Hovering it scrolls the list. Touch input does not show the arrows. Sector23 renders a chevron, and the arrows are hidden from assistive tech.

The list height follows the space above and below the trigger.

### Positioning

`SelectPositioner` places the popup. `alignItemWithTrigger` defaults to `true`, so the popup overlaps the trigger and the selected item's text lines up with the value. While that mode is active, `data-side` is `none` on the popup and the positioner, and `side` and `align` have no effect.

The mode turns off for touch input. It also turns off when the viewport cannot line the two texts up, or when the trigger sits within 20px of the top or bottom edge. Set `alignItemWithTrigger` to `false` to place the popup beside the trigger, as the Multiple example does.

Sector23's `SelectPositioner` defaults `sideOffset` to `6`.

`modal` defaults to `true`. While the popup is open, the page does not scroll and pointer input outside the select is ignored. Set `modal` to `false` to leave the rest of the page usable.

`SelectArrow` renders a caret whose placement follows `data-side`. While the popup overlaps the trigger, `data-side` is `none`.

_Note:_ `SelectBackdrop` has **no Sector23 styles**. Render it inside `SelectPortal` only when you style the layer yourself.

To learn more, visit Base UI's [positioning](https://base-ui.com/react/components/select#positioning) section.

### Typeahead

The list does not filter. With the popup closed, typing selects the next item whose text matches, unless the select is `multiple` or `readOnly`. With the popup open, typing moves the highlight and leaves the value unchanged.

Moving the pointer over an item highlights it. To turn that off, set `highlightItemOnHover` to `false` on `Select`. You can then style `:hover` apart from `data-highlighted`.

For a list long enough that the user should filter it, use [Combobox](/docs/components/combobox).

### Form submission

To include the select in a form, set `name` on `Select`. The form submits the selected value under that name. A `{ label, value }` item submits its `value`. An object item submits the string from `itemToStringValue`.

In multiple mode, the form submits one named field for each selected value. With nothing selected, it submits nothing.

A disabled select leaves its value out of the form. A read-only select still submits it.

Set `required` when the form must block submit until a value is chosen. In multiple mode, one selected item satisfies `required`.

Inside a `Field`, set `name` on the `Field`. The field name takes precedence over `name` on `Select`. See [Form submission](/docs/components/field#form-submission).

To give the browser an autofill hint, set `autoComplete` on `Select`. It accepts an HTML `autocomplete` token.

### Invalid

To mark the select as invalid, place it in a `Field` and set `invalid` on the `Field`. The trigger border and the focus ring turn the destructive color. `FieldLabel` turns the destructive color. `Select` has no `invalid` prop of its own.

_Note:_ `SelectLabel` does **not** turn the destructive color. Use `FieldLabel` when the label should.

{% component-demo component="select-invalid" /%}

### Disabled

To disable the select, set `disabled` on `Select`. A disabled select ignores clicks and key presses, leaves the tab order, renders at half opacity, and leaves its value out of the form.

_Note:_ `disabled` on `Select` does **not** dim `SelectLabel`. The label stays at full opacity.

To dim the label as well, set `disabled` on a `Field` around the select. A disabled `Field` wins over `disabled` on `Select`.

{% component-demo component="select-disabled" /%}

### Disabled item

To disable one option, set `disabled` on that `SelectItem`. The item renders at half opacity and ignores clicks and key presses. Typeahead skips it.

{% component-demo component="select-disabled-item" /%}

### Readonly

To show a value the user cannot change, set `readOnly` on `Select`. The popup still opens, and the user can move through the list. Choosing an item leaves the value unchanged. The trigger sets `aria-readonly` and renders at 60% opacity. The value still submits.

_Note:_ `readOnly` does **not** dim `SelectLabel`. The label stays at full opacity.

{% component-demo component="select-readonly" /%}

## Credits

### Base UI

This component is based on Base UI's [Select](https://base-ui.com/react/components/select). You can view the full API reference [here](https://base-ui.com/react/components/select#api-reference).
