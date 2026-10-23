---
nextjs:
  metadata:
    title: Accordion
    description: A set of collapsible panels. Most commonly used for FAQ's.
---

{% component-demo component="accordion-default" /%}

## Examples

### Multiple

To enable multiple panels to be opened at once, use the `multiple` prop on the root.

### Additional icon

{% component-demo component="accordion-additional-icon" /%}

### Hidden until found

To enable a panel to open upon search, use the `hiddenUntilFound` prop on the root.

To learn more about this behavior, visit Base UI's [description](https://base-ui.com/react/components/accordion#hidden-until-found) of the `hiddenUntilFound` prop.

### Root disabled

{% component-demo component="accordion-root-disabled" /%}

### Item disabled

_Note:_ When disabling an item, do not disable it using the `AccordionTrigger`. Doing so will **not** apply the required `data-disabled` prop.

{% component-demo component="accordion-item-disabled" /%}

## Credits

### Base UI

This component is based on Base UI's [Accordion](https://base-ui.com/react/components/accordion). You can view the full API reference [here](https://base-ui.com/react/components/accordion#api-reference).
