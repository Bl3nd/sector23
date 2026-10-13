"use client";

import { mergeProps, useDirection, useRender } from "@base-ui/react";
import { Radio as BaseRadio } from "@base-ui/react/radio";
import { RadioGroup as BaseRadioGroup } from "@base-ui/react/radio-group";

import { mergeSlotClassName } from "@/registry/sector23/lib/merge-base-ui";

import { radioGroup } from "./radio-group.style";

function RadioGroup({ className, ...props }: BaseRadioGroup.Props) {
  const direction = useDirection();

  return (
    <BaseRadioGroup
      data-slot="radio-group"
      className={mergeSlotClassName(radioGroup().root, className)}
      {...props}
      dir={direction}
    />
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
  return (
    <BaseRadio.Root
      data-slot="radio"
      className={mergeSlotClassName(radioGroup().radio, className)}
      {...props}
    />
  );
}

function RadioIndicator({ className, ...props }: BaseRadio.Indicator.Props) {
  return (
    <BaseRadio.Indicator
      data-slot="radio-indicator"
      className={mergeSlotClassName(radioGroup().radioIndicator, className)}
      {...props}
    />
  );
}

export { RadioGroup, RadioGroupLegend, Radio, RadioIndicator };
