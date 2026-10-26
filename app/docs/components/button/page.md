---
nextjs:
  metadata:
    title: Button
    description: A control that runs an action when the user clicks or presses it.
---

{% component-demo component="button-default" /%}

## Examples

### Variant

To change the style, use the `variant` prop on `Button`. It accepts `primary`, `secondary`, `destructive`, `outline`, `ghost`, or `ghost-emphasized` and defaults to `primary`. `ghost` and `ghost-emphasized` have no shadow. `ghost` has no background until hover. `ghost-emphasized` starts with muted text and changes only the text color.

{% component-demo component="button-variant" /%}

### Size

To change the size, use the `size` prop on `Button`. It accepts `sm`, `md`, or `lg` and defaults to `md`. Height, padding, text, and icons scale with it. An icon without its own `size-*` class takes the size the button sets.

_Note:_ An icon-only button has no text for screen readers to announce. Give it an `aria-label`.

{% component-demo component="button-size" /%}

### Disabled

To disable the button, use the `disabled` prop. A disabled button ignores clicks and key presses, leaves the tab order, and renders at half opacity.

To keep a disabled button in the tab order, add the `focusableWhenDisabled` prop. Button then sets `aria-disabled` instead of the native `disabled` attribute, so keyboard and screen reader users can still reach it and hear that it is unavailable. Clicks stay blocked.

{% component-demo component="button-disabled" /%}

### Loading state

Button has no `loading` prop. To show a loading state, set `disabled` while the action runs and add `focusableWhenDisabled` so focus stays on the button.

Wrap the changing icon and label in a `span` with an `id`, and point `aria-labelledby` on `Button` at it. Some browser and screen reader pairs do not announce text that changes inside a focused button. An explicit label makes the new text the button's name. Sector23 lays out a direct child `span` as an inline row, so the spinner and text keep the same spacing as an icon and label placed directly in the button.

{% component-demo component="button-loading" /%}

To learn more about this pattern, visit Base UI's [loading states](https://base-ui.com/react/components/button#loading-states) example.

### Submit button

To submit a form, use `type="submit"` on `Button`.

_Note:_ Button defaults to `type="button"`, unlike a native `<button>`. A `Button` inside a `<form>` does **not** submit the form unless you set `type="submit"`.

### Render as another tag

To render a tag other than `<button>`, pass the element to the `render` prop and set `nativeButton={false}`. `nativeButton` defaults to `true`. Leave that default when the rendered element is a `<button>`. With `nativeButton={false}`, Button adds `role="button"`. Enter activates the element on keydown, and Space activates it on keyup.

_Note:_ Do **not** render an `<a>` through `Button`. A link has its own semantics, and Button does not add key handling to it. To make a link look like a button, style the `<a>` directly.

To learn more about this behavior, visit Base UI's [rendering as another tag](https://base-ui.com/react/components/button#rendering-as-another-tag) and [rendering links as buttons](https://base-ui.com/react/components/button#rendering-links-as-buttons) examples.

### Popup trigger

To open a popup from a button, pass `Button` to the `render` prop of a trigger such as `MenuTrigger` or `PopoverTrigger`. The trigger keeps its own behavior and renders with the `variant` and `size` you set on `Button`. While the popup is open, the trigger sets `data-popup-open` on the button, and every variant has a style for it.

_Note:_ Do **not** set `data-popup-open` yourself. The trigger adds it when the popup opens and removes it when the popup closes.

{% component-demo component="button-popup-trigger" /%}

## Credits

### Base UI

This component is based on Base UI's [Button](https://base-ui.com/react/components/button). You can view the full API reference [here](https://base-ui.com/react/components/button#api-reference).
