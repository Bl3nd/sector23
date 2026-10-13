"use client";

import { mergeProps, useDirection, useRender } from "@base-ui/react";
import { PreviewCard as BasePreviewCard } from "@base-ui/react/preview-card";

import { mergeSlotClassName } from "@/registry/sector23/lib/merge-base-ui";

import { previewCard } from "./preview-card.style";

const POSITIONER_SIDE_OFFSET = 8;

const createPreviewCardHandle = BasePreviewCard.createHandle;

function PreviewCard(props: BasePreviewCard.Root.Props) {
  return <BasePreviewCard.Root {...props} />;
}

function PreviewCardTrigger({
  className,
  ...props
}: BasePreviewCard.Trigger.Props) {
  return (
    <BasePreviewCard.Trigger
      data-slot="preview-card-trigger"
      className={mergeSlotClassName(previewCard().trigger, className)}
      {...props}
    />
  );
}

function PreviewCardPortal({
  className,
  ...props
}: BasePreviewCard.Portal.Props) {
  const direction = useDirection();

  return (
    <BasePreviewCard.Portal
      data-slot="preview-card-portal"
      className={mergeSlotClassName(previewCard().portal, className)}
      {...props}
      dir={direction}
    />
  );
}

function PreviewCardBackdrop({
  className,
  ...props
}: BasePreviewCard.Backdrop.Props) {
  return (
    <BasePreviewCard.Backdrop
      data-slot="preview-card-backdrop"
      className={mergeSlotClassName(previewCard().backdrop, className)}
      {...props}
    />
  );
}

function PreviewCardPositioner({
  className,
  sideOffset = POSITIONER_SIDE_OFFSET,
  ...props
}: BasePreviewCard.Positioner.Props) {
  return (
    <BasePreviewCard.Positioner
      data-slot="preview-card-positioner"
      className={mergeSlotClassName(previewCard().positioner, className)}
      sideOffset={sideOffset}
      {...props}
    />
  );
}

function PreviewCardPopup({
  className,
  ...props
}: BasePreviewCard.Popup.Props) {
  return (
    <BasePreviewCard.Popup
      data-slot="preview-card-popup"
      className={mergeSlotClassName(previewCard().popup, className)}
      {...props}
    />
  );
}

function PreviewCardArrow({
  className,
  ...props
}: BasePreviewCard.Arrow.Props) {
  return (
    <BasePreviewCard.Arrow
      data-slot="preview-card-arrow"
      className={mergeSlotClassName(previewCard().arrow, className)}
      {...props}
    />
  );
}

function PreviewCardViewport({
  className,
  ...props
}: BasePreviewCard.Viewport.Props) {
  return (
    <BasePreviewCard.Viewport
      data-slot="preview-card-viewport"
      className={mergeSlotClassName(previewCard().viewport, className)}
      {...props}
    />
  );
}

function PreviewCardContent({
  className,
  render,
  ...props
}: useRender.ComponentProps<"div">) {
  const content = useRender({
    defaultTagName: "div",
    props: {
      ...mergeProps<"div">(
        { className: previewCard().content({ className }) },
        props,
      ),
      "data-slot": "preview-card-content",
    },
    render,
  });

  return content;
}

export {
  createPreviewCardHandle,
  PreviewCard,
  PreviewCardTrigger,
  PreviewCardPortal,
  PreviewCardBackdrop,
  PreviewCardPositioner,
  PreviewCardPopup,
  PreviewCardArrow,
  PreviewCardViewport,
  PreviewCardContent,
};
