---
nextjs:
  metadata:
    title: Input
    description: A text field that the user types a single line into, or a file picker when the type is set to file.
---

{% component-demo component="input-default" /%}

## Examples

{% section %}

### Label

`Input` has no label of its own. To name it, wrap `Input` and the text in a `Label`, as the demo at the top of the page does. A click on the text focuses the input. Inside a `Field`, use `FieldLabel` instead. Field links the label to the input for you. `Label` sets only the text style, so the layout is yours to choose, as the demo's `flex` classes show.

{% /section %}

{% section %}

### Size

To change the size, use the `scale` prop on `Input`. It accepts `sm`, `md`, or `lg` and defaults to `md`. The file inputs below the text inputs show the same sizes.

{% component-demo component="input-size" /%}

{% /section %}

{% section %}

### File

To let the user pick a file, set `type="file"` on `Input`.

_Note:_ Do **not** set `value` or `defaultValue` on a file input. A browser lets a script set the value only to an empty string. To read the chosen files, use `onChange` and read `event.target.files`.

{% /section %}

{% section %}

### Value

To set the starting value, use the `defaultValue` prop. To control the value, pass `value` and `onValueChange` together. `onValueChange` receives the next value as its first argument.

{% /section %}

{% section %}

### Form submission

To include the input in a form, set the `name` prop. The form submits the current text under that name. A disabled input leaves its value out of the form. A read-only input still submits it. Inside a `Field`, set `name` on the `Field` instead. The field name takes precedence over `name` on `Input`. The [Invalid](http://localhost:3000/docs/components/input#invalid) example sets `name` on its `Field`.

{% /section %}

{% section %}

### Invalid

To mark an input as invalid, place it in a `Field` and set `invalid` on the `Field`. To show a message and to choose when the field validates, see [Field validation](http://localhost:3000/docs/components/field#validation).

_Note:_ Inside a `Form`, an error passed to the `errors` prop marks its `Field` as invalid. You do **not** set `invalid` for that error.

_Note:_ `aria-invalid` on an `Input` outside a `Field` does **not** change the border. The destructive style follows the state that `Field` sets.

{% component-demo component="input-invalid" /%}

{% /section %}

{% section %}

### Disabled

To disable the input, use the `disabled` prop. A disabled input ignores clicks and key presses, leaves the tab order, and renders at half opacity. Inside a `Field`, set `disabled` on the `Field` instead. The input is disabled either way, and the label and the description dim too.

_Note:_ `disabled` on `Input` alone leaves the label at full opacity. Only a `Field` dims its label.

{% component-demo component="input-disabled" /%}

{% /section %}

## Credits

{% section %}

### Base UI

This component is based on Base UI's [Input](https://base-ui.com/react/components/input). You can view the full API reference [here](https://base-ui.com/react/components/input#api-reference).

{% /section %}
