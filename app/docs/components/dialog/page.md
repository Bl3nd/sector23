---
nextjs:
  metadata:
    title: Dialog
---

{% component-demo component="dialog-default" /%}

## Examples

### Inner scroll

{% component-demo component="dialog-inner-scroll" /%}

### Outer scroll

{% component-demo component="dialog-outer-scroll" /%}

### Nested

Put a `Dialog` inside another dialog's popup to nest it. While the child is open, the parent popup and viewport have `data-nested-dialog-open`. The child popup and viewport have `data-nested`. Escape and an outside press close only the top dialog.

{% component-demo component="dialog-nested" /%}
