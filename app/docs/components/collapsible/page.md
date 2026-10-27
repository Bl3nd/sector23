---
nextjs:
  metadata:
    title: Collapsible
    description: A panel that the user opens and closes with a button.
---

{% component-demo component="collapsible-default" /%}

## Examples

### Trigger

`Collapsible` groups the parts. `CollapsibleTrigger` is the button, and `CollapsiblePanel` holds the content that opens and closes.

To style the button, pass `Button` to the `render` prop of `CollapsibleTrigger`, as the demo above does. The trigger keeps its own behavior and takes the `variant` and `size` you set on `Button`.

To rotate an icon when the panel opens, add `group-data-panel-open:rotate-180` to the icon. `CollapsibleTrigger` is the `group`, and it sets `data-panel-open` while the panel is open.

_Note:_ The trigger does **not** rotate the icon for you. Copy the icon's class along with the icon.

### Controlled

To open the panel on first render, use the `defaultOpen` prop on `Collapsible`. It defaults to `false`.

To control the open state, use the `open` and `onOpenChange` props on `Collapsible`. `onOpenChange` receives the next value and an `eventDetails` object. `eventDetails.reason` is `trigger-press` when the user presses the trigger. It is `none` when find-in-page opens the panel.

_Note:_ Update your state in `onOpenChange` for **every** reason. If you only handle `trigger-press`, find-in-page cannot open the panel.

### Hidden until found

To let the browser's find-in-page open a closed panel, use the `hiddenUntilFound` prop on `CollapsiblePanel`. The closed panel stays in the DOM with `hidden="until-found"`. When a search matches text inside it, the panel opens.

_Note:_ Set `hiddenUntilFound` on `CollapsiblePanel`, **not** on `Collapsible`. Accordion takes it on the root. Collapsible does not.

{% component-demo component="collapsible-hidden-until-found" /%}

To try it, press Ctrl+F. On macOS, press Cmd+F. Search for "courier". Browsers without `hidden="until-found"` support keep the panel closed. Find-in-page skips its text.

To learn more about this behavior, visit Base UI's [hidden until found](https://base-ui.com/react/components/collapsible#hidden-until-found) example.

### Keep mounted

A closed `CollapsiblePanel` removes its content from the DOM. Form fields inside it lose their values when the panel closes. To keep the content mounted while closed, use the `keepMounted` prop on `CollapsiblePanel`.

_Note:_ `hiddenUntilFound` already keeps the panel mounted. Do **not** set `keepMounted={false}` alongside it. Base UI warns in development.

### Disabled

To disable the collapsible, use the `disabled` prop on `Collapsible`. The trigger ignores clicks and key presses. The panel renders at half opacity.

_Note:_ Do not set `disabled` on `CollapsibleTrigger` alone. That stops the button. It does **not** set `data-disabled` on `CollapsiblePanel`. The panel does not dim.

{% component-demo component="collapsible-disabled" /%}

## Credits

### Base UI

This component is based on Base UI's [Collapsible](https://base-ui.com/react/components/collapsible). You can view the full API reference [here](https://base-ui.com/react/components/collapsible#api-reference).
