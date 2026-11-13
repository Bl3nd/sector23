---
nextjs:
  metadata:
    title: Form
    description: A native form that groups fields, validates them, and submits their values.
---

{% component-demo component="form-default" /%}

## Examples

{% section %}

### Layout

`Form` stacks its children in a column with a gap of `0.375rem` and fills the width of its container. To change the width or spacing, pass classes to `className`. Sector23 merges them with the defaults, so a conflicting class replaces the default. The demo at the top of the page uses `max-w-xs` to limit the width.

_Note:_ `Form` reads its direction from the nearest `DirectionProvider`. A `dir` prop on `Form` is ignored.

{% /section %}

{% section %}

### Validation

To set the validation timing for every `Field` in the form, set `validationMode` on `Form`. It accepts `onSubmit` (default), `onBlur`, or `onChange`. A `validationMode` on a `Field` takes precedence over the form's value. See [Field's validation](/docs/components/field#validation) for when each `FieldError` appears.

To validate from your own code, pass a ref to `actionsRef` and call `validate()` to check every field, or `validate(name)` to check one. See the [API reference](https://base-ui.com/react/components/form#api-reference) for the details.

{% /section %}

{% section %}

### Server errors

To show errors returned by a server or form action, pass them to `errors` on `Form`. Each key is the `name` of a `Field`, and each value is the error for that field. See [server-side validation](https://base-ui.com/react/handbook/forms#server-side-validation) for the full flow.

{% /section %}

## Additional Base UI examples

{% section %}

### Submitting

To handle a submit, use `onFormSubmit` on `Form`. It receives the form values as an object. The examples on Base UI show how to submit to a server function, and how to validate values with Zod.

- [Submit with a server function](https://base-ui.com/react/components/form#submit-with-a-server-function)
- [Submit form values as a JavaScript object](https://base-ui.com/react/components/form#submit-form-values-as-a-javascript-object)
- [Using with Zod](https://base-ui.com/react/components/form#using-with-zod)

{% /section %}

## Credits

{% section %}

### Base UI

This component is based on Base UI's [Form](https://base-ui.com/react/components/form). You can view the full API reference [here](https://base-ui.com/react/components/form#api-reference).

{% /section %}
