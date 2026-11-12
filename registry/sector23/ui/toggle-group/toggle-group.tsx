"use client";

import { useDirection } from "@base-ui/react";
import { ToggleGroup as BaseToggleGroup } from "@base-ui/react/toggle-group";

import { mergeVariantClassName } from "@/registry/sector23/lib/merge-base-ui";

import {
  toggleGroup,
  type ToggleGroupVariantProps,
} from "./toggle-group.style";

function ToggleGroup({
  outline,
  className,
  ...props
}: BaseToggleGroup.Props & ToggleGroupVariantProps) {
  const direction = useDirection();

  return (
    <BaseToggleGroup
      data-slot="toggle-group"
      className={mergeVariantClassName(toggleGroup, { outline }, className)}
      {...props}
      dir={direction}
    />
  );
}

export { ToggleGroup };
