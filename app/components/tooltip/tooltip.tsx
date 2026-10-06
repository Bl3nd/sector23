"use client";

import { Tooltip as BaseTooltip } from "@base-ui/react/tooltip";

import { mergeSlotClassName } from "@/app/lib/merge-base-ui";

import { tooltip } from "./tooltip.style";

const POSITIONER_SIDE_OFFSET = 6;

const createTooltipHandle = BaseTooltip.createHandle;

function TooltipProvider(props: BaseTooltip.Provider.Props) {
  return <BaseTooltip.Provider {...props} />;
}

function Tooltip(props: BaseTooltip.Root.Props) {
  return <BaseTooltip.Root {...props} />;
}

function TooltipTrigger({ className, ...props }: BaseTooltip.Trigger.Props) {
  return (
    <BaseTooltip.Trigger
      data-slot="tooltip-trigger"
      className={mergeSlotClassName(tooltip().trigger, className)}
      {...props}
    />
  );
}

function TooltipPortal({ className, ...props }: BaseTooltip.Portal.Props) {
  return (
    <BaseTooltip.Portal
      data-slot="tooltip-portal"
      className={mergeSlotClassName(tooltip().portal, className)}
      {...props}
    />
  );
}

function TooltipPositioner({
  className,
  sideOffset = POSITIONER_SIDE_OFFSET,
  ...props
}: BaseTooltip.Positioner.Props) {
  return (
    <BaseTooltip.Positioner
      data-slot="tooltip-positioner"
      className={mergeSlotClassName(tooltip().positioner, className)}
      sideOffset={sideOffset}
      {...props}
    />
  );
}

function TooltipPopup({ className, ...props }: BaseTooltip.Popup.Props) {
  return (
    <BaseTooltip.Popup
      data-slot="tooltip-popup"
      className={mergeSlotClassName(tooltip().popup, className)}
      {...props}
    />
  );
}

function TooltipArrow({ className, ...props }: BaseTooltip.Arrow.Props) {
  return (
    <BaseTooltip.Arrow
      data-slot="tooltip-arrow"
      className={mergeSlotClassName(tooltip().arrow, className)}
      {...props}
    />
  );
}

function TooltipViewport({ className, ...props }: BaseTooltip.Viewport.Props) {
  return (
    <BaseTooltip.Viewport
      data-slot="tooltip-viewport"
      className={mergeSlotClassName(tooltip().viewport, className)}
      {...props}
    />
  );
}

export {
  createTooltipHandle,
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipPortal,
  TooltipPositioner,
  TooltipPopup,
  TooltipArrow,
  TooltipViewport,
};
