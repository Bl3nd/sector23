---
nextjs:
  metadata:
    title: Switch
    description: A control that the user toggles to turn a setting on or off.
---

{% component-demo component="switch-default" /%}

## Examples

### Thumb

`Switch` renders the track. To show the knob, place `SwitchThumb` inside it. The thumb sits at the start while the switch is off and moves to the end while the switch is on. In a right-to-left layout, the thumb moves the other way.

_Note:_ Without `SwitchThumb`, the track still fills when the switch is on and shows **no thumb**.

To show an icon, place an `svg` inside `SwitchThumb`. The icon scales with `size`.

`Switch` reads its direction from the nearest `DirectionProvider`. A `dir` prop on `Switch` is **replaced**.

### Label

To name the switch, wrap `Switch` and the text in a `Label`. The root is a `span`, so it is valid inside a `label`, and a click on the text toggles the switch. Inside a `Field`, use `FieldLabel` instead, as the Invalid example does.

To place the text beside the switch, set `id` on `Switch` and point `htmlFor` on `Label` at that id. The id is placed on the hidden input, so the label toggles the switch. Leave `nativeButton` at its default, `false`.

{% component-demo component="switch-sibling-label" /%}

### Size

To change the size, use the `size` prop on `Switch`. It accepts `sm`, `md`, or `lg` and defaults to `md`. The track, the thumb, and an `svg` inside `SwitchThumb` scale with it.

_Note:_ Set `size` on `Switch`, not on `SwitchThumb`. The thumb reads **the size from its parent `Switch`**.

{% component-demo component="switch-size" /%}

### Checked

To set the starting state, use the `defaultChecked` prop. It defaults to `false`. To control the state, pass `checked` and `onCheckedChange` together. `onCheckedChange` receives the next checked state as its first argument. Its second argument is `eventDetails`, and `eventDetails.reason` is always `none`.

### Form submission

To include the switch in a form, set the `name` prop. A switch that is on submits its `value`, or `on` when `value` is unset. A switch that is off submits nothing. To submit a value while the switch is off, set `uncheckedValue`.

Inside a `Field`, set `name` on the `Field`. The field name takes precedence over `name` on `Switch`. See [Form submission](/docs/components/field#form-submission).

Space toggles the switch. Enter toggles it too.

### Invalid

To mark a switch as invalid, place it in a `Field` and set `invalid` on the `Field`. The border turns to the destructive color. Set `required` on `Switch` when the form must block submit until the switch is on.

{% component-demo component="switch-invalid" /%}

### Disabled

To disable the switch, use the `disabled` prop. A disabled switch ignores clicks and key presses, renders at half opacity, and leaves its value out of the form.

{% component-demo component="switch-disabled" /%}

### Readonly

To show a value the user cannot change, use the `readOnly` prop. A read-only switch ignores clicks and key presses and renders at 60% opacity. It still submits its value, and screen readers announce it as read only.

{% component-demo component="switch-readonly" /%}

## Additional Base UI examples

### Rendering as a native button

To see this example, visit [rendering as a native button](https://base-ui.com/react/components/switch#rendering-as-a-native-button).

`nativeButton` defaults to `false`, which matches the default `span` root. Set `nativeButton` only when `render` replaces that root with a `<button>`.

_Note:_ If `render` is a `<button>`, also set **`nativeButton`**. The two must agree.

### Form integration

To see this example, visit [form integration](https://base-ui.com/react/components/switch#form-integration).

In Sector23, place `Switch` in a `Field` and use `FieldLabel` for the text. Set `name` on the `Field`.

## Credits

### Base UI

This component is based on Base UI's [Switch](https://base-ui.com/react/components/switch). You can view the full API reference [here](https://base-ui.com/react/components/switch#api-reference).
