---
nextjs:
  metadata:
    title: Number Field
    description: A control that the user types into or steps through to enter a number.
---

{% component-demo component="number-field-default" /%}

## Examples

{% section %}

### Parts

`NumberField` groups the parts and holds the value. `NumberFieldGroup` draws the border, the background, and the focus ring, so the input and both buttons sit inside it. `NumberFieldInput` is the text field. `NumberFieldDecrement` and `NumberFieldIncrement` lower and raise the value. `NumberFieldScrubArea` is the area the user drags to change the value.

_Note:_ Without `NumberFieldGroup`, the input has **no border**.

Decrement and increment show a minus and a plus icon when they have no children. The scrub area cursor shows a move icon while the user drags. Pass children to any of them to replace the icon.

{% /section %}

{% section %}

### Label

To name the field, place a `Label` inside `NumberFieldScrubArea` and point its `htmlFor` at the id. Pass the `id` to `NumberField`, not to the input. Base UI places it on the input. The demo at the top of the page does this. The label sits inside the scrub area, so it also shows the horizontal resize cursor and can be dragged.

_Note:_ Every number field needs an accessible name. See Base UI's [usage guidelines](https://base-ui.com/react/components/number-field#usage-guidelines).

Inside a `Field`, use `FieldLabel` instead, as the Invalid example does.

{% /section %}

{% section %}

### Scrub area

Dragging the scrub area changes the value. The scrub area is horizontal by default, so dragging right raises the value and dragging left lowers it.

_Note:_ The custom cursor appears only while the user drags. Safari and touch input show the native cursor instead.

{% /section %}

{% section %}

### Size

To change the size, use the `size` prop on `NumberField`. It accepts `sm`, `md`, or `lg` and defaults to `md`. The height of the group, the width of both buttons, the icons in them, and the input text scale with it.

_Note:_ Set `size` on `NumberField`, not on the parts. The parts take **the size from their parent `NumberField`** and have no `size` prop of their own.

{% component-demo component="number-field-size" /%}

{% /section %}

{% section %}

### Buttons

To remove the decrement button, leave out `NumberFieldDecrement`. To remove the increment button, leave out `NumberFieldIncrement`. The group keeps its border and rounded corners on every side. Leave out both buttons to show only the input.

_Note:_ Arrow keys still step the value without the buttons. Dragging the scrub area still changes it too.

{% component-demo component="number-field-without-decrement" /%}

{% component-demo component="number-field-without-increment" /%}

{% component-demo component="number-field-without-buttons" /%}

{% /section %}

{% section %}

### Disabled

To disable the number field, use the `disabled` prop on `NumberField`. It defaults to `false`. A disabled field renders the scrub area and the group at half opacity. Its buttons and scrub area ignore pointer input, and its input ignores typing and key presses.

{% component-demo component="number-field-disabled" /%}

{% /section %}

{% section %}

### Invalid

To mark the number field invalid, place it in a `Field` and set the `invalid` prop on the `Field`. The group's border and focus ring turn to the destructive color. To show a message for that state, set `match={true}` on `FieldError`, as the demo does. See [Field invalid](/docs/components/field#invalid).

{% component-demo component="number-field-invalid" /%}

{% /section %}

## Credits

{% section %}

### Base UI

This component is based on Base UI's [Number Field](https://base-ui.com/react/components/number-field). You can view the full API reference [here](https://base-ui.com/react/components/number-field#api-reference).

{% /section %}
