---
nextjs:
  metadata:
    title: Autocomplete
    description: An input that suggests options as you type.
---

{% component-demo component="autocomplete-default" /%}

## Examples

### Size

Use the `size` prop on the `Autocomplete` root. It sets the input, the clear and trigger icons, every item, the group labels, the empty message, and the status text.

{% component-demo component="autocomplete-size" /%}

### Without input group

{% component-demo component="autocomplete-input" /%}

### Grouped

{% component-demo component="autocomplete-grouped" /%}

### Grid

{% component-demo component="autocomplete-grid" /%}

### Inline autocomplete

To fill the input with the highlighted item while the user moves through the list with the arrow keys, use the `mode` prop on the root. The values are `list` (default), `both`, `inline`, and `none`. `list` and `both` filter the items by the input value. `inline` and `none` leave the items unfiltered. `both` and `inline` also write the highlighted item into the input. The Invalid example below uses `mode="both"`.

To learn more about each mode, visit Base UI's [description](https://base-ui.com/react/components/autocomplete#inline-autocomplete) of the `mode` prop.

### Auto highlight

To highlight the first matching item as the user types, use the `autoHighlight` prop on the root. Set it to `"always"` to keep the first item highlighted at all times, as the Command palette example does.

To control how the highlight follows the pointer, combine it with the `keepHighlight` and `highlightItemOnHover` props. To learn more, visit Base UI's [auto highlight](https://base-ui.com/react/components/autocomplete#auto-highlight) example.

### Limit results

To cap how many items the list shows, use the `limit` prop on the root. Pair it with `AutocompleteStatus` to tell the user how many matches are hidden, the same way the Grouped example shows its match count.

To learn more about this behavior, visit Base UI's [description](https://base-ui.com/react/components/autocomplete#limit-results) of the `limit` prop.

### Command palette

Pass `open` and `inline` to the root to render the list inside a `Dialog` instead of a popup. Omit `AutocompletePortal`, `AutocompletePositioner`, and `AutocompletePopup`. Clicking an item closes the dialog, and the same `onClick` is where the command runs.

{% component-demo component="autocomplete-command-palette" /%}

### Invalid

{% component-demo component="autocomplete-invalid" /%}

### Disabled

{% component-demo component="autocomplete-disabled" /%}

### Disabled item

{% component-demo component="autocomplete-disabled-item" /%}

### Readonly

{% component-demo component="autocomplete-readonly" /%}

## Additional Base UI examples

### Async search

To see this example, visit [async search](https://base-ui.com/react/components/autocomplete#async-search).

### Fuzzy matching

To see this example, visit [fuzzy matching](https://base-ui.com/react/components/autocomplete#fuzzy-matching). It uses the `match-sorter` package, which Sector23 does not install.

### Virtualized

To see this example, visit [virtualized](https://base-ui.com/react/components/autocomplete#virtualized). It uses the `@tanstack/react-virtual` package, which Sector23 does not install.

## Credits

### Base UI

This component is based on Base UI's [Autocomplete](https://base-ui.com/react/components/autocomplete). You can view the full API reference [here](https://base-ui.com/react/components/autocomplete#api-reference).
