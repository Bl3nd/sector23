"use client";

import { Switch as BaseSwitch } from "@base-ui/react/switch";

import { mergeSlotClassName } from "@/app/lib/merge-base-ui";

import { switchStyle } from "./switch.style";

function Switch({ className, ...props }: BaseSwitch.Root.Props) {
  return (
    <BaseSwitch.Root
      data-slot="switch"
      className={mergeSlotClassName(switchStyle().root, className)}
      {...props}
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
