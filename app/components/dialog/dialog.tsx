"use client";

import { mergeProps, useRender } from "@base-ui/react";
import { Dialog as BaseDialog } from "@base-ui/react/dialog";

import { mergeSlotClassName } from "@/app/lib/merge-base-ui";

import { dialog } from "./dialog.style";

const createDialogHandle = BaseDialog.createHandle;

function Dialog(props: BaseDialog.Root.Props) {
  return <BaseDialog.Root {...props} />;
}

function DialogTrigger({ className, ...props }: BaseDialog.Trigger.Props) {
  return (
    <BaseDialog.Trigger
      data-slot="dialog-trigger"
      className={mergeSlotClassName(dialog().trigger, className)}
      {...props}
    />
  );
}

function DialogPortal({ className, ...props }: BaseDialog.Portal.Props) {
  return (
    <BaseDialog.Portal
      data-slot="dialog-portal"
      className={mergeSlotClassName(dialog().portal, className)}
      {...props}
    />
  );
}

function DialogBackdrop({ className, ...props }: BaseDialog.Backdrop.Props) {
  return (
    <BaseDialog.Backdrop
      data-slot="dialog-backdrop"
      className={mergeSlotClassName(dialog().backdrop, className)}
      {...props}
    />
  );
}

function DialogViewport({ className, ...props }: BaseDialog.Viewport.Props) {
  return (
    <BaseDialog.Viewport
      data-slot="dialog-viewport"
      className={mergeSlotClassName(dialog().viewport, className)}
      {...props}
    />
  );
}

function DialogPopup({ className, ...props }: BaseDialog.Popup.Props) {
  return (
    <BaseDialog.Popup
      data-slot="dialog-popup"
      className={mergeSlotClassName(dialog().popup, className)}
      {...props}
    />
  );
}

function DialogHeader({ className, render, ...props }: useRender.ComponentProps<"div">) {
  const header = useRender({
    defaultTagName: "div",
    props: {
      ...mergeProps<"div">({ className: dialog().header({ className }) }, props),
      "data-slot": "dialog-header",
    },
    render,
  });

  return header;
}

function DialogTitle({ className, ...props }: BaseDialog.Title.Props) {
  return (
    <BaseDialog.Title
      data-slot="dialog-title"
      className={mergeSlotClassName(dialog().title, className)}
      {...props}
    />
  );
}

function DialogDescription({ className, ...props }: BaseDialog.Description.Props) {
  return (
    <BaseDialog.Description
      data-slot="dialog-description"
      className={mergeSlotClassName(dialog().description, className)}
      {...props}
    />
  );
}

function DialogFooter({ className, render, ...props }: useRender.ComponentProps<"div">) {
  const footer = useRender({
    defaultTagName: "div",
    props: {
      ...mergeProps<"div">({ className: dialog().footer({ className }) }, props),
      "data-slot": "dialog-footer",
    },
    render,
  });

  return footer;
}

function DialogClose({ className, ...props }: BaseDialog.Close.Props) {
  return (
    <BaseDialog.Close
      data-slot="dialog-close"
      className={mergeSlotClassName(dialog().close, className)}
      {...props}
    />
  );
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
