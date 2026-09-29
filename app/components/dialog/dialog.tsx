import { mergeProps, useRender } from "@base-ui/react";
import { Dialog as BaseDialog } from "@base-ui/react/dialog";

const createDialogHandle = BaseDialog.createHandle;

function Dialog(props: BaseDialog.Root.Props) {
  return <BaseDialog.Root {...props} />;
}

function DialogTrigger({ className, ...props }: BaseDialog.Trigger.Props) {
  return <BaseDialog.Trigger data-slot="dialog-trigger" className={className} {...props} />;
}

function DialogPortal({ className, ...props }: BaseDialog.Portal.Props) {
  return <BaseDialog.Portal data-slot="dialog-portal" className={className} {...props} />;
}

function DialogBackdrop({ className, ...props }: BaseDialog.Backdrop.Props) {
  return <BaseDialog.Backdrop data-slot="dialog-backdrop" className={className} {...props} />;
}

function DialogViewport({ className, ...props }: BaseDialog.Viewport.Props) {
  return <BaseDialog.Viewport data-slot="dialog-viewport" className={className} {...props} />;
}

function DialogPopup({ className, ...props }: BaseDialog.Popup.Props) {
  return <BaseDialog.Popup data-slot="dialog-popup" className={className} {...props} />;
}

function DialogHeader({ className, render, ...props }: useRender.ComponentProps<"div">) {
  const header = useRender({
    defaultTagName: "div",
    props: { ...mergeProps<"div">({ className }, props), "data-slot": "dialog-header" },
    render,
  });

  return header;
}

function DialogTitle({ className, ...props }: BaseDialog.Title.Props) {
  return <BaseDialog.Title data-slot="dialog-title" className={className} {...props} />;
}

function DialogDescription({ className, ...props }: BaseDialog.Description.Props) {
  return <BaseDialog.Description data-slot="dialog-description" className={className} {...props} />;
}

function DialogFooter({ className, render, ...props }: useRender.ComponentProps<"div">) {
  const footer = useRender({
    defaultTagName: "div",
    props: { ...mergeProps<"div">({ className }, props), "data-slot": "dialog-footer" },
    render,
  });

  return footer;
}

function DialogClose({ className, ...props }: BaseDialog.Close.Props) {
  return <BaseDialog.Close data-slot="dialog-close" className={className} {...props} />;
}

export {
  createDialogHandle,
  Dialog,
  DialogTrigger,
  DialogPortal,
  DialogBackdrop,
  DialogViewport,
  DialogPopup,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
};
