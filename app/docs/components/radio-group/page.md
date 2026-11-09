---
nextjs:
  metadata:
    title: Radio Group
    description: A set of radio buttons where the user picks one option.
---

{% component-demo component="radio-group-default" /%}

## Examples

{% section %}

### Label

The legend does not name the group by itself. To name the group, set `id` on `RadioGroupLegend` and point `aria-labelledby` on `RadioGroup` at that id.

_Note:_ Without `aria-labelledby`, the group has **no accessible name**, even when the legend is visible.

To name each radio, wrap `Radio` and its text in a `Label`. A click on the text selects that radio.

To place the text beside the radio instead, set `id` on `Radio` and point `htmlFor` on `Label` at that id. Leave `nativeButton` at its default, `false`.

{% component-demo component="radio-group-sibling-label" /%}

{% /section %}

{% section %}

### Value

The group value is the `value` of the selected `Radio`. It is one value, not a list. To set the starting value, use the `defaultValue` prop on `RadioGroup`.

To control the value, pass `value` and `onValueChange` together.

{% /section %}

{% section %}

### Size

To change the size, use the `size` prop on `RadioGroup`. It accepts `sm`, `md`, or `lg` and defaults to `md`.

_Note:_ Set `size` on `RadioGroup`, not on `Radio` or `RadioIndicator`. A radio reads **the size from its parent group**.

{% component-demo component="radio-group-size" /%}

{% /section %}

{% section %}

### Layout

The radios stack in a column with `gap-1.5` between them. There is no `orientation` prop. To lay them out in a row, add `flex-row` to `className`.

To sit each radio beside its label text, the examples set `[&>label]:flex [&>label]:items-center [&>label]:gap-1.5` on the group.

The group reads its direction from the nearest `DirectionProvider`. A `dir` prop on `RadioGroup` is ignored.

{% /section %}

{% section %}

### Indicator

`Radio` renders the circle. Place `RadioIndicator` inside it to show the dot.

{% /section %}

{% section %}

### Form submission

To include the group in a form, set `name` on `RadioGroup`. The selected radio's `value` submits under that name, and nothing submits when no radio is selected. Inside a `Field`, set `name` on the `Field` instead, as the Invalid example does.

_Note:_ `Radio` has **no `name` prop**, and there is **no `uncheckedValue`**.

{% /section %}

{% section %}

### Invalid

To mark the group as invalid, place it in a `Field` and set `invalid` on the `Field`. Wrap each radio in `FieldItem` and `FieldLabel`. Each radio's border and its `FieldLabel` turn to the destructive color. Set `required` on `RadioGroup` when the form must block submit until a radio is selected.

_Note:_ A `Label` inside one `Field` gives every radio **the same id**. `FieldItem` gives each radio its own.

{% component-demo component="radio-group-invalid" /%}

{% /section %}

{% section %}

### Fieldset

To name the group with `FieldsetLegend` instead of `RadioGroupLegend`, render the group through `Fieldset` with `render={<RadioGroup />}`. The legend names the group, so `aria-labelledby` is not needed.

{% /section %}

{% section %}

### Disabled

To disable every radio in the group, use the `disabled` prop on `RadioGroup`. The radios render at half opacity and leave the group's value out of the form. `RadioGroupLegend` also renders at half opacity.

_Note:_ The legend dims only when it sits **inside `RadioGroup`**. A legend placed outside the group keeps full opacity.

To disable one radio, set `disabled` on that `Radio` instead.

{% component-demo component="radio-group-disabled" /%}

{% /section %}

{% section %}

### Readonly

To show a selection the user cannot change, use the `readOnly` prop on `RadioGroup`. The radios render at 60% opacity. Unlike `disabled`, the selected value still submits, and screen readers announce the group as read only.

To make one radio read-only, set `readOnly` on that `Radio` instead.

{% component-demo component="radio-group-readonly" /%}

{% /section %}

## Additional Base UI examples

{% section %}

### Rendering as a native button

To see this example, visit [rendering as a native button](https://base-ui.com/react/components/radio-group#rendering-as-a-native-button).

The default root is a `span`. If `render` replaces it with a `<button>`, also set `nativeButton`. The two must agree.

{% /section %}

## Credits

{% section %}

### Base UI

This component is based on Base UI's [Radio Group](https://base-ui.com/react/components/radio-group). You can view the full API reference [here](https://base-ui.com/react/components/radio-group#api-reference).

{% /section %}
