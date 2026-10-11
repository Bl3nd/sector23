"use client";

import { useDirection } from "@base-ui/react";
import { Fieldset as BaseFieldset } from "@base-ui/react/fieldset";

import { mergeSlotClassName } from "@/app/lib/merge-base-ui";

import { fieldset } from "./fieldset.style";

function Fieldset({ className, ...props }: BaseFieldset.Root.Props) {
  const direction = useDirection();

  return (
    <BaseFieldset.Root
      data-slot="fieldset"
      className={mergeSlotClassName(fieldset().root, className)}
      {...props}
      dir={direction}
    />
  );
}

function FieldsetLegend({ className, ...props }: BaseFieldset.Legend.Props) {
  return (
    <BaseFieldset.Legend
      data-slot="fieldset-legend"
      className={mergeSlotClassName(fieldset().legend, className)}
      {...props}
    />
  );
}

export { Fieldset, FieldsetLegend };
