"use client";

import { useDirection } from "@base-ui/react";
import { Toggle as BaseToggle } from "@base-ui/react/toggle";

import { mergeSlotClassName } from "@/registry/sector23/lib/merge-base-ui";

import { toggle } from "./toggle.style";

function Toggle({ className, ...props }: BaseToggle.Props) {
  const direction = useDirection();

  return (
    <BaseToggle
      data-slot="toggle"
      className={mergeSlotClassName(toggle, className)}
      {...props}
      dir={direction}
    />
  );
}

export { Toggle };
