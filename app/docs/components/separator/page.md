---
nextjs:
  metadata:
    title: Separator
    description: A line that divides content and is announced to screen readers.
---

{% component-demo component="separator-01" /%}

## Examples

{% section %}

### Orientation

To change the direction of the line, use the `orientation` prop on `Separator`. It accepts `horizontal` or `vertical` and defaults to `horizontal`. Separator sizes the line from `data-orientation`: 1px tall when horizontal and 1px wide when vertical. In a flex row, a vertical separator stretches to the height of the row.

{% /section %}

{% section %}

### Screen readers

By default, the separator has the `separator` role, so screen readers can announce it. Base UI has **no `decorative` prop**. For a line that is only visual, set `role="none"`. Caller props override the role.

{% /section %}

{% section %}

### Class and style

`className` and `style` accept a string or a function of `state`. `state.orientation` is `horizontal` or `vertical`. A string `className` merges with the line classes, so a conflicting utility overrides the default. For example, `h-0.5` replaces `h-px`.

{% /section %}

## Credits

{% section %}

### Base UI

This component is based on Base UI's [Separator](https://base-ui.com/react/components/separator). You can view the full API reference [here](https://base-ui.com/react/components/separator#api-reference).

{% /section %}
