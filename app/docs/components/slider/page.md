---
nextjs:
  metadata:
    title: Slider
    description: A control that the user drags to choose a value in a range.
---

{% component-demo component="slider-default" /%}

## Examples

{% section %}

### Label

`SliderLabel` names the slider. It renders a `div`. A click on it focuses the thumb only when the slider has one thumb.

_Note:_ `SliderLabel` **ignores `id`**. The root owns the label id.

For a slider with no visible label, set `aria-label` on `SliderThumb` instead. See Base UI's [labeling a slider](https://base-ui.com/react/components/slider#labeling-a-slider).

{% /section %}

{% section %}

### Size

To change the size, use the `size` prop on `Slider`. It accepts `sm`, `md`, or `lg` and defaults to `md`. The thumb and the padding around the track scale with it. The track thickness stays the same.

_Note:_ Set `size` on `Slider`, not on `SliderThumb`. The thumb reads the size from its parent `Slider`.

{% component-demo component="slider-size" /%}

{% /section %}

{% section %}

### Disabled

To disable the slider, use the `disabled` prop. A disabled slider renders its label, value, and control at half opacity and ignores pointer and keyboard input. Inside a [Field](/docs/components/field), `disabled` on the `Field` disables the slider too.

To disable one thumb, set `disabled` on that `SliderThumb`. The thumb ignores input, and the slider stays at full opacity, because `data-disabled` follows the root.

{% component-demo component="slider-disabled" /%}

{% /section %}

{% section %}

### Invalid

To mark the slider as invalid, place it in a `Field` and set `invalid` on the `Field`. `Slider` has no `invalid` prop of its own. The `Field` sets `data-invalid` on the slider's root, control, track, indicator, thumb, and value. `SliderLabel` does **not** get `data-invalid`.

{% component-demo component="slider-invalid" /%}

{% /section %}

{% section %}

### Form submission

To include the slider in a form, set `name` on `Slider`. Inside a [Field](/docs/components/field), set `name` on the `Field` instead. It takes precedence over `name` on `Slider`. See [Form submission](/docs/components/field#form-submission).

{% /section %}

{% section %}

### Direction

`Slider` reads its direction from the nearest `DirectionProvider`. A `dir` prop on `Slider` is **replaced**.

{% /section %}

{% section %}

### Vertical

Set `orientation="vertical"` on `Slider`. The track fills the slider's height, so give the slider a height. See Base UI's [vertical](https://base-ui.com/react/components/slider#vertical).

{% component-demo component="slider-vertical" /%}

{% /section %}

## Credits

{% section %}

### Base UI

This component is based on Base UI's [Slider](https://base-ui.com/react/components/slider). You can view the full API reference [here](https://base-ui.com/react/components/slider#api-reference).

{% /section %}
