---
nextjs:
  metadata:
    title: Field
    description: A wrapper that labels, describes, and validates one form control.
---

{% component-demo component="field-default" /%}

## Examples

### Label

To name the control, place `FieldLabel` in the `Field`. Field links the label to the control, so you do not set `id` or `htmlFor`. A click on the label focuses the control.

_Note:_ `nativeLabel` defaults to **true**. Set it to `false` when `render` replaces the label with another element, such as a combobox trigger. A click on the label text then does not activate that trigger.

### Validation

To show an error, place `FieldError` inside `Field` and set `match` to the failure that should reveal it. `match` accepts `true`, `'valid'`, or a `ValidityState` key such as `valueMissing`, `typeMismatch`, `tooShort`, or `customError`. `true` always shows the message.

To choose when the field validates, use the `validationMode` prop on `Field`. It accepts `onSubmit`, `onBlur`, or `onChange` and defaults to `onSubmit`. The demo at the top of the page uses `onBlur`, so the message appears when focus leaves the empty input. With `onSubmit`, nothing validates until the form submits, and the field then validates again on every change. With `onChange`, the field validates on every change.

To wait between `onChange` checks, set `validationDebounceTime` on `Field`. The wait is in milliseconds and defaults to `0`.

_Note:_ `FieldError` has **no** enter or exit animation. It appears and disappears at once.

### Invalid

To mark a field invalid from your own state, set the `invalid` prop on `Field`. The label turns the destructive color. `Input` draws a destructive border and focus ring. The same prop works for any control inside the field. The Checkbox page's [Invalid](/docs/components/checkbox#invalid) example wraps a checkbox.

To show a message for that state, set `match` to `true` on `FieldError` and pass the text as children. Leaving `match` unset does not show the message. `invalid` does not set the browser validity flags that `FieldError` reads.

_Note:_ `FieldDescription` does **not** change color when the field is invalid. To tell the user what went wrong, add a `FieldError`.

### Disabled

To disable the field, use the `disabled` prop on `Field`. It defaults to `false`. The control ignores clicks and key presses. The label and the description render at half opacity. The input's dimming and `pointer-events-none` come from `Input`, not from Field.

A disabled field skips validation. `FieldError` stays hidden unless `match` is `true`. When the error does show, it renders at half opacity.

The first field in the demo is disabled and has a value. The second field is disabled and invalid, and its error uses `match={true}`, so the dimmed error is visible.

_Note:_ `disabled` on `Field` **wins** over `disabled` on the control and on `FieldItem`. A control disabled on its own leaves the label and the description at full opacity.

A disabled `Fieldset` also disables every `Field` inside it.

{% component-demo component="field-disabled" /%}

### Parts without styles

`FieldControl`, `FieldItem`, and `FieldValidity` add no Sector23 styles. `FieldControl` renders a plain `<input>`. To get the styled input, use `Input` inside `Field` instead. Use `FieldControl` only when you style the input yourself.

To group one checkbox or radio with its own label, wrap the control in `FieldItem`. The [Checkbox Group](/docs/components/checkbox-group) page shows that wiring under Form integration.

To read the validity state while you render, pass a function as the child of `FieldValidity`. The function receives the validity flags, the error messages, and the current value. `FieldValidity` renders nothing of its own. See Base UI's [Validity](https://base-ui.com/react/components/field#validity) part.

_Note:_ Field reads direction from the nearest `DirectionProvider`. A `dir` prop on `Field` is **replaced**.

### Form submission

To include the value in a form, set `name` on `Field`. It takes precedence over `name` on the control. Inside a [Form](/docs/components/form), each `FieldError` shows the error for its own field.

To show errors returned by the server, pass them to the `errors` prop on `Form`, keyed by each field's `name`. See [server-side validation](https://base-ui.com/react/handbook/forms#server-side-validation).

## Additional Base UI examples

### Custom validation

To see this example, visit [custom validation](https://base-ui.com/react/handbook/forms#custom-validation).

To check a value beyond the browser's built-in rules, use the `validate` prop on `Field`. Return a string or an array of strings when the value is invalid, and return nothing when it is valid. Pair it with `FieldError match="customError"` to show the message. The function can be asynchronous.

To run the check from your own code, pass a ref to `actionsRef` and call `validate()` on it.

_Note:_ With the default `validationMode="onSubmit"`, an asynchronous `validate` does **not** block the form from submitting. Use `onBlur` or `onChange` when the check must finish first.

### Form libraries

To see these examples, visit [React Hook Form](https://base-ui.com/react/handbook/forms#react-hook-form) and [TanStack Form](https://base-ui.com/react/handbook/forms#tanstack-form).

React Hook Form's example sets `match` to whether that field has an error. TanStack Form's example sets `match` to whether the field is invalid. Copy that `match` expression. Setting `match` to `true` would show the message even when the library has no error.

## Credits

### Base UI

This component is based on Base UI's [Field](https://base-ui.com/react/components/field). You can view the full API reference [here](https://base-ui.com/react/components/field#api-reference).
