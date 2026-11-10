---
nextjs:
  metadata:
    title: Checkbox Group
    description: A set of checkboxes that share one list of checked values.
---

{% component-demo component="checkbox-group-default" /%}

## Examples

{% section %}

### Label

To name the group, set `id` on `CheckboxGroupLegend` and point `aria-labelledby` on `CheckboxGroup` at that id. The group then takes the legend text as its accessible name.

_Note:_ Without `aria-labelledby`, the group has **no accessible name**, even when the legend is visible.

To name each checkbox, wrap `Checkbox` and its text in a `Label`, as the [Checkbox](/docs/components/checkbox) page shows.

{% /section %}

{% section %}

### Fieldset

To name the group with `FieldsetLegend` instead of `CheckboxGroupLegend`, render the group through `Fieldset` with `render={<CheckboxGroup />}`. The legend names the group, so `aria-labelledby` is not needed.

To add validation, wrap `Fieldset` in a `Field`, and wrap each checkbox in `FieldItem` and `FieldLabel`. To see an example, see [Labeling control groups](https://base-ui.com/react/handbook/forms#labeling-control-groups) and scroll down the code section titled "Explicitly labeling checkboxes in a checkbox group".

{% /section %}

{% section %}

### Value

The group value is a `string[]` that lists the `value` of each checked `Checkbox`. To set the starting value, use `defaultValue`. To control it, pass `value` and `onValueChange` together. `onValueChange` receives the next array as its first argument, and `eventDetails.reason` is always `none`.

_Note:_ The group matches each checkbox by its `value`. If a `Checkbox` has no `value`, it uses its `name` instead. A `Checkbox` with neither does **not** change the group value.

{% /section %}

{% section %}

### Layout

`CheckboxGroup` stacks its children in a column with `gap-1.5` between them. There is no `orientation` prop. To lay the checkboxes out in a row, add `flex-row` to `className`.

Each `Label` needs its own flex classes to sit the box beside its text. The examples set `[&>label]:flex [&>label]:items-center [&>label]:gap-2` on the group to do this once.

There is no group `size` prop. To change the size, set `size` on each `Checkbox`.

The group reads its direction from the nearest `DirectionProvider`. A `dir` prop on `CheckboxGroup` is ignored.

{% /section %}

{% section %}

### Parent checkbox

To add a checkbox that checks and clears the rest of the group, follow these steps:

1. Control the group with `value` and `onValueChange`.
2. Pass the `value` of every child checkbox to the `allValues` prop on `CheckboxGroup`.
3. Set the `parent` prop on one `Checkbox`.

A mixed parent stays empty, and `CheckboxIndicator` shows a minus. To name the group with the parent's text, set `id` on the parent's `Label` and point `aria-labelledby` at it.

{% component-demo component="checkbox-group-parent" /%}

{% /section %}

{% section %}

### Form submission

To include the group in a form, set the same `name` on each child `Checkbox`. Each checked child submits its `value` under that name, and unchecked children submit nothing.

_Note:_ The parent checkbox is **not submitted**. The children are.

_Note:_ Inside a group, **`uncheckedValue` has no effect**. To submit a value while a box is unchecked, use a `Checkbox` that is not in a group.

{% /section %}

{% section %}

### Disabled

To disable every checkbox in the group, use the `disabled` prop on `CheckboxGroup`. It defaults to `false`. The checkboxes ignore clicks and key presses, render at half opacity, and leave their values out of the form. `CheckboxGroupLegend` also renders at half opacity.

_Note:_ The legend dims only when it sits **inside `CheckboxGroup`**. A legend placed outside the group keeps full opacity.

To disable one checkbox, set `disabled` on that `Checkbox` instead.

{% component-demo component="checkbox-group-disabled" /%}

{% /section %}

## Additional Base UI examples

{% section %}

### Rendering as a native button

To see this example, visit [rendering as a native button](https://base-ui.com/react/components/checkbox-group#rendering-as-a-native-button).

The [Checkbox](/docs/components/checkbox) page covers `nativeButton` and sibling labels.

{% /section %}

{% section %}

### Nested parent checkbox

To see this example, visit [nested parent checkbox](https://base-ui.com/react/components/checkbox-group#nested-parent-checkbox).

A nested parent is a second `CheckboxGroup` inside the first. Keep the two values in sync in their `onValueChange` handlers. The outer group cannot see the inner children, so set `indeterminate` on the outer parent yourself.

{% /section %}

## Credits

{% section %}

### Base UI

This component is based on Base UI's [Checkbox Group](https://base-ui.com/react/components/checkbox-group). You can view the full API reference [here](https://base-ui.com/react/components/checkbox-group#api-reference).

{% /section %}
