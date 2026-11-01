---
nextjs:
  metadata:
    title: Input
    description: A control that the user types a line of text into.
---

{% component-demo component="input-default" /%}

## Examples

### Label

`Input` has no label of its own. To name it, wrap `Input` and the text in a `Label`, as the demo at the top of the page does. A click on the text focuses the input. Inside a `Field`, use `FieldLabel` instead. Field links the label to the input for you, as the [Field](/docs/components/field) page shows.

A `label` is inline. To stack the text above the input, add `flex flex-col gap-1.5` to the `className` of `Label`. To set the width, add a width class such as `w-56` to the `className` of `Label` or `Input`.

_Note:_ A placeholder is **not** a label. It disappears when the user types.

### Size

To change the size, use the `size` prop on `Input`. It accepts `sm`, `md`, or `lg` and defaults to `md`. Height, padding, and text scale with it. The file inputs below the text inputs show the same sizes. The file button's padding and the gap after it scale with `size`.

An input fills the width of its container. `size` is a Sector23 variant, so the native `size` attribute that counts characters is not available. To set the width, use a width class in `className`.

{% component-demo component="input-size" /%}

### File

To let the user pick a file, set `type="file"` on `Input`. The file button takes a rounded, tinted background and a medium font weight. Its padding and the gap after it scale with `size`, as the file inputs in the Size demo show.

_Note:_ Do **not** set `value` or `defaultValue` on a file input. A browser lets a script set the value only to an empty string. To read the chosen files, use `onChange` and read `event.target.files`.

### Value

To set the starting text, use the `defaultValue` prop. To control the text, pass `value` and `onValueChange` together. `onValueChange` receives the next string as its first argument.

`className` and `style` also accept a function that receives the input state, such as `state.disabled` or `state.filled`.

### Form submission

To include the input in a form, set the `name` prop. The form submits the current text under that name. A disabled input leaves its value out of the form. A read-only input still submits it.

Inside a `Field`, set `name` on the `Field`. See [Form submission](/docs/components/field#form-submission).

### Invalid

To mark an input as invalid, place it in a `Field` and set `invalid` on the `Field`. The border turns to the destructive color. The focus ring turns to it as well. The label color comes from `Field`. To show a message and to choose when the field validates, see the [Field](/docs/components/field#validation) page.

_Note:_ `aria-invalid` on an `Input` outside a `Field` does **not** change the border. The destructive style follows the state that `Field` sets.

{% component-demo component="input-invalid" /%}

### Disabled

To disable the input, use the `disabled` prop. A disabled input ignores clicks and key presses, leaves the tab order, and renders at half opacity.

Inside a `Field`, set `disabled` on the `Field` instead, so the label and the description dim too. A disabled `Field` wins over `disabled` on `Input`, as the [Field](/docs/components/field#disabled) page shows.

_Note:_ `disabled` on `Input` does **not** dim the label. The demo keeps the label at full opacity.

{% component-demo component="input-disabled" /%}

### Direction

`Input` reads its direction from the nearest `DirectionProvider`. A `dir` prop on `Input` is **replaced**.

## Credits

### Base UI

This component is based on Base UI's [Input](https://base-ui.com/react/components/input). You can view the full API reference [here](https://base-ui.com/react/components/input#api-reference).
