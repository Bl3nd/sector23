"use client";

import { useDirection } from "@base-ui/react";
import { Collapsible as BaseCollapsible } from "@base-ui/react/collapsible";

import { mergeSlotClassName } from "@/registry/sector23/lib/merge-base-ui";

import { collapsible } from "./collapsible.style";

function Collapsible({ className, ...props }: BaseCollapsible.Root.Props) {
  const direction = useDirection();

  return (
    <BaseCollapsible.Root
      data-slot="collapsible"
      className={mergeSlotClassName(collapsible().root, className)}
      {...props}
      dir={direction}
    />
  );
}

function CollapsibleTrigger({
  className,
  ...props
}: BaseCollapsible.Trigger.Props) {
  return (
    <BaseCollapsible.Trigger
      data-slot="collapsible-trigger"
      className={mergeSlotClassName(collapsible().trigger, className)}
      {...props}
    />
  );
}

function CollapsiblePanel({
  className,
  ...props
}: BaseCollapsible.Panel.Props) {
  return (
    <BaseCollapsible.Panel
      data-slot="collapsible-panel"
      className={mergeSlotClassName(collapsible().panel, className)}
      {...props}
    />
  );
}

export { Collapsible, CollapsibleTrigger, CollapsiblePanel };
