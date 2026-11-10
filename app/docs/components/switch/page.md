---
nextjs:
  metadata:
    title: Switch
    description: A control that the user toggles to turn a setting on or off.
---

{% component-demo component="switch-default" /%}

## Examples

{% section %}

### Thumb

`Switch` renders the track. To show the knob, place `SwitchThumb` inside it.

_Note:_ Without `SwitchThumb`, the track still fills when the switch is on and shows **no thumb**.

`Switch` reads its direction from the nearest `DirectionProvider`, so the thumb moves the other way in a right-to-left layout. A `dir` prop on `Switch` is **replaced**.

{% /section %}

{% section %}

### Icon

To show an icon, place an `svg` inside `SwitchThumb`. The thumb sets the icon's size and color, so the icon scales with `size` on `Switch`.

To change the icon with the state, use `group-data-checked:` on the icon, as the demo does.

{% component-demo component="switch-icon" /%}

{% /section %}

{% section %}

### Label

To name the switch, wrap `Switch` and the text in a `Label`. The root is a `span`, so it is valid inside a `label`, and a click on the text toggles the switch. Inside a `Field`, use `FieldLabel` instead, as the Invalid example does.

To place the text beside the switch, set `id` on `Switch` and point `htmlFor` on `Label` at that id. The id is placed on the hidden input, so the label toggles the switch.

{% component-demo component="switch-sibling-label" /%}

{% /section %}

{% section %}

### Size

To change the size, use the `size` prop on `Switch`. It accepts `sm`, `md`, or `lg` and defaults to `md`. The track and thumb scale with it.

_Note:_ Set `size` on `Switch`, not on `SwitchThumb`. The thumb reads **the size from its parent `Switch`**.

{% component-demo component="switch-size" /%}

{% /section %}

{% section %}

### Form submission

To include the switch in a form, set the `name` prop. A switch that is on submits its `value`, or `on` when `value` is unset. A switch that is off submits nothing. To submit a value while the switch is off, set `uncheckedValue`.

Inside a `Field`, set `name` on the `Field`. The field name takes precedence over `name` on `Switch`. See [Form submission](/docs/components/field#form-submission).

{% /section %}

{% section %}

### Invalid

To mark a switch as invalid, place it in a `Field` and set `invalid` on the `Field`. Set `required` on `Switch` when the form must block submit until the switch is on.

{% component-demo component="switch-invalid" /%}

{% /section %}

{% section %}

### Disabled

To disable the switch, use the `disabled` prop. A disabled switch renders at half opacity and ignores clicks and key presses.

{% component-demo component="switch-disabled" /%}

{% /section %}

{% section %}

### Readonly

To show a value the user cannot change, use the `readOnly` prop. A read-only switch renders at 60% opacity and still submits its value.

{% component-demo component="switch-readonly" /%}

{% /section %}

## Additional Base UI examples

{% section %}

### Rendering as a native button

To see this example, visit [rendering as a native button](https://base-ui.com/react/components/switch#rendering-as-a-native-button).

`nativeButton` defaults to `false`, which matches the default `span` root. When `render` replaces the root with a `<button>`, set `nativeButton` to `true`.

{% /section %}

## Credits

{% section %}

### Base UI

This component is based on Base UI's [Switch](https://base-ui.com/react/components/switch). You can view the full API reference [here](https://base-ui.com/react/components/switch#api-reference).

{% /section %}
