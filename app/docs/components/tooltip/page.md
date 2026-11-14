---
nextjs:
  metadata:
    title: Tooltip
    description: A short label that appears when a user hovers over or focuses a trigger.
---

{% component-demo component="tooltip-default" /%}

## Examples

{% section %}

### Side offset

`TooltipPositioner` sets `sideOffset` to `8` by default, which leaves a small gap between the popup and its trigger. Base UI defaults to `0`. To change the distance, pass `sideOffset` to `TooltipPositioner`.

{% /section %}

{% section %}

### Arrow

To point the popup at its trigger, place `TooltipArrow` as the first child of `TooltipPopup`. Sector23 styles the arrow for every side, so it points at the trigger wherever the popup opens.

{% /section %}

{% section %}

### Viewport

To animate the tooltip as it moves between triggers, wrap the popup's content in `TooltipViewport`. Sector23 turns on animation whenever a viewport is present, so no extra prop is needed. With a viewport, the tooltip glides to a new trigger, resizes to fit the new content, and moves its arrow with it. When different triggers show different content, the outgoing and incoming content slide in the direction of the new trigger and fade. Sector23 moves the popup's padding to the viewport, so the content keeps its spacing. Base UI's [Animating the Tooltip](https://base-ui.com/react/components/tooltip#animating-the-tooltip) section describes the data attributes the viewport exposes.

Without a viewport, the tooltip jumps to a new trigger and its content swaps instantly.

{% component-demo component="tooltip-viewport" /%}

{% /section %}

{% section %}

### Motion

The popup fades in and out and scales down slightly as it opens and closes. It takes 200 ms. With a viewport, the glide, resize, and arrow movement take 500 ms instead. A tooltip that opens right after another one closes appears without animation, because Base UI opens adjacent tooltips instantly.

When the operating system requests reduced motion, the popup only fades, and it takes 200 ms. With a viewport, the glide, resize, arrow movement, and content swap happen instantly.

{% /section %}

## Additional Base UI examples

{% section %}

### Triggers

Sector23 uses these Base UI behaviors unchanged:

- [Detached triggers](https://base-ui.com/react/components/tooltip#detached-triggers)
- [Multiple triggers](https://base-ui.com/react/components/tooltip#multiple-triggers)
- [Controlled mode with multiple triggers](https://base-ui.com/react/components/tooltip#controlled-mode-with-multiple-triggers)

{% /section %}

## Credits

{% section %}

### Base UI

This component is based on Base UI's [Tooltip](https://base-ui.com/react/components/tooltip). You can view the full API reference [here](https://base-ui.com/react/components/tooltip#api-reference).

{% /section %}
