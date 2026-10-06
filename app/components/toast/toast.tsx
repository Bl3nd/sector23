"use client";

import { mergeProps, useRender } from "@base-ui/react";
import { Toast as BaseToast } from "@base-ui/react/toast";

import { mergeSlotClassName } from "@/app/lib/merge-base-ui";

import { toast } from "./toast.style";

const { useToastManager } = BaseToast;

function ToastProvider(props: BaseToast.Provider.Props) {
  return <BaseToast.Provider {...props} />;
}

function ToastPortal({ className, ...props }: BaseToast.Portal.Props) {
  return (
    <BaseToast.Portal
      data-slot="toast-portal"
      className={mergeSlotClassName(toast().portal, className)}
      {...props}
    />
  );
}

function ToastViewport({ className, ...props }: BaseToast.Viewport.Props) {
  return (
    <BaseToast.Viewport
      data-slot="toast-viewport"
      className={mergeSlotClassName(toast().viewport, className)}
      {...props}
    />
  );
}

function Toast({ className, ...props }: BaseToast.Root.Props) {
  return (
    <BaseToast.Root
      data-slot="toast"
      className={mergeSlotClassName(toast().root, className)}
      {...props}
    />
  );
}

function ToastContent({ className, ...props }: BaseToast.Content.Props) {
  return (
    <BaseToast.Content
      data-slot="toast-content"
      className={mergeSlotClassName(toast().content, className)}
      {...props}
    />
  );
}

function ToastHeader({ className, render, ...props }: useRender.ComponentProps<"div">) {
  const header = useRender({
    defaultTagName: "div",
    props: {
      ...mergeProps<"div">({ className: toast().header({ className }) }, props),
      "data-slot": "toast-header",
    },
    render,
  });

  return header;
}

function ToastTitle({ className, ...props }: BaseToast.Title.Props) {
  return (
    <BaseToast.Title
      data-slot="toast-title"
      className={mergeSlotClassName(toast().title, className)}
      {...props}
    />
  );
}

function ToastDescription({ className, ...props }: BaseToast.Description.Props) {
  return (
    <BaseToast.Description
      data-slot="toast-description"
      className={mergeSlotClassName(toast().description, className)}
      {...props}
    />
  );
}

function ToastAction({ className, ...props }: BaseToast.Action.Props) {
  return (
    <BaseToast.Action
      data-slot="toast-action"
      className={mergeSlotClassName(toast().action, className)}
      {...props}
    />
  );
}

function ToastClose({ className, ...props }: BaseToast.Close.Props) {
  return (
    <BaseToast.Close
      data-slot="toast-close"
      className={mergeSlotClassName(toast().close, className)}
      {...props}
    />
  );
}

function ToastPositioner({ className, ...props }: BaseToast.Positioner.Props) {
  return (
    <BaseToast.Positioner
      data-slot="toast-positioner"
      className={mergeSlotClassName(toast().positioner, className)}
      {...props}
    />
  );
}

function ToastArrow({ className, ...props }: BaseToast.Arrow.Props) {
  return (
    <BaseToast.Arrow
      data-slot="toast-arrow"
      className={mergeSlotClassName(toast().arrow, className)}
      {...props}
    />
  );
}

export {
  useToastManager,
  ToastProvider,
  ToastPortal,
  ToastViewport,
  Toast,
  ToastContent,
  ToastHeader,
  ToastTitle,
  ToastDescription,
  ToastAction,
  ToastClose,
  ToastPositioner,
  ToastArrow,
};
