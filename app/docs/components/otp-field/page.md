---
nextjs:
  metadata:
    title: OTP Field
    description: A set of character inputs that collects a one-time code.
---

{% component-demo component="otp-field-default" /%}

## Examples

{% section %}

### Size

To change the size, use the `size` prop on `OTPField`. It accepts `sm`, `md`, or `lg` and defaults to `md`. The inputs, the text in them, and any separator scale with it.

{% component-demo component="otp-field-size" /%}

{% /section %}

{% section %}

### Separator

To split the code into groups, place `OTPFieldSeparator` between them. It draws a horizontal line by default and takes its size from `OTPField`. Set `orientation="vertical"` to draw a vertical line instead. For other grouping layouts, see Base UI's [grouped layouts](https://base-ui.com/react/components/otp-field#grouped-layouts).

{% component-demo component="otp-field-separator" /%}

{% /section %}

{% section %}

### Disabled

To disable the field, use the `disabled` prop on `OTPField`. It defaults to `false`. A disabled field renders its inputs at half opacity and ignores input.

{% component-demo component="otp-field-disabled" /%}

{% /section %}

{% section %}

### Invalid

To mark the field invalid, place it in a `Field` and set the `invalid` prop on `Field`. Every input gets the destructive border and focus ring. `FieldLabel` names the field, so you do not set `id` or `htmlFor`. To show a message for that state, set `match={true}` on `FieldError`, as the demo does. See [Field invalid](/docs/components/field#invalid).

{% component-demo component="otp-field-invalid" /%}

{% /section %}

## Credits

{% section %}

### Base UI

This component is based on Base UI's [OTP Field](https://base-ui.com/react/components/otp-field). You can view the full API reference [here](https://base-ui.com/react/components/otp-field#api-reference).

{% /section %}
