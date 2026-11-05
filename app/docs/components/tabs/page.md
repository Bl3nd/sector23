---
nextjs:
  metadata:
    title: Tabs
    description: A set of tabs that each show one panel of content.
---

{% component-demo component="tabs-default" /%}

## Examples

### Parts

`Tabs` groups the parts. `TabsList` holds the tabs and handles arrow keys between them. `TabsTab` is one tab. It renders a `button` with role `tab`. `TabsIndicator` is the highlight that slides behind the active tab. `TabsContent` is the bordered frame around the panels. `TabsPanel` holds the content for one tab. It renders a `div` with role `tabpanel`.

Each `TabsTab` and its `TabsPanel` share a `value`. The tab points at its panel with `aria-controls`, and the panel takes its name from the tab with `aria-labelledby`.

_Note:_ `TabsContent` is not a Base UI part. It only frames the panels, so the panels stack in one grid cell.

_Note:_ Without `TabsIndicator`, the active tab shows **no highlight**. Render it as the last child of `TabsList`.

### Value

To set the starting tab, use the `defaultValue` prop on `Tabs`. It defaults to `0`. When `defaultValue` is omitted and no tab has the value `0`, the first enabled tab is selected, as in the demo at the top of the page.

To control the active tab, pass `value` and `onValueChange` together. `onValueChange` receives the next value as its first argument. The second argument is `eventDetails`. `eventDetails.reason` is `none` for a click or a key press. It is `initial`, `disabled`, or `missing` when `Tabs` picks a tab on its own, and those changes cannot be canceled. `eventDetails.activationDirection` is `left`, `right`, `up`, `down`, or `none`.

When the value is `null`, no tab is active and no panel shows.

The active tab sets `data-active`. Every part sets `data-activation-direction`, which says where the new tab sits relative to the previous one.

### Keyboard

Only one tab sits in the tab order. Arrow Left and Arrow Right move focus between tabs. Home moves to the first tab and End to the last. Focus wraps from the last tab to the first. To stop at the ends, set `loopFocus={false}` on `TabsList`.

By default, moving focus does not change the active tab. Enter or Space activates the focused tab. To activate a tab as soon as it receives focus, set `activateOnFocus` on `TabsList`. It defaults to `false`.

The visible panel joins the tab order, so Tab moves from the tab list into the panel.

### Variant

To change the look, use the `variant` prop on `Tabs`. It accepts `default` or `line` and defaults to `default`. `default` draws the list as a filled track, and the indicator is a block behind the active tab. `line` draws a border under the list, and the indicator is a bar on that border.

_Note:_ Set `variant` on `Tabs`, not on `TabsList`. The list and the indicator read **the variant from their parent `Tabs`**.

{% component-demo component="tabs-variant" /%}

### Size

To change the size, use the `size` prop on `Tabs`. It accepts `sm`, `md`, or `lg` and defaults to `md`. The tab height, padding, text, and icon size scale with it.

An icon inside a tab takes the size of that tab. Set `data-side="inline-start"` or `data-side="inline-end"` on the icon to tighten the padding on that side, as the Account tab at the top of the page does.

_Note:_ Set `size` on `Tabs`, not on `TabsTab`. Each tab reads **the size from its parent `Tabs`**.

{% component-demo component="tabs-size" /%}

### Orientation

Set `orientation="vertical"` on `Tabs`. It defaults to `horizontal`. The list stacks the tabs in a column beside the panels, and Arrow Up and Arrow Down move between tabs instead of Arrow Left and Arrow Right. Each part sets `data-orientation`.

{% component-demo component="tabs-vertical" /%}

### Animation

To slide the panels, set `animated` on `Tabs`. It defaults to `false`. The new panel fades in from the side of the tab that was chosen, and the old panel leaves toward the other side. The panel sets `data-starting-style` while it enters and `data-ending-style` while it leaves.

The slide follows `data-activation-direction`. When the user prefers reduced motion, the panels only fade.

{% component-demo component="tabs-animated" /%}

### Disabled

To disable a tab, set `disabled` on that `TabsTab`. It defaults to `false`. A disabled tab renders at half opacity, sets `aria-disabled` and `data-disabled`, and ignores clicks, Enter, and Space.

_Note:_ The arrow keys still **focus a disabled tab**, so a screen reader announces it as unavailable.

When the first tab is disabled and `defaultValue` is omitted, the next enabled tab is selected. During server render it is not yet known which tabs are disabled, so set `defaultValue` or `value` to an enabled tab.

{% component-demo component="tabs-disabled" /%}

### Panels

A hidden panel unmounts. To keep it in the DOM, set `keepMounted` on `TabsPanel`. It defaults to `false`. A kept panel is `hidden` and `inert` while its tab is inactive.

`className` and `style` take a string or a function of `state`. A tab's state includes `active`, `disabled`, and `orientation`. A panel's state includes `hidden` and `transitionStatus`.

### Indicator

`TabsIndicator` sets `--active-tab-left`, `--active-tab-right`, `--active-tab-top`, `--active-tab-bottom`, `--active-tab-width`, and `--active-tab-height` from the active tab, in pixels. The indicator moves and resizes with those variables.

The indicator renders after hydration. To render it before React hydrates, set `renderBeforeHydration` on `TabsIndicator`. It defaults to `false`.

### Direction

`Tabs` reads its direction from the nearest `DirectionProvider`. A `dir` prop on `Tabs` is **replaced**.

In a right-to-left layout, Arrow Right moves to the previous tab and Arrow Left moves to the next.

### Render

`TabsTab` renders a `button`. The other parts render a `div`, except `TabsIndicator`, which renders a `span`. To render another tag, pass an element to the `render` prop.

## Credits

### Base UI

This component is based on Base UI's [Tabs](https://base-ui.com/react/components/tabs). You can view the full API reference [here](https://base-ui.com/react/components/tabs#api-reference).
