---
nextjs:
  metadata:
    title: Alert Dialog
    description: A dialog that requires a user's input.
---

{% component-demo component="alert-dialog-default" /%}

## Examples

### Detached triggers

If an alert dialog should be triggered by a button outside of the `AlertDialog`, you can use the `createHandle` function to get a `handle` that you attach to both the `AlertDialogTrigger` and `AlertDialog`.
To see it in practice, visit Base UI's [example](https://base-ui.com/react/components/alert-dialog#detached-triggers).

_Multiple detached triggers_: You can have multiple triggers for a single alert dialog which will display content for the specific trigger. To do this, you need to use the `createHandle` function and attach
it to all `AlertDialogTrigger`s and the `AlertDialog`. The content for what each trigger should display is called the `payload`. To see how to do this, visit Base UI's [detached triggers with payload example](https://base-ui.com/react/components/alert-dialog#multiple-triggers).

_Controlled version_: [Controlled multiple triggers](https://base-ui.com/react/components/alert-dialog#controlled-mode-with-multiple-triggers).

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
