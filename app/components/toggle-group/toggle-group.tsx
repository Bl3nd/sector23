"use client";

import { useDirection } from "@base-ui/react";
import { ToggleGroup as BaseToggleGroup } from "@base-ui/react/toggle-group";

import { mergeSlotClassName } from "@/app/lib/merge-base-ui";

import { toggleGroup } from "./toggle-group.style";

function ToggleGroup({ className, ...props }: BaseToggleGroup.Props) {
  const direction = useDirection();

  return (
    <BaseToggleGroup
      data-slot="toggle-group"
      className={mergeSlotClassName(toggleGroup, className)}
      {...props}
      dir={direction}
    />
  );
}

export { ToggleGroup };
