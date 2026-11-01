"use client";

import { useId } from "react";

import { Label } from "@/registry/sector23/ui/label";
import {
  Radio,
  RadioGroup,
  RadioGroupLegend,
  RadioIndicator,
} from "@/registry/sector23/ui/radio-group";

export function RadioGroupReadonly() {
  const id = useId();

  return (
    <RadioGroup
      readOnly
      aria-labelledby={id}
      defaultValue="window"
      className="[&>label]:flex [&>label]:items-center [&>label]:gap-1.5"
    >
      <RadioGroupLegend id={id}>Seat</RadioGroupLegend>
      <Label>
        <Radio value="window">
          <RadioIndicator />
        </Radio>
        Window
      </Label>
      <Label>
        <Radio value="aisle">
          <RadioIndicator />
        </Radio>
        Aisle
      </Label>
    </RadioGroup>
  );
}
