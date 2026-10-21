"use client";

import { Checkbox as BaseCheckbox } from "@base-ui/react/checkbox";
import { CheckIcon, MinusIcon } from "lucide-react";
import { createContext, useContext } from "react";

import { mergeSlotClassName } from "@/registry/sector23/lib/merge-base-ui";

import { checkbox, type CheckboxVariantProps } from "./checkbox.style";

type CheckboxContext = CheckboxVariantProps;

const CheckboxContext = createContext<CheckboxContext>({
  size: "md",
});

function useCheckbox() {
  return useContext(CheckboxContext);
}

function Checkbox({
  size,
  className,
  children,
  ...props
}: BaseCheckbox.Root.Props & CheckboxVariantProps) {
  return (
    <CheckboxContext.Provider value={{ size }}>
      <BaseCheckbox.Root
        data-slot="checkbox"
        className={mergeSlotClassName(checkbox({ size }).root, className)}
        {...props}
      >
        {children}
      </BaseCheckbox.Root>
    </CheckboxContext.Provider>
  );
}

function CheckboxIndicator({
  className,
  render,
  ...props
}: BaseCheckbox.Indicator.Props) {
  const { size } = useCheckbox();

  return (
    <BaseCheckbox.Indicator
      data-slot="checkbox-indicator"
      className={mergeSlotClassName(checkbox({ size }).indicator, className)}
      render={
        render !== undefined
          ? render
          : (indicatorProps, state) => (
              <span {...indicatorProps}>
                {state.indeterminate ? <MinusIcon /> : <CheckIcon />}
              </span>
            )
      }
      {...props}
    />
  );
}

export { Checkbox, CheckboxIndicator };
