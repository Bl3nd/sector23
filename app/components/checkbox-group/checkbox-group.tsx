"use client";

import { mergeProps, useRender } from "@base-ui/react";
import { CheckboxGroup as BaseCheckboxGroup } from "@base-ui/react/checkbox-group";

import { mergeSlotClassName } from "@/app/lib/merge-base-ui";

import { checkboxGroup } from "./checkbox-group.style";

function CheckboxGroup({ className, ...props }: BaseCheckboxGroup.Props) {
  return (
    <BaseCheckboxGroup
      data-slot="checkbox-group"
      className={mergeSlotClassName(checkboxGroup().root, className)}
      {...props}
    />
  );
}

function CheckboxGroupLegend({ className, render, ...props }: useRender.ComponentProps<"div">) {
  const legend = useRender({
    defaultTagName: "div",
    props: {
      ...mergeProps({ className: checkboxGroup().legend({ className }) }, props),
      "data-slot": "checkbox-group-legend",
    },
    render,
  });

  return legend;
}

export { CheckboxGroup, CheckboxGroupLegend };
