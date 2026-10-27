---
nextjs:
  metadata:
    title: Combobox
    description: An input that filters a list of predefined items to select.
---

{% component-demo component="combobox-default" /%}

## Examples

### Item values

To give the combobox its options, pass an array to the `items` prop on `Combobox`. Render each one inside `ComboboxList` as a `ComboboxItem` whose `value` is the item itself. That item is what `value`, `defaultValue`, and `onValueChange` receive.

When your items are objects, use the `itemToStringLabel` prop to set the text the input shows. Use the `itemToStringValue` prop to set the string a form submits. The demo at the top of the page shows "Canada" in the input and submits `CA`.

If you rebuild your item objects on each render, use `isItemEqualToValue` to tell the combobox when two objects are the same item.

To store IDs instead of item objects, see the Value selection with IDs example below.

To learn more, visit Base UI's [item values](https://base-ui.com/react/components/combobox#item-values) section.

### Labels

Every combobox needs an accessible name.

When the input is the form control, use `Label` or `FieldLabel` and point its `htmlFor` at the input's `id`.

`ComboboxLabel` labels `ComboboxTrigger`. It does not label the input. Use it only when the trigger is the form control.

The Grid demo points a plain `Label` at the trigger with `htmlFor`.

When you render no visible label, give the input an `aria-label`.

To learn more, visit Base UI's [usage guidelines](https://base-ui.com/react/components/combobox#usage-guidelines).

### Size

Use the `size` prop on the `Combobox` root. It accepts `sm`, `md`, and `lg` and defaults to `md`. It sets the input group, the input, the clear and trigger icons, the chips, every item and its indicator, the group labels, the empty message, and the status text.

{% component-demo component="combobox-size" /%}

### Without input group

{% component-demo component="combobox-input" /%}

### Multiple

To let the user select more than one item, use the `multiple` prop on the root. The value becomes an array of items. Render it with `ComboboxValue`, which passes the selected items to a function child. Map each item to a `ComboboxChip` with a `ComboboxChipRemove` inside it. Place `ComboboxInput` inside `ComboboxChips` so the user types after the last chip.

To learn more, visit Base UI's [multiple select](https://base-ui.com/react/components/combobox#multiple-select) example.

{% component-demo component="combobox-multiple" /%}

### Grouped

{% component-demo component="combobox-grouped" /%}

### Grid

To lay items out in rows and columns, use the `grid` prop on the root. Wrap each row of items in `ComboboxRow`. The arrow keys then move across rows and columns. This demo splits each group into rows of six.

{% component-demo component="combobox-grid" /%}

### Input inside popup

To build a searchable select, render `ComboboxTrigger` as the closed control and place `ComboboxInput` inside `ComboboxPopup`. The trigger shows the selection through `ComboboxValue`. The input inside the popup only filters the list. The Grid example above uses this pattern.

To learn more, visit Base UI's [input inside popup](https://base-ui.com/react/components/combobox#input-inside-popup) example.

### Filtering

The list keeps an item when the query appears anywhere in the text shown for that item. Leave `filter` unset to keep that match.

To change the match, pass a function to the `filter` prop on the root. The `useComboboxFilter` hook returns three matchers you can pass:

- `contains`
- `startsWith`
- `endsWith`

To learn more, visit Base UI's [useFilter](https://base-ui.com/react/components/combobox#usefilter) reference. Sector23 exports that hook as `useComboboxFilter`.

### Highlight

To highlight the first matching item as the user types, use the `autoHighlight` prop on the root. It accepts a boolean and defaults to `false`.

Moving the pointer over an item also highlights it. To turn that off, set `highlightItemOnHover` to `false`. This lets you style `:hover` apart from the highlighted state.

The arrow keys loop from the end of the list back to the input. To stop at the first and last item instead, set `loopFocus` to `false`.

To learn more, visit the [Root](https://base-ui.com/react/components/combobox#root) section of Base UI's API reference.

### Limit results

To cap how many items the list shows, use the `limit` prop on the root. It defaults to `-1`, which shows every match. Pair it with `ComboboxStatus` to tell the user the list is cut short.

`ComboboxStatus` announces its content to screen readers, so it must stay mounted. To hide the message, set its `show` prop to `false` instead of removing the component.

To learn more, visit the [Status](https://base-ui.com/react/components/combobox#status) section of Base UI's API reference.

### Forms

To submit the selection with a form, use the `name` prop on the root. To make a selection mandatory, use the `required` prop. To give the browser an autofill hint, use the `autoComplete` prop. It accepts an HTML `autocomplete` token. It does not change how the list filters.

### Invalid

To show the invalid state, wrap the combobox in `Field` and set `invalid` on the field. `Combobox` has no `invalid` prop of its own. The combobox parts style themselves from the `data-invalid` attribute the field provides.

{% component-demo component="combobox-invalid" /%}

### Disabled

{% component-demo component="combobox-disabled" /%}

### Disabled item

{% component-demo component="combobox-disabled-item" /%}

### Readonly

To show a selection the user cannot change, use the `readOnly` prop on the root. This demo also sets `openOnInputClick` to `false`, so a click on the input does not open the list.

{% component-demo component="combobox-readonly" /%}

## Additional Base UI examples

### Typed wrapper component

To see this example, visit [typed wrapper component](https://base-ui.com/react/components/combobox#typed-wrapper-component).

### Value selection with IDs

To see this example, visit [value selection with IDs](https://base-ui.com/react/components/combobox#value-selection-with-ids). It uses `createItems`, which Sector23 does not re-export.

### Keeping the filter after selection

To see this example, visit [keeping the filter after selection](https://base-ui.com/react/components/combobox#keeping-the-filter-after-selection).

### Async search

To see these examples, visit [async search (single)](https://base-ui.com/react/components/combobox#async-search-single) and [async search (multiple)](https://base-ui.com/react/components/combobox#async-search-multiple). Fetch the results yourself. Pass them to `items` or `filteredItems`, and show loading and error text in `ComboboxStatus`.

### Virtualized

To see this example, visit [virtualized](https://base-ui.com/react/components/combobox#virtualized). It uses the `@tanstack/react-virtual` package, which Sector23 does not install. The `virtualized` prop marks the list as virtualized. Render the visible rows with that package.

## Credits

### Base UI

This component is based on Base UI's [Combobox](https://base-ui.com/react/components/combobox). You can view the full API reference [here](https://base-ui.com/react/components/combobox#api-reference).
