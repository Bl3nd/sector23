---
nextjs:
  metadata:
    title: Separator
    description: A line that divides content and is announced to screen readers.
---

{% component-demo component="separator-01" /%}

## Examples

### Orientation

`Separator` is one part. It renders a `div`. `orientation` accepts `horizontal` or `vertical` and defaults to `horizontal`. The element sets `data-orientation` to `horizontal` or `vertical`.

### Screen readers

The separator has `role="separator"` and sets `aria-orientation` to the same orientation. It stays out of the tab order. A screen reader can announce it while reading the page.

_Note:_ Base UI has **no `decorative` prop**. The role stays `separator`. Set `role="none"` when the line is only visual. Caller props override the role.

### Class and style

`className` and `style` take a string or a function of `state`. `state.orientation` is `horizontal` or `vertical`. A string `className` joins the line classes above.

### Render

To render a tag other than `div`, pass an element to the `render` prop. The role and `aria-orientation` merge onto that element.

## Credits

### Base UI

This component is based on Base UI's [Separator](https://base-ui.com/react/components/separator). You can view the full API reference [here](https://base-ui.com/react/components/separator#api-reference).
