---
nextjs:
  metadata:
    title: Button
    description: A control that runs an action when the user clicks or presses it.
---

{% component-demo component="button-default" /%}

## Examples

{% section %}

### Variant

To change the style, use the `variant` prop on `Button`. It accepts `primary`, `secondary`, `destructive`, `outline`, `ghost`, or `ghost-emphasized` and defaults to `primary`. `ghost` and `ghost-emphasized` have no shadow. `ghost` has no background until hover. `ghost-emphasized` starts with muted text and changes only the text color.

{% component-demo component="button-variant" /%}

{% /section %}

{% section %}

### Size

To change the size, use the `size` prop on `Button`. It accepts `sm`, `md`, or `lg` and defaults to `md`. Height, padding, text, and icons scale with it. An icon without its own `size-*` class takes the size the button sets.

_Note:_ An icon-only button has no text for screen readers to announce. Give it an `aria-label`.

{% component-demo component="button-size" /%}

{% /section %}

{% section %}

### Icons

To place an icon beside the label, put the icon inside `Button` and set `data-side` on the icon. It accepts `inline-start` or `inline-end`. Button narrows the padding on that side to the gap between the icon and the label, as the demo at the top of the page does. Without `data-side`, the icon gets the same padding as text. `inline-start` and `inline-end` follow the reading direction, so the spacing stays correct in right-to-left layouts.

_Note:_ Do **not** set `data-side` on the icon of an icon-only button. Button narrows one side, and the button is no longer square.

{% /section %}

{% section %}

### Disabled

To disable the button, use the `disabled` prop. A disabled button renders at half opacity and ignores pointer events.

To keep a disabled button in the tab order, add the `focusableWhenDisabled` prop. Button then sets `aria-disabled` instead of the native `disabled` attribute, so keyboard and screen reader users can still reach it and hear that it is unavailable. Clicks and key presses stay ignored.

{% component-demo component="button-disabled" /%}

{% /section %}

{% section %}

### Press feedback

Button scales down slightly while it is pressed. When the operating system requests reduced motion, the button does not scale.

_Note:_ A button with an `aria-expanded` attribute does **not** scale, whatever the attribute's value. Menu, popover, and dialog triggers set that attribute while closed. Tooltip, preview card, and context menu triggers do not, so a `Button` used for one of those still scales.

{% /section %}

{% section %}

### Loading state

Button has no `loading` prop. To show a loading state, follow the pattern in Base UI's [loading states](https://base-ui.com/react/components/button#loading-states) example.

_Note:_ Sector23 lays out a direct child `span` as an inline row, so the spinner and text keep the same spacing as an icon and label placed directly in the button. Set `data-side="inline-start"` on the spinner and the icon. Button finds them inside the `span`.

{% component-demo component="button-loading" /%}

{% /section %}

{% section %}

### Popup trigger

To open a popup from a button, pass `Button` to the `render` prop of a trigger such as `MenuTrigger` or `PopoverTrigger`. The trigger keeps its own behavior and renders with the `variant` and `size` you set on `Button`. While the popup is open, the trigger sets `data-popup-open` on the button, and every variant has a style for it. To show a chevron after the label, set `data-side="inline-end"` on it, as the demo does.

{% component-demo component="button-popup-trigger" /%}

{% /section %}

## Credits

{% section %}

### Base UI

This component is based on Base UI's [Button](https://base-ui.com/react/components/button). You can view the full API reference [here](https://base-ui.com/react/components/button#api-reference).

{% /section %}
