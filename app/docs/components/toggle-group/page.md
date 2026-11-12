---
nextjs:
  metadata:
    title: Toggle Group
    description: A set of toggles that share one list of pressed values.
---

{% component-demo component="toggle-group-default" /%}

## Examples

{% section %}

### Label

To name the group, set `aria-label` on `ToggleGroup`. Icon-only toggles have no text for screen readers to announce, so give each `Toggle` an `aria-label` too.

_Note:_ Without a name on the group, the group has **no accessible name**, even when its toggles are labeled.

{% /section %}

{% section %}

### Value

The group value is an array of the `value` of each pressed `Toggle`. To set the starting pressed toggles, use the `defaultValue` prop on `ToggleGroup`, as the demo at the top does. To control the value, pass `value` and `onValueChange` together.

To let the user press more than one toggle, set `multiple`. Base UI's [multiple](https://base-ui.com/react/components/toggle-group#multiple) example shows it.

{% /section %}

{% section %}

### Outline

To draw a border around the group, set the `outline` prop on `ToggleGroup`. It defaults to `false`. With `outline`, the group gets a border and padding, and each toggle drops its own border and shadow so it sits inside the group.

{% component-demo component="toggle-group-outline" /%}

{% /section %}

{% section %}

### Orientation

To stack the toggles in a column, set `orientation="vertical"` on `ToggleGroup`. It defaults to `horizontal`. The group lays out its toggles with `flex-col` in a vertical orientation and `flex-row` in a horizontal one.

{% component-demo component="toggle-group-orientation" /%}

{% /section %}

## Credits

{% section %}

### Base UI

This component is based on Base UI's [Toggle Group](https://base-ui.com/react/components/toggle-group). You can view the full API reference [here](https://base-ui.com/react/components/toggle-group#api-reference).

{% /section %}
