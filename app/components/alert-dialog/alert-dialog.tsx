"use client";

import { mergeProps, useDirection, useRender } from "@base-ui/react";
import { AlertDialog as BaseAlertDialog } from "@base-ui/react/alert-dialog";

import { mergeSlotClassName } from "@/app/lib/merge-base-ui";

import { alertDialog } from "./alert-dialog.style";

const createAlertDialogHandle = BaseAlertDialog.createHandle;

function AlertDialog(props: BaseAlertDialog.Root.Props) {
  return <BaseAlertDialog.Root {...props} />;
}

function AlertDialogTrigger({ className, ...props }: BaseAlertDialog.Trigger.Props) {
  return (
    <BaseAlertDialog.Trigger
      data-slot="alert-dialog-trigger"
      className={mergeSlotClassName(alertDialog().trigger, className)}
      {...props}
    />
  );
}

function AlertDialogPortal({ className, ...props }: BaseAlertDialog.Portal.Props) {
  return (
    <BaseAlertDialog.Portal
      data-slot="alert-dialog-portal"
      className={mergeSlotClassName(alertDialog().portal, className)}
      {...props}
    />
  );
}

function AlertDialogBackdrop({ className, ...props }: BaseAlertDialog.Backdrop.Props) {
  return (
    <BaseAlertDialog.Backdrop
      data-slot="alert-dialog-backdrop"
      className={mergeSlotClassName(alertDialog().backdrop, className)}
      {...props}
    />
  );
}

function AlertDialogViewport({ className, ...props }: BaseAlertDialog.Viewport.Props) {
  return (
    <BaseAlertDialog.Viewport
      data-slot="alert-dialog-viewport"
      className={mergeSlotClassName(alertDialog().viewport, className)}
      {...props}
    />
  );
}

function AlertDialogPopup({ className, ...props }: BaseAlertDialog.Popup.Props) {
  const direction = useDirection();

  return (
    <BaseAlertDialog.Popup
      data-slot="alert-dialog-popup"
      className={mergeSlotClassName(alertDialog().popup, className)}
      {...props}
      dir={direction}
    />
  );
}

function AlertDialogHeader({ className, render, ...props }: useRender.ComponentProps<"div">) {
  const header = useRender({
    defaultTagName: "div",
    props: {
      ...mergeProps<"div">({ className: alertDialog().header({ className }) }, props),
      "data-slot": "alert-dialog-header",
    },
    render,
  });

  return header;
}

function AlertDialogTitle({ className, ...props }: BaseAlertDialog.Title.Props) {
  return (
    <BaseAlertDialog.Title
      data-slot="alert-dialog-title"
      className={mergeSlotClassName(alertDialog().title, className)}
      {...props}
    />
  );
}

function AlertDialogDescription({ className, ...props }: BaseAlertDialog.Description.Props) {
  return (
    <BaseAlertDialog.Description
      data-slot="alert-dialog-description"
      className={mergeSlotClassName(alertDialog().description, className)}
      {...props}
    />
  );
}

function AlertDialogFooter({ className, render, ...props }: useRender.ComponentProps<"div">) {
  const footer = useRender({
    defaultTagName: "div",
    props: {
      ...mergeProps<"div">({ className: alertDialog().footer({ className }) }, props),
      "data-slot": "alert-dialog-footer",
    },
    render,
  });

  return footer;
}

function AlertDialogClose({ className, ...props }: BaseAlertDialog.Close.Props) {
  return (
    <BaseAlertDialog.Close
      data-slot="alert-dialog-close"
      className={mergeSlotClassName(alertDialog().close, className)}
      {...props}
    />
  );
}

export {
  createAlertDialogHandle,
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogPortal,
  AlertDialogBackdrop,
  AlertDialogViewport,
  AlertDialogPopup,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogClose,
};
