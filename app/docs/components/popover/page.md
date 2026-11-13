---
nextjs:
  metadata:
    title: Popover
    description: A floating panel that opens from a trigger and shows content beside it.
---

{% component-demo component="popover-default" /%}

## Examples

{% section %}

### Header

Sector23 adds `PopoverHeader`, which stacks `PopoverTitle` and `PopoverDescription` in a column. Base UI has no header part. The title is semibold, and the description is smaller and muted.

{% /section %}

{% section %}

### Arrow

To point the popup at its trigger, place `PopoverArrow` as the first child of `PopoverPopup`. Sector23 styles the arrow for every side, so it points at the trigger wherever the popup opens.

{% /section %}

{% section %}

### Side offset

`PopoverPositioner` sets `sideOffset` to `8` by default, which leaves room for the arrow between the popup and its trigger. Base UI defaults to `0`. To change the distance, pass `sideOffset` to `PopoverPositioner`.

{% /section %}

{% section %}

### Animation

To animate the popover, wrap the popup's content in `PopoverViewport`. Sector23 turns on animation whenever a viewport is present, so no extra prop is needed. With a viewport, the popover glides to a new trigger, resizes to fit the new content, and moves its arrow with it. When different triggers show different content, the outgoing and incoming content slide in the direction of the new trigger and fade. Sector23 moves the popup's padding to the viewport, so the content keeps its spacing. Base UI's [Animating the Popover](https://base-ui.com/react/components/popover#animating-the-popover) section describes the data attributes the viewport exposes.

Without a viewport, the popover jumps to a new trigger and its content swaps instantly.

{% component-demo component="popover-viewport" /%}

{% /section %}

{% section %}

### Motion

The popup fades in and out and scales down slightly as it opens and closes. With a viewport, this takes 500 ms instead of 200 ms. When the operating system requests reduced motion, the popup only fades on open and close. The glide and content slide in Animation are not affected.

{% /section %}

## Additional Base UI examples

{% section %}

### Triggers

Sector23 uses these Base UI behaviors unchanged:

- [Opening on hover](https://base-ui.com/react/components/popover#opening-on-hover)
- [Detached triggers](https://base-ui.com/react/components/popover#detached-triggers)
- [Multiple triggers](https://base-ui.com/react/components/popover#multiple-triggers)
- [Controlled mode with multiple triggers](https://base-ui.com/react/components/popover#controlled-mode-with-multiple-triggers)

{% /section %}

## Credits

{% section %}

### Base UI

This component is based on Base UI's [Popover](https://base-ui.com/react/components/popover). You can view the full API reference [here](https://base-ui.com/react/components/popover#api-reference).

{% /section %}
