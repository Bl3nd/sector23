---
nextjs:
  metadata:
    title: Toggle
    description: A two-state button that the user switches on or off.
---

{% component-demo component="toggle-default" /%}

## Examples

{% section %}

### Size

To change the size, use the `size` prop on `Toggle`. It accepts `sm`, `md`, or `lg` and defaults to `md`. Height, padding, text, and icons scale with it. An icon without its own `size-*` class takes the size the toggle sets.

_Note:_ An icon-only toggle has no text for screen readers to announce. Give it an `aria-label`.

{% component-demo component="toggle-size" /%}

{% /section %}

{% section %}

### Icons

To place an icon beside the label, put the icon inside `Toggle` and set `data-side` on the icon. It accepts `inline-start` or `inline-end`. Toggle narrows the padding on that side to the gap between the icon and the label. `inline-start` and `inline-end` follow the reading direction, so the spacing stays correct in right-to-left layouts.

_Note:_ Do **not** set `data-side` on the icon of an icon-only toggle. Toggle narrows one side, and the toggle is no longer square.

{% component-demo component="toggle-icon" /%}

{% /section %}

{% section %}

### Pressed state

While the toggle is pressed, it shows a filled accent background. Control the state with the `pressed` and `onPressedChange` props, or use `defaultPressed` to set the initial state. See Base UI's [Toggle API reference](https://base-ui.com/react/components/toggle#api-reference) for details.

{% component-demo component="toggle-pressed" /%}

{% /section %}

{% section %}

### Disabled

To disable the toggle, use the `disabled` prop. A disabled toggle renders at half opacity and ignores pointer events.

{% component-demo component="toggle-disabled" /%}

{% /section %}

{% section %}

### Press feedback

Toggle scales down slightly while it is pressed. When the operating system requests reduced motion, the toggle does not scale.

{% /section %}

## Credits

{% section %}

### Base UI

This component is based on Base UI's [Toggle](https://base-ui.com/react/components/toggle). You can view the full API reference [here](https://base-ui.com/react/components/toggle#api-reference).

{% /section %}
