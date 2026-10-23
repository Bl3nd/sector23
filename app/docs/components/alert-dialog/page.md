---
nextjs:
  metadata:
    title: Alert Dialog
    description: A dialog that requires a user's input.
---

{% component-demo component="alert-dialog-default" /%}

## Examples

### Detached triggers

Create a handle with `createAlertDialogHandle` and pass it to the `AlertDialogTrigger` and the `AlertDialog`. The trigger can sit outside the dialog. Several triggers can share one handle. Each trigger passes a `payload`, and the dialog render function receives the payload of the trigger that opened it. A single detached trigger uses the same handle and omits `payload`.

{% component-demo component="alert-dialog-detached-triggers" /%}

For a controlled version, see Base UI's [controlled multiple triggers](https://base-ui.com/react/components/alert-dialog#controlled-mode-with-multiple-triggers).

### Disabled

To disable the alert dialog, do so by applying the `disabled` prop to the `AlertDialogTrigger`.

### Inner scroll

{% component-demo component="alert-dialog-inner-scroll" /%}

### Nested

{% component-demo component="alert-dialog-nested" /%}

## Additional Base UI examples

### Opening from menu

To see this example, visit [open from a menu](https://base-ui.com/react/components/alert-dialog#open-from-a-menu)

## Credits

### Base UI

This component is based on Base UI's [AlertDialog](https://base-ui.com/react/components/alert-dialog). You can view the full API reference [here](https://base-ui.com/react/components/alert-dialog#api-reference).
