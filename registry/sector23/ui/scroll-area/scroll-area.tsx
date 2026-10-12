"use client";

import { useDirection } from "@base-ui/react";
import { ScrollArea as BaseScrollArea } from "@base-ui/react/scroll-area";

import { mergeSlotClassName } from "@/registry/sector23/lib/merge-base-ui";

import { scrollArea } from "./scroll-area.style";

function ScrollArea({ className, ...props }: BaseScrollArea.Root.Props) {
  const direction = useDirection();

  return (
    <BaseScrollArea.Root
      data-slot="scroll-area"
      className={mergeSlotClassName(scrollArea().root, className)}
      {...props}
      dir={direction}
    />
  );
}

function ScrollAreaViewport({ className, ...props }: BaseScrollArea.Viewport.Props) {
  return (
    <BaseScrollArea.Viewport
      data-slot="scroll-area-viewport"
      className={mergeSlotClassName(scrollArea().viewport, className)}
      {...props}
    />
  );
}

function ScrollAreaContent({ className, ...props }: BaseScrollArea.Content.Props) {
  return (
    <BaseScrollArea.Content
      data-slot="scroll-area-content"
      className={mergeSlotClassName(scrollArea().content, className)}
      {...props}
    />
  );
}

function ScrollAreaScrollbar({ className, ...props }: BaseScrollArea.Scrollbar.Props) {
  return (
    <BaseScrollArea.Scrollbar
      data-slot="scroll-area-scrollbar"
      className={mergeSlotClassName(scrollArea().scrollbar, className)}
      {...props}
    />
  );
}

function ScrollAreaThumb({ className, ...props }: BaseScrollArea.Thumb.Props) {
  return (
    <BaseScrollArea.Thumb
      data-slot="scroll-area-thumb"
      className={mergeSlotClassName(scrollArea().thumb, className)}
      {...props}
    />
  );
}

function ScrollAreaCorner({ className, ...props }: BaseScrollArea.Corner.Props) {
  return (
    <BaseScrollArea.Corner
      data-slot="scroll-area-corner"
      className={mergeSlotClassName(scrollArea().corner, className)}
      {...props}
    />
  );
}

export {
  ScrollArea,
  ScrollAreaViewport,
  ScrollAreaContent,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaCorner,
};
