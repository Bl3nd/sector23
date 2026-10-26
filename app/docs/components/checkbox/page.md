---
nextjs:
  metadata:
    title: Checkbox
    description: A control that the user ticks to turn an option on or off.
---

{% component-demo component="checkbox-default" /%}

## Examples

### Indicator

`Checkbox` renders the box. To show a mark, place `CheckboxIndicator` inside it. The indicator shows a check when the box is checked and a minus when the box is indeterminate. To use another icon, pass an element or a function to the `render` prop of `CheckboxIndicator`. A function receives the indicator state as its second argument, so read `state.indeterminate` there when the mixed state needs its own icon.

_Note:_ Without `CheckboxIndicator`, a checked box fills with the primary color and shows **no mark**.

### Label

To name the checkbox, wrap `Checkbox` and the text in a `Label`. The root is a `span`, so it is valid inside a `label`, and a click on the text toggles the box. Inside a `Field`, use `FieldLabel` instead, as the Invalid example does.

To place the text beside the box, set `id` on `Checkbox` and point `htmlFor` on `Label` at that id. The id is placed on the hidden input, so the label toggles the box. Leave `nativeButton` at its default, `false`.

{% component-demo component="checkbox-sibling-label" /%}

### Size

To change the size, use the `size` prop on `Checkbox`. It accepts `sm`, `md`, or `lg` and defaults to `md`. The box and the icon in `CheckboxIndicator` scale with it.

_Note:_ Set `size` on `Checkbox`, not on `CheckboxIndicator`. The indicator reads **the size from its parent `Checkbox`**.

{% component-demo component="checkbox-size" /%}

### Indeterminate

To show a mixed state, set the `indeterminate` prop on `Checkbox`. It defaults to `false`. The box keeps its empty background and `CheckboxIndicator` shows a minus. Sector23 fills the box only when it is checked, so a mixed box is never filled. Screen readers announce it with `aria-checked="mixed"`.

_Note:_ A click does **not** clear `indeterminate`. Set it to `false` in `onCheckedChange`, or the box stays mixed.

To drive a parent checkbox from a list of children, see [Checkbox Group](/docs/components/checkbox-group).

{% component-demo component="checkbox-indeterminate" /%}

### Form submission

To include the checkbox in a form, set the `name` prop. A checked box submits its `value`, or `on` when `value` is unset. An unchecked box submits nothing. To submit a value while the box is unchecked, set `uncheckedValue`.

Space toggles the checkbox. Enter does not. Enter clicks the form's submit button.

### Invalid

To mark a checkbox as invalid, place it in a `Field` and set `invalid` on the `Field`. The border turns to the destructive color. Set `required` on `Checkbox` when the form must block submit until the box is checked.

{% component-demo component="checkbox-invalid" /%}

### Disabled

To disable the checkbox, use the `disabled` prop. A disabled checkbox ignores clicks and key presses, renders at half opacity, and leaves its value out of the form.

{% component-demo component="checkbox-disabled" /%}

### Readonly

To show a value the user cannot change, use the `readOnly` prop. A read-only checkbox ignores clicks and key presses and renders at 60% opacity. It still submits its value, and screen readers announce it as read only.

{% component-demo component="checkbox-readonly" /%}

## Additional Base UI examples

### Rendering as a native button

To see this example, visit [rendering as a native button](https://base-ui.com/react/components/checkbox#rendering-as-a-native-button).

`nativeButton` defaults to `false`, which matches the default `span` root. Set `nativeButton` only when `render` replaces that root with a `<button>`.

_Note:_ If `render` is a `<button>`, also set **`nativeButton`**. The two must agree.

## Credits

### Base UI

This component is based on Base UI's [Checkbox](https://base-ui.com/react/components/checkbox). You can view the full API reference [here](https://base-ui.com/react/components/checkbox#api-reference).
