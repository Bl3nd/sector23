"use client";

import { mergeProps, useDirection, useRender } from "@base-ui/react";
import { Drawer as BaseDrawer } from "@base-ui/react/drawer";

import { mergeSlotClassName } from "@/registry/sector23/lib/merge-base-ui";

import { drawer } from "./drawer.style";

type DrawerHandle = ReturnType<typeof createDrawerHandle>;

const createDrawerHandle = BaseDrawer.createHandle;

function DrawerProvider(props: BaseDrawer.Provider.Props) {
  return <BaseDrawer.Provider {...props} />;
}

function DrawerIndentBackground({ className, ...props }: BaseDrawer.IndentBackground.Props) {
  return (
    <BaseDrawer.IndentBackground
      data-slot="drawer-indent-background"
      className={mergeSlotClassName(drawer().indentBackground, className)}
      {...props}
    />
  );
}

function DrawerIndent({ className, ...props }: BaseDrawer.Indent.Props) {
  return (
    <BaseDrawer.Indent
      data-slot="drawer-indent"
      className={mergeSlotClassName(drawer().indent, className)}
      {...props}
    />
  );
}

function Drawer(props: BaseDrawer.Root.Props) {
  return <BaseDrawer.Root {...props} />;
}

function DrawerTrigger({ className, ...props }: BaseDrawer.Trigger.Props) {
  return (
    <BaseDrawer.Trigger
      data-slot="drawer-trigger"
      className={mergeSlotClassName(drawer().trigger, className)}
      {...props}
    />
  );
}

function DrawerSwipeArea({ className, ...props }: BaseDrawer.SwipeArea.Props) {
  return (
    <BaseDrawer.SwipeArea
      data-slot="drawer-swipe-area"
      className={mergeSlotClassName(drawer().swipeArea, className)}
      {...props}
    />
  );
}

function DrawerPortal({ className, ...props }: BaseDrawer.Portal.Props) {
  return (
    <BaseDrawer.Portal
      data-slot="drawer-portal"
      className={mergeSlotClassName(drawer().portal, className)}
      {...props}
    />
  );
}

function DrawerBackdrop({ className, ...props }: BaseDrawer.Backdrop.Props) {
  return (
    <BaseDrawer.Backdrop
      data-slot="drawer-backdrop"
      className={mergeSlotClassName(drawer().backdrop, className)}
      {...props}
    />
  );
}

function DrawerViewport({ className, ...props }: BaseDrawer.Viewport.Props) {
  return (
    <BaseDrawer.Viewport
      data-slot="drawer-viewport"
      className={mergeSlotClassName(drawer().viewport, className)}
      {...props}
    />
  );
}

function DrawerPopup({ className, ...props }: BaseDrawer.Popup.Props) {
  return (
    <BaseDrawer.Popup
      data-slot="drawer-popup"
      className={mergeSlotClassName(drawer().popup, className)}
      {...props}
    />
  );
}

function DrawerContent({ className, ...props }: BaseDrawer.Content.Props) {
  const direction = useDirection();

  return (
    <BaseDrawer.Content
      data-slot="drawer-content"
      className={mergeSlotClassName(drawer().content, className)}
      {...props}
      dir={direction}
    />
  );
}

function DrawerHeader({ className, render, ...props }: useRender.ComponentProps<"div">) {
  const header = useRender({
    defaultTagName: "div",
    props: {
      ...mergeProps<"div">({ className: drawer().header({ className }) }, props),
      "data-slot": "drawer-header",
    },
    render,
  });

  return header;
}

function DrawerTitle({ className, ...props }: BaseDrawer.Title.Props) {
  return (
    <BaseDrawer.Title
      data-slot="drawer-title"
      className={mergeSlotClassName(drawer().title, className)}
      {...props}
    />
  );
}

function DrawerDescription({ className, ...props }: BaseDrawer.Description.Props) {
  return (
    <BaseDrawer.Description
      data-slot="drawer-description"
      className={mergeSlotClassName(drawer().description, className)}
      {...props}
    />
  );
}

function DrawerFooter({ className, render, ...props }: useRender.ComponentProps<"div">) {
  const footer = useRender({
    defaultTagName: "div",
    props: {
      ...mergeProps<"div">({ className: drawer().footer({ className }) }, props),
      "data-slot": "drawer-footer",
    },
    render,
  });

  return footer;
}

function DrawerClose({ className, ...props }: BaseDrawer.Close.Props) {
  return (
    <BaseDrawer.Close
      data-slot="drawer-close"
      className={mergeSlotClassName(drawer().close, className)}
      {...props}
    />
  );
}

export {
  createDrawerHandle,
  DrawerProvider,
  DrawerIndentBackground,
  DrawerIndent,
  Drawer,
  DrawerTrigger,
  DrawerSwipeArea,
  DrawerPortal,
  DrawerBackdrop,
  DrawerViewport,
  DrawerPopup,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
};
export type { DrawerHandle };
