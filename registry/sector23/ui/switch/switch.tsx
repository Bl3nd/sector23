"use client";

import { useDirection } from "@base-ui/react";
import { Switch as BaseSwitch } from "@base-ui/react/switch";
import { createContext, useContext } from "react";

import { mergeSlotClassName } from "@/registry/sector23/lib/merge-base-ui";

import { switchStyle, type SwitchVariantProps } from "./switch.style";

type SwitchContext = SwitchVariantProps;

const SwitchContext = createContext<SwitchContext>({
  size: "md",
});

function useSwitch() {
  return useContext(SwitchContext);
}

function Switch({
  size,
  className,
  children,
  ...props
}: BaseSwitch.Root.Props & SwitchVariantProps) {
  const direction = useDirection();

  return (
    <SwitchContext.Provider value={{ size }}>
      <BaseSwitch.Root
        data-slot="switch"
        className={mergeSlotClassName(switchStyle({ size }).root, className)}
        {...props}
        dir={direction}
      >
        {children}
      </BaseSwitch.Root>
    </SwitchContext.Provider>
  );
}

function SwitchThumb({ className, ...props }: BaseSwitch.Thumb.Props) {
  const { size } = useSwitch();

  return (
    <BaseSwitch.Thumb
      data-slot="switch-thumb"
      className={mergeSlotClassName(switchStyle({ size }).thumb, className)}
      {...props}
    />
  );
}

export { Switch, SwitchThumb };
