"use client";

import { useDirection } from "@base-ui/react";
import { ScrollArea as BaseScrollArea } from "@base-ui/react/scroll-area";
import { createContext, useContext } from "react";

import { mergeSlotClassName } from "@/registry/sector23/lib/merge-base-ui";

import { scrollArea, type ScrollAreaVariantProps } from "./scroll-area.style";

type ScrollAreaContext = ScrollAreaVariantProps;

const ScrollAreaContext = createContext<ScrollAreaContext>({
  faded: false,
});

function useScrollArea() {
  return useContext(ScrollAreaContext);
}

function ScrollArea({
  faded,
  className,
  children,
  ...props
}: BaseScrollArea.Root.Props & ScrollAreaVariantProps) {
  const direction = useDirection();

  return (
    <ScrollAreaContext.Provider value={{ faded }}>
      <BaseScrollArea.Root
        data-slot="scroll-area"
        className={mergeSlotClassName(scrollArea().root, className)}
        {...props}
        dir={direction}
      >
        {children}
      </BaseScrollArea.Root>
    </ScrollAreaContext.Provider>
  );
}

function ScrollAreaViewport({
  className,
  ...props
}: BaseScrollArea.Viewport.Props) {
  const { faded } = useScrollArea();

  return (
    <BaseScrollArea.Viewport
      data-slot="scroll-area-viewport"
      className={mergeSlotClassName(scrollArea({ faded }).viewport, className)}
      {...props}
    />
  );
}

function ScrollAreaContent({
  className,
  ...props
}: BaseScrollArea.Content.Props) {
  return (
    <BaseScrollArea.Content
      data-slot="scroll-area-content"
      className={mergeSlotClassName(scrollArea().content, className)}
      {...props}
    />
  );
}

function ScrollAreaScrollbar({
  className,
  ...props
}: BaseScrollArea.Scrollbar.Props) {
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

function ScrollAreaCorner({
  className,
  ...props
}: BaseScrollArea.Corner.Props) {
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
