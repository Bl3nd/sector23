"use client";

import { mergeProps, useDirection, useRender } from "@base-ui/react";
import { Radio as BaseRadio } from "@base-ui/react/radio";
import { RadioGroup as BaseRadioGroup } from "@base-ui/react/radio-group";
import { createContext, useContext } from "react";

import { mergeSlotClassName } from "@/registry/sector23/lib/merge-base-ui";

import { radioGroup, type RadioGroupVariantProps } from "./radio-group.style";

type RadioGroupContext = RadioGroupVariantProps;

const RadioGroupContext = createContext<RadioGroupContext>({
  size: "md",
});

function useRadioGroup() {
  return useContext(RadioGroupContext);
}

function RadioGroup({
  size,
  className,
  children,
  ...props
}: BaseRadioGroup.Props & RadioGroupVariantProps) {
  const direction = useDirection();

  return (
    <RadioGroupContext.Provider value={{ size }}>
      <BaseRadioGroup
        data-slot="radio-group"
        className={mergeSlotClassName(radioGroup().root, className)}
        {...props}
        dir={direction}
      >
        {children}
      </BaseRadioGroup>
    </RadioGroupContext.Provider>
  );
}

function RadioGroupLegend({
  className,
  render,
  ...props
}: useRender.ComponentProps<"div">) {
  const legend = useRender({
    defaultTagName: "div",
    props: {
      ...mergeProps({ className: radioGroup().legend({ className }) }, props),
      "data-slot": "radio-group-legend",
    },
    render,
  });

  return legend;
}

function Radio({ className, ...props }: BaseRadio.Root.Props) {
  const { size } = useRadioGroup();

  return (
    <BaseRadio.Root
      data-slot="radio"
      className={mergeSlotClassName(radioGroup({ size }).radio, className)}
      {...props}
    />
  );
}

function RadioIndicator({ className, ...props }: BaseRadio.Indicator.Props) {
  const { size } = useRadioGroup();

  return (
    <BaseRadio.Indicator
      data-slot="radio-indicator"
      className={mergeSlotClassName(
        radioGroup({ size }).radioIndicator,
        className,
      )}
      {...props}
    />
  );
}

export { RadioGroup, RadioGroupLegend, Radio, RadioIndicator };
