---
nextjs:
  metadata:
    title: Input
    description: A control that the user types a line of text into.
---

{% component-demo component="input-default" /%}

## Examples

### Label

`Input` has no label of its own. To name it, wrap `Input` and the text in a `Label`, as the demo at the top of the page does. A click on the text focuses the input. Inside a `Field`, use `FieldLabel` instead. Field links the label to the input for you. The `Label` component has no layout styling so that is left for you to decide.

### Size

To change the size, use the `scale` prop on `Input`. It accepts `sm`, `md`, or `lg` and defaults to `md`. The file inputs below the text inputs show the same sizes.

{% component-demo component="input-size" /%}

### File

To let the user pick a file, set `type="file"` on `Input`.

_Note:_ Do **not** set `value` or `defaultValue` on a file input. A browser lets a script set the value only to an empty string. To read the chosen files, use `onChange` and read `event.target.files`.

### Value

To set the starting value, use the `defaultValue` prop. To control the value, pass `value` and `onValueChange` together. `onValueChange` receives the next value as its first argument.

### Form submission

To include the input in a form, set the `name` prop. The form submits the current text under that name. A disabled input leaves its value out of the form. A read-only input still submits it. Inside a `Field`, set `name` on the `Field`.

See the _Invalid_ example.

### Invalid

To mark an input as invalid, place it in a `Field` and set `invalid` on the `Field`. To show a message and to choose when the field validates, see the [Field validation](/docs/components/field#validation) page.

_Note:_ When the input is within a `form` or `Form` element, you do **not** need to set the `invalid` prop.

_Note:_ `aria-invalid` on an `Input` outside a `Field` does **not** change the border. The destructive style follows the state that `Field` sets.

{% component-demo component="input-invalid" /%}

### Disabled

To disable the input, use the `disabled` prop. A disabled input ignores clicks and key presses, leaves the tab order, and renders at half opacity. Inside a `Field`, set `disabled` on the `Field` instead, so the label and the description dim too. A disabled `Field` wins over `disabled` on `Input`, as the [Field](/docs/components/field#disabled) page shows.

_Note:_ `disabled` on `Input` does **not** dim the label unless within a `Field`.

{% component-demo component="input-disabled" /%}

## Credits

### Base UI

This component is based on Base UI's [Input](https://base-ui.com/react/components/input). You can view the full API reference [here](https://base-ui.com/react/components/input#api-reference).
