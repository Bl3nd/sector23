---
nextjs:
  metadata:
    title: Radio Group
    description: A set of radio buttons where the user picks one option.
---

{% component-demo component="radio-group-default" /%}

## Examples

### Label

`RadioGroup` renders a `div` with `role="radiogroup"`. `RadioGroupLegend` renders a `div` with the group's heading style. The legend does not name the group by itself. To name the group, set `id` on `RadioGroupLegend` and point `aria-labelledby` on `RadioGroup` at that id. The group then takes the legend text as its accessible name.

_Note:_ Without `aria-labelledby`, the group has **no accessible name**, even when the legend is visible.

To name each radio, wrap `Radio` and its text in a `Label`. A click on the text selects that radio.

To place the text beside the radio instead, set `id` on `Radio` and point `htmlFor` on `Label` at that id. The id is placed on the hidden input, so the label selects the radio. Leave `nativeButton` at its default, `false`.

{% component-demo component="radio-group-sibling-label" /%}

### Value

The group value is the `value` of the selected `Radio`. It is one value, not a list. To set the starting value, use the `defaultValue` prop on `RadioGroup`. The hero example starts with `"option-1"`, so Red is selected.

To control the value, pass `value` and `onValueChange` together. `onValueChange` receives the next value as its first argument. Its second argument is `eventDetails`, and `eventDetails.reason` is always `none`.

Selecting a radio clears the others. Clicking the selected radio does not clear it.

### Size

To change the size, use the `size` prop on `RadioGroup`. It accepts `sm`, `md`, or `lg` and defaults to `md`. The radio and the dot in `RadioIndicator` scale with it.

_Note:_ Set `size` on `RadioGroup`, not on `Radio` or `RadioIndicator`. A radio reads **the size from its parent group**.

{% component-demo component="radio-group-size" /%}

### Layout

`RadioGroup` stacks its children in a column with `gap-1.5` between them. There is no `orientation` prop. To lay the radios out in a row, add `flex-row` to `className`. `className` and `style` also accept a function that receives the group state, such as `state.disabled`.

Each `Label` needs its own flex classes to sit the radio beside its text. The examples set `[&>label]:flex [&>label]:items-center [&>label]:gap-1.5` on the group to do this once.

The group reads its direction from the nearest `DirectionProvider`. A `dir` prop on `RadioGroup` is ignored.

### Indicator

`Radio` renders the circle. To show the dot, place `RadioIndicator` inside it. The dot is hidden while the radio is unchecked. A checked radio fills with the primary color.

_Note:_ Without `RadioIndicator`, a checked radio fills with the primary color and shows **no dot**.

### Form submission

To include the group in a form, set `name` on `RadioGroup`. The selected radio submits its `value` under that name. When nothing is selected, the group submits nothing.

_Note:_ Set `name` on the group. **`Radio` has no `name` prop.**

_Note:_ There is **no `uncheckedValue`**. A radio group cannot submit a value for the option that is not selected.

Space selects the focused radio. Arrow keys move focus to another radio in the group. Enter does not select a radio, and it does not submit the form.

### Invalid

To mark the group as invalid, place it in a `Field` and set `invalid` on the `Field`. Wrap each radio in `FieldItem` and `FieldLabel`. Each radio's border and its `FieldLabel` turn to the destructive color. `RadioGroupLegend` does not. Set `required` on `RadioGroup` when the form must block submit until a radio is selected.

_Note:_ `RadioGroup` has **no `invalid` prop**. The state comes from `Field`.

_Note:_ A `Label` inside one `Field` gives every radio **the same id**. `FieldItem` gives each radio its own.

{% component-demo component="radio-group-invalid" /%}

### Disabled

To disable every radio in the group, use the `disabled` prop on `RadioGroup`. It defaults to `false`. The radios ignore clicks and key presses, render at half opacity, and leave the group's value out of the form. `RadioGroupLegend` also renders at half opacity.

_Note:_ The legend dims only when it sits **inside `RadioGroup`**. A legend placed outside the group keeps full opacity.

To disable one radio, set `disabled` on that `Radio` instead.

{% component-demo component="radio-group-disabled" /%}

### Readonly

To show a selection the user cannot change, use the `readOnly` prop on `RadioGroup`. It defaults to `false`. The radios ignore clicks and key presses and render at 60% opacity. The selected value still submits, and screen readers announce the group as read only. `RadioGroupLegend` renders at 60% opacity when it sits inside the group.

To make one radio read-only, set `readOnly` on that `Radio` instead.

{% component-demo component="radio-group-readonly" /%}

## Additional Base UI examples

### Rendering as a native button

To see this example, visit [rendering as a native button](https://base-ui.com/react/components/radio-group#rendering-as-a-native-button).

`nativeButton` defaults to `false`, which matches the default `span` root. Set `nativeButton` only when `render` replaces that root with a `<button>`.

_Note:_ If `render` is a `<button>`, also set **`nativeButton`**. The two must agree.

### Form integration

To see this example, visit [form integration](https://base-ui.com/react/components/radio-group#form-integration).

In Sector23, wrap `Fieldset` in a `Field` and pass `render={<RadioGroup />}` to `Fieldset`. Name the group with `FieldsetLegend`, and wrap each radio in `FieldItem` and `FieldLabel`.

## Credits

### Base UI

This component is based on Base UI's [Radio Group](https://base-ui.com/react/components/radio-group). You can view the full API reference [here](https://base-ui.com/react/components/radio-group#api-reference).
