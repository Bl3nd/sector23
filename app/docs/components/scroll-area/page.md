---
nextjs:
  metadata:
    title: Scroll Area
    description: A scrollable region with custom scrollbars.
---

{% component-demo component="scroll-area-default" /%}

## Examples

### Parts

`ScrollArea` groups the parts. `ScrollAreaViewport` is the element that scrolls. `ScrollAreaContent` holds the content. `ScrollAreaScrollbar` is the track, and `ScrollAreaThumb` is the handle inside it. `ScrollAreaCorner` is the square where a vertical scrollbar and a horizontal scrollbar meet.

The viewport uses the browser's own scrolling. The track and the thumb are the visible controls, and both stay hidden from assistive tech. When the content overflows, the viewport joins the tab order and arrow keys scroll it. When nothing overflows, the viewport leaves the tab order.

_Note:_ Without `ScrollAreaThumb`, the track shows **no handle**.

`ScrollAreaContent` sets `min-width` to `fit-content`, so an unwrapped line widens the content. To let the text wrap inside a narrow column, set `minWidth` to `0` on `ScrollAreaContent`.

### Scrollbar

`orientation` on `ScrollAreaScrollbar` accepts `vertical` or `horizontal` and defaults to `vertical`. The track sets `data-orientation` to that value. Render one scrollbar for each axis, and place a `ScrollAreaThumb` inside each one.

A scrollbar unmounts when that axis does not overflow. To leave the element mounted, set `keepMounted` on `ScrollAreaScrollbar`. It defaults to `false`.

The track stays invisible until the pointer is over the scroll area or the user is scrolling. It sets `data-hovering` while the pointer is over the scroll area, and `data-scrolling` while that axis is scrolling.

### Both scrollbars

To scroll on both axes, render a vertical `ScrollAreaScrollbar` and one with `orientation="horizontal"`, then add `ScrollAreaCorner`. The corner keeps the tracks from overlapping. It renders only while both axes overflow.

{% component-demo component="scroll-area-both" /%}

### Fade

To fade the vertical edges that still have content past them, set `faded` on `ScrollArea`. The viewport masks its block start and block end with `--scroll-area-overflow-y-start` and `--scroll-area-overflow-y-end`. The fade grows as the user leaves an edge and clears when the passage reaches that edge. Before those variables hydrate, the end distance falls back to `40px`, so the mask is present during server render.

_Note:_ Set `faded` on `ScrollArea`, not on `ScrollAreaViewport`. The viewport reads **the fade from its parent `ScrollArea`**.

`--scroll-area-overflow-x-start` and `--scroll-area-overflow-x-end` are the horizontal distances, in pixels. The vertical pair is `--scroll-area-overflow-y-start` and `--scroll-area-overflow-y-end`. These variables are set on the viewport and do not inherit, except in Safari. A child that reads them has to set each one to `inherit`.

{% component-demo component="scroll-area-faded" /%}

### Overflow edges

`data-has-overflow-y` is present when the content is taller than the viewport. `data-has-overflow-x` is present when the content is wider. `data-overflow-y-start`, `data-overflow-y-end`, `data-overflow-x-start`, and `data-overflow-x-end` mark an edge that still has content past it. The root, the viewport, the content, and each scrollbar set the same attributes.

`overflowEdgeThreshold` delays those edge attributes. It accepts one number of pixels for every edge, or an object with `xStart`, `xEnd`, `yStart`, and `yEnd`. It defaults to `0`, so an edge attribute appears as soon as that side overflows.

`className` and `style` take a string or a function of `state`. On the root, that state includes `scrolling`, `hasOverflowX`, `hasOverflowY`, `overflowYStart`, `overflowYEnd`, and `cornerHidden`. A scrollbar's state also includes `hovering` and `orientation`.

### Direction

`ScrollArea` reads its direction from the nearest `DirectionProvider`. A `dir` prop on `ScrollArea` is **replaced**.

In a right-to-left layout, horizontal scrolling starts at the inline start, and the horizontal thumb moves with it.

### Render

Each part renders a `div`. To render another tag, pass an element to the `render` prop.

## Credits

### Base UI

This component is based on Base UI's [Scroll Area](https://base-ui.com/react/components/scroll-area). You can view the full API reference [here](https://base-ui.com/react/components/scroll-area#api-reference).
