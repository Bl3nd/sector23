---
nextjs:
  metadata:
    title: Field
    description: A wrapper that labels, describes, and validates one form control.
---

{% component-demo component="field-default" /%}

## Examples

{% section %}

### Label

To name the control, place `FieldLabel` in the `Field`. Field links the label to the control, so you do not set `id` or `htmlFor`. A click on the label focuses the control.

_Note:_ `nativeLabel` defaults to **true**. Set it to `false` when `render` replaces the label with another element, such as a combobox trigger. A click on the label text then does not activate that trigger.

{% /section %}

{% section %}

### Validation

To show an error, place `FieldError` inside `Field` and set `match` to the failure that should reveal it. `match` accepts `true`, `'valid'`, or a `ValidityState` key such as `valueMissing`, `typeMismatch`, `tooShort`, or `customError`. `true` always shows the message.

To choose when the field validates, set `validationMode` on `Field` to `onSubmit` (default), `onBlur`, or `onChange`. The demo at the top of the page uses `onBlur`, so the message appears when focus leaves the empty input. To wait between `onChange` checks, set `validationDebounceTime` on `Field`, in milliseconds. It defaults to `0`.

{% /section %}

{% section %}

### Invalid

To mark a field invalid from your own state, set the `invalid` prop on `Field`. Controls inside the field, such as `Input` and `Checkbox`, show the invalid border. The Checkbox page's [Invalid](/docs/components/checkbox#invalid) example shows this with a checkbox.

To show a message for that state, set `match` to `true` on `FieldError` and pass the text as children. Leaving `match` unset does not show the message. `invalid` does not set the browser validity flags that `FieldError` reads.

_Note:_ `FieldDescription` does **not** change color when the field is invalid. To tell the user what went wrong, add a `FieldError`.

{% /section %}

{% section %}

### Disabled

To disable the field, use the `disabled` prop on `Field`. It defaults to `false`. The control ignores clicks and key presses. A disabled field skips validation. `FieldError` stays hidden unless `match` is `true`.

The first field in the demo is disabled and has a value. The second field is disabled and invalid, and its error uses `match={true}`, so the dimmed error is visible.

_Note:_ `disabled` on `Field` **wins** over `disabled` on the control and on `FieldItem`. A control disabled on its own leaves the label and the description at full opacity.

A disabled `Fieldset` also disables every `Field` inside it.

{% component-demo component="field-disabled" /%}

{% /section %}

{% section %}

### Field Control

`FieldControl` renders a bare `input` with no styles. Use the input components instead, such as `Input` and `Checkbox`, which are styled and already work with `Field`. To use `FieldControl` directly, style it yourself.

{% /section %}

{% section %}

### Form submission

To include the value in a form, set `name` on `Field`. It takes precedence over `name` on the control. Inside a [Form](/docs/components/form), each `FieldError` shows the error for its own field. To show errors returned by the server, pass them to the `errors` prop on `Form`, keyed by each field's `name`. See [server-side validation](https://base-ui.com/react/handbook/forms#server-side-validation).

{% /section %}

## Additional Base UI examples

{% section %}

### Custom validation

To see this example, visit [custom validation](https://base-ui.com/react/handbook/forms#custom-validation).

Pair the `validate` prop on `Field` with `FieldError match="customError"` to show its message.

_Note:_ With the default `validationMode="onSubmit"`, an asynchronous `validate` does **not** block the form from submitting. Use `onBlur` or `onChange` when the check must finish first.

{% /section %}

{% section %}

### Form libraries

To see these examples, visit [React Hook Form](https://base-ui.com/react/handbook/forms#react-hook-form) and [TanStack Form](https://base-ui.com/react/handbook/forms#tanstack-form).

React Hook Form's example sets `match` to whether that field has an error. TanStack Form's example sets `match` to whether the field is invalid. Copy that `match` expression. Setting `match` to `true` would show the message even when the library has no error.

{% /section %}

## Credits

{% section %}

### Base UI

This component is based on Base UI's [Field](https://base-ui.com/react/components/field). You can view the full API reference [here](https://base-ui.com/react/components/field#api-reference).

{% /section %}
