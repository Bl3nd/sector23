"use client";

import { useDirection } from "@base-ui/react";
import { Popover as BasePopover } from "@base-ui/react/popover";

import { mergeSlotClassName } from "@/app/lib/merge-base-ui";

import { popover } from "./popover.style";

const POSITIONER_SIDE_OFFSET = 8;

const createPopoverHandle = BasePopover.createHandle;

function Popover(props: BasePopover.Root.Props) {
  return <BasePopover.Root {...props} />;
}

function PopoverTrigger({ className, ...props }: BasePopover.Trigger.Props) {
  return (
    <BasePopover.Trigger
      data-slot="popover-trigger"
      className={mergeSlotClassName(popover().trigger, className)}
      {...props}
    />
  );
}

function PopoverPortal({ className, ...props }: BasePopover.Portal.Props) {
  const direction = useDirection();

  return (
    <BasePopover.Portal
      data-slot="popover-portal"
      className={mergeSlotClassName(popover().portal, className)}
      {...props}
      dir={direction}
    />
  );
}

function PopoverBackdrop({ className, ...props }: BasePopover.Backdrop.Props) {
  return (
    <BasePopover.Backdrop
      data-slot="popover-backdrop"
      className={mergeSlotClassName(popover().backdrop, className)}
      {...props}
    />
  );
}

function PopoverPositioner({
  className,
  sideOffset = POSITIONER_SIDE_OFFSET,
  ...props
}: BasePopover.Positioner.Props) {
  return (
    <BasePopover.Positioner
      data-slot="popover-positioner"
      className={mergeSlotClassName(popover().positioner, className)}
      sideOffset={sideOffset}
      {...props}
    />
  );
}

function PopoverPopup({ className, ...props }: BasePopover.Popup.Props) {
  return (
    <BasePopover.Popup
      data-slot="popover-popup"
      className={mergeSlotClassName(popover().popup, className)}
      {...props}
    />
  );
}

function PopoverArrow({ className, ...props }: BasePopover.Arrow.Props) {
  return (
    <BasePopover.Arrow
      data-slot="popover-arrow"
      className={mergeSlotClassName(popover().arrow, className)}
      {...props}
    />
  );
}

function PopoverViewport({ className, ...props }: BasePopover.Viewport.Props) {
  return (
    <BasePopover.Viewport
      data-slot="popover-viewport"
      className={mergeSlotClassName(popover().viewport, className)}
      {...props}
    />
  );
}

function PopoverTitle({ className, ...props }: BasePopover.Title.Props) {
  return (
    <BasePopover.Title
      data-slot="popover-title"
      className={mergeSlotClassName(popover().title, className)}
      {...props}
    />
  );
}

function PopoverDescription({ className, ...props }: BasePopover.Description.Props) {
  return (
    <BasePopover.Description
      data-slot="popover-description"
      className={mergeSlotClassName(popover().description, className)}
      {...props}
    />
  );
}

function PopoverClose({ className, ...props }: BasePopover.Close.Props) {
  return (
    <BasePopover.Close
      data-slot="popover-close"
      className={mergeSlotClassName(popover().close, className)}
      {...props}
    />
  );
}

export {
  createPopoverHandle,
  Popover,
  PopoverTrigger,
  PopoverPortal,
  PopoverBackdrop,
  PopoverPositioner,
  PopoverPopup,
  PopoverArrow,
  PopoverViewport,
  PopoverTitle,
  PopoverDescription,
  PopoverClose,
};
