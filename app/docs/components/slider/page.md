---
nextjs:
  metadata:
    title: Slider
    description: A control that the user drags to choose a value in a range.
---

{% component-demo component="slider-default" /%}

## Examples

### Parts

`Slider` groups the parts. `SliderControl` is the area that responds to a press on the track. `SliderTrack` holds the range and is positioned, so a thumb or a mark inside it can sit on the track. `SliderIndicator` fills from the start of the track up to the thumb. `SliderThumb` is the handle. It renders the `input type="range"` that receives focus and key presses.

_Note:_ Without `SliderIndicator`, the track shows **no fill**.

### Label

`SliderLabel` names the slider. It renders a `div`. A click focuses the thumb when the slider has one thumb. The demo at the top of the page names that thumb Volume.

_Note:_ A click on `SliderLabel` does **not** focus a thumb when the slider has more than one. Set `aria-label` on each `SliderThumb`.

_Note:_ `SliderLabel` **ignores `id`**. The root owns the label id.

To name a slider with no visible label, set `aria-label` on `SliderThumb`, as the vertical example does. When a thumb has `aria-label`, that text is its accessible name. A `SliderLabel` on the same slider still shows on screen.

For a range, also set `aria-label` on each thumb so each one has its own name. Pass `getAriaLabel` instead when the name comes from the thumb index. It receives that index.

### Value

`SliderValue` prints the current value. It renders an `output`. Several numbers are joined with an en dash. To render something else, pass a function as its child. The function receives the formatted strings and the raw numbers.

_Note:_ Any other child is **replaced** by the formatted value. Omit `SliderValue` to hide the number.

To set the starting value, use the `defaultValue` prop. It defaults to `min`. `min` defaults to `0`. The slider at the top of the page starts at `25`. For a range, pass an array with one number per thumb.

To control the value, pass `value` and `onValueChange` together. `onValueChange` receives the next value as its first argument. One thumb passes a number. A range passes an array of numbers, sorted from low to high. The second argument is `eventDetails`. `eventDetails.reason` is `keyboard`, `drag`, `track-press`, `input-change`, or `none`.

`onValueCommitted` runs when that change is committed. It receives the same value and an `eventDetails` argument. It does not run when the value stayed the same, or when the change was canceled.

_Note:_ `onValueCommitted` is **a generic event**. It is not a change event.

`format` takes `Intl.NumberFormatOptions` and formats the number in `SliderValue` and in the value a screen reader announces. `locale` selects that locale. It defaults to the user's locale. During server render it is `en-US` until hydration.

With two thumbs and no `getAriaValueText`, each thumb announces its formatted number followed by "start range" or "end range". Pass `getAriaValueText` to replace that text. It receives the formatted value, the raw number, and the thumb index.

`className` and `style` also accept a function that receives the slider state, such as `state.disabled`, `state.dragging`, or `state.values`.

### Range

To choose a span, pass an array to `defaultValue` or `value` and render one `SliderThumb` for each number. Set `index` on each thumb. The index matches that thumb's place in the value array. Server rendering needs the index. The demo starts at 25 and 45, so the first thumb is the minimum and the second is the maximum.

`SliderIndicator` fills the track between the outer thumbs. The values in state and in `onValueChange` stay sorted from low to high.

While dragging, `thumbCollisionBehavior` controls thumbs that meet. It accepts `push`, `swap`, or `none` and defaults to `push`. `push` moves the other thumb and leaves it there. `swap` exchanges the thumbs. `none` stops a thumb at its neighbor.

`minStepsBetweenValues` sets the smallest gap between thumbs, counted in steps. It defaults to `0`, so thumbs may sit on the same value.

{% component-demo component="slider-range" /%}

### Steps

`min` defaults to `0` and `max` defaults to `100`. Keep `min` less than `max`.

`step` defaults to `1`. The value snaps to `min` plus a multiple of `step`. Choose a step that divides `max - min`.

`largeStep` defaults to `10`. Page Up, Page Down, and Shift plus an arrow key move by `largeStep`.

Arrow Right and Arrow Up raise the focused thumb by `step`. Arrow Left and Arrow Down lower it by `step`. Home sets the thumb to `min`. End sets it to `max`. On a range, Home and End stop at the neighboring thumb.

The input inside `SliderThumb` is what receives these keys.

{% component-demo component="slider-steps" /%}

### Marks

Marks are not a slider part. Render them inside `SliderTrack` and set `left` to each mark's percentage of the range. The track is already positioned, so the marks sit on it. Hide the marks and their captions from assistive tech with `aria-hidden`. The thumb is the value.

Pair the marks with `step` when the thumb should stop on each mark. The demo uses `step={25}`.

{% component-demo component="slider-marks" /%}

### Thumb alignment

`thumbAlignment` accepts `center`, `edge`, or `edge-client-only` and defaults to `center`. `center` lines the middle of the thumb up with the end of the control, so at `min` and `max` the thumb hangs past the track. `edge` insets the thumb so its outer edge meets the control edge. `edge-client-only` matches `edge` and positions the thumb after hydration, which keeps that measurement out of the server bundle.

The demo sets both sliders to `0`.

{% component-demo component="slider-thumb-alignment" /%}

### Orientation

Set `orientation="vertical"` on `Slider`. It defaults to `horizontal`. The track then fills the slider's height, and the indicator grows from the bottom. Give the slider a height. Arrow Up raises the value. Arrow Down lowers it.

{% component-demo component="slider-vertical" /%}

### Size

To change the size, use the `size` prop on `Slider`. It accepts `sm`, `md`, or `lg` and defaults to `md`. The thumb and the padding around the track scale with it. The track thickness stays the same.

_Note:_ Set `size` on `Slider`, not on `SliderThumb`. The thumb reads **the size from its parent `Slider`**.

{% component-demo component="slider-size" /%}

### Disabled

To disable the slider, use the `disabled` prop. It defaults to `false`. A disabled slider ignores pointer and keyboard input, drops focus, and renders the label, the value, and the control at half opacity. It leaves its value out of the form.

Inside a `Field`, `disabled` on the `Field` disables the slider too.

To disable one thumb, set `disabled` on that `SliderThumb`. That thumb ignores input. The label and the track stay at full opacity.

_Note:_ `data-disabled` follows **the root**. A disabled thumb does not dim the slider.

{% component-demo component="slider-disabled" /%}

### Form submission

To include the slider in a form, set the `name` prop. Each thumb submits its current number under that name. A range submits one number per thumb, from low to high. A disabled slider submits nothing.

Inside a `Field`, set `name` on the `Field`. The field name takes precedence over `name` on `Slider`. See [Form submission](/docs/components/field#form-submission).

The `form` prop names the form that owns the inputs when the slider is rendered outside that form.

### Direction

`Slider` reads its direction from the nearest `DirectionProvider`. A `dir` prop on `Slider` is **replaced**.

In a right-to-left layout, Arrow Right lowers the value and Arrow Left raises it. Arrow Up and Arrow Down keep the same direction.

## Credits

### Base UI

This component is based on Base UI's [Slider](https://base-ui.com/react/components/slider). You can view the full API reference [here](https://base-ui.com/react/components/slider#api-reference).
