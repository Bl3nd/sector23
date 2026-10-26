---
nextjs:
  metadata:
    title: Checkbox Group
    description: A set of checkboxes that share one list of checked values.
---

{% component-demo component="checkbox-group-default" /%}

## Examples

### Label

`CheckboxGroup` renders a `div` with `role="group"`. `CheckboxGroupLegend` renders a `div` with the group's heading style. The legend does not name the group by itself. To name the group, set `id` on `CheckboxGroupLegend` and point `aria-labelledby` on `CheckboxGroup` at that id. The group then takes the legend text as its accessible name.

_Note:_ Without `aria-labelledby`, the group has **no accessible name**, even when the legend is visible.

To name each checkbox, wrap `Checkbox` and its text in a `Label`, as the [Checkbox](/docs/components/checkbox) page shows.

### Value

The group value is a `string[]` that lists the `value` of each checked `Checkbox`. To set the starting value, use the `defaultValue` prop on `CheckboxGroup`. The hero example starts with `["option-1"]`.

To control the value, pass `value` and `onValueChange` together. `onValueChange` receives the next array as its first argument. Its second argument is `eventDetails`, and `eventDetails.reason` is always `none`. The Parent checkbox example below is a controlled group.

_Note:_ The group matches each checkbox by its `value`. **A checkbox with no `value`** does not change the group value.

### Layout

`CheckboxGroup` stacks its children in a column with a `gap-3` gap. There is no `orientation` prop. To lay the checkboxes out in a row, add `flex-row` to `className`. `className` and `style` also accept a function that receives the group state, such as `state.disabled`.

Each `Label` needs its own flex classes to sit the box beside its text. The examples set `[&>label]:flex [&>label]:items-center [&>label]:gap-2` on the group to do this once.

There is no group `size` prop. To change the size, set `size` on each `Checkbox`.

The group reads its direction from the nearest `DirectionProvider`. A `dir` prop on `CheckboxGroup` is ignored.

### Parent checkbox

To add a checkbox that checks and clears the rest of the group, follow these steps:

1. Control the group with `value` and `onValueChange`.
2. Pass the `value` of every child checkbox to the `allValues` prop on `CheckboxGroup`.
3. Set the `parent` prop on one `Checkbox`.

The group sets the parent's state. The parent is checked when every child is checked and indeterminate when some are. Sector23 fills a box only when it is checked, so a mixed parent stays empty and `CheckboxIndicator` shows a minus.

To name the group with the parent's text, set `id` on the parent's `Label` and point `aria-labelledby` at it. The example does this instead of using `CheckboxGroupLegend`.

{% component-demo component="checkbox-group-parent" /%}

### Form submission

To include the group in a form, set the same `name` on each child `Checkbox`. Each checked child submits its `value` under that name. Unchecked children submit nothing.

_Note:_ The parent checkbox is **not submitted**. The children are.

_Note:_ Inside a group, **`uncheckedValue` has no effect**. To submit a value while a box is unchecked, use a `Checkbox` that is not in a group.

### Disabled

To disable every checkbox in the group, use the `disabled` prop on `CheckboxGroup`. It defaults to `false`. The group sets `data-disabled` on its root and disables each child `Checkbox`. The checkboxes ignore clicks and key presses, render at half opacity, and leave their values out of the form. `CheckboxGroupLegend` also renders at half opacity.

_Note:_ The legend dims only when it sits **inside `CheckboxGroup`**. A legend placed outside the group keeps full opacity.

To disable one checkbox, set `disabled` on that `Checkbox` instead.

{% component-demo component="checkbox-group-disabled" /%}

## Additional Base UI examples

### Rendering as a native button

To see this example, visit [rendering as a native button](https://base-ui.com/react/components/checkbox-group#rendering-as-a-native-button).

The group does not change how a checkbox renders. The [Checkbox](/docs/components/checkbox) page covers `nativeButton` and sibling labels.

### Form integration

To see this example, visit [form integration](https://base-ui.com/react/components/checkbox-group#form-integration).

In Sector23, wrap `Fieldset` in a `Field` and pass `render={<CheckboxGroup />}` to `Fieldset`. Name the group with `FieldsetLegend`, and wrap each checkbox in `FieldItem` and `FieldLabel`.

### Nested parent checkbox

To see this example, visit [nested parent checkbox](https://base-ui.com/react/components/checkbox-group#nested-parent-checkbox).

A nested parent is a second `CheckboxGroup` inside the first, and you keep the two values in sync in their `onValueChange` handlers. The outer group cannot see the inner children. To show the outer parent as mixed, set `indeterminate` on it yourself. The boxes look the same as in the Parent checkbox example.

## Credits

### Base UI

This component is based on Base UI's [Checkbox Group](https://base-ui.com/react/components/checkbox-group). You can view the full API reference [here](https://base-ui.com/react/components/checkbox-group#api-reference).
