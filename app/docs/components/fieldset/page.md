---
nextjs:
  metadata:
    title: Fieldset
    description: A group of related controls under one shared legend.
---

{% component-demo component="fieldset-default" /%}

## Examples

{% section %}

### Legend

`FieldsetLegend` names the group. The fieldset takes its accessible name from the legend automatically, so you do not set an `id` or `aria-labelledby`.

_Note:_ `FieldsetLegend` renders a `div`, not a native `legend` element. The group still gets its name from the legend.

{% /section %}

{% section %}

### Disabled

To disable the group, set the `disabled` prop on `Fieldset`. It defaults to `false`. Every `Field` inside the group becomes disabled, and the controls in those fields ignore clicks and key presses. `FieldsetLegend` also dims to half opacity.

A disabled `Fieldset` also disables any `Fieldset` nested inside it. A nested fieldset cannot re-enable controls that its parent disabled.

{% component-demo component="fieldset-disabled" /%}

{% /section %}

## Credits

{% section %}

### Base UI

This component is based on Base UI's [Fieldset](https://base-ui.com/react/components/fieldset). You can view the full API reference [here](https://base-ui.com/react/components/fieldset#api-reference).

{% /section %}
