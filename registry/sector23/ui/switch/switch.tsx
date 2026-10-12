"use client";

import { useDirection } from "@base-ui/react";
import { Switch as BaseSwitch } from "@base-ui/react/switch";

import { mergeSlotClassName } from "@/registry/sector23/lib/merge-base-ui";

import { switchStyle } from "./switch.style";

function Switch({ className, ...props }: BaseSwitch.Root.Props) {
  const direction = useDirection();

  return (
    <BaseSwitch.Root
      data-slot="switch"
      className={mergeSlotClassName(switchStyle().root, className)}
      {...props}
      dir={direction}
    />
  );
}

function SwitchThumb({ className, ...props }: BaseSwitch.Thumb.Props) {
  return (
    <BaseSwitch.Thumb
      data-slot="switch-thumb"
      className={mergeSlotClassName(switchStyle().thumb, className)}
      {...props}
    />
  );
}

export { Switch, SwitchThumb };
