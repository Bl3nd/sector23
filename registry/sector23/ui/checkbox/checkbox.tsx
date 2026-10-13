"use client";

import { Checkbox as BaseCheckbox } from "@base-ui/react/checkbox";
import { CheckIcon, MinusIcon } from "lucide-react";

import { mergeSlotClassName } from "@/registry/sector23/lib/merge-base-ui";

import { checkbox } from "./checkbox.style";

function Checkbox({ className, ...props }: BaseCheckbox.Root.Props) {
  return (
    <BaseCheckbox.Root
      data-slot="checkbox"
      className={mergeSlotClassName(checkbox().root, className)}
      {...props}
    />
  );
}

function CheckboxIndicator({
  className,
  render,
  ...props
}: BaseCheckbox.Indicator.Props) {
  return (
    <BaseCheckbox.Indicator
      data-slot="checkbox-indicator"
      className={mergeSlotClassName(checkbox().indicator, className)}
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
