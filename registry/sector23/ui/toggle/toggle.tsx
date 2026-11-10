"use client";

import { useDirection } from "@base-ui/react";
import { Toggle as BaseToggle } from "@base-ui/react/toggle";

import { mergeVariantClassName } from "@/registry/sector23/lib/merge-base-ui";

import { toggle, type ToggleVariantProps } from "./toggle.style";

function Toggle({
  size,
  className,
  ...props
}: BaseToggle.Props & ToggleVariantProps) {
  const direction = useDirection();

  return (
    <BaseToggle
      data-slot="toggle"
      className={mergeVariantClassName(toggle, { size }, className)}
      {...props}
      dir={direction}
    />
  );
}

export { Toggle };
