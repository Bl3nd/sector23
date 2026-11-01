"use client";

import { useId } from "react";

import { Label } from "@/registry/sector23/ui/label";
import {
  Radio,
  RadioGroup,
  RadioGroupLegend,
  RadioIndicator,
} from "@/registry/sector23/ui/radio-group";

export function RadioGroupDefault() {
  const id = useId();

  return (
    <RadioGroup
      aria-labelledby={id}
      defaultValue="option-1"
      className="[&>label]:flex [&>label]:items-center [&>label]:gap-1.5"
    >
      <RadioGroupLegend id={id}>What is your favorite color?</RadioGroupLegend>
      <Label>
        <Radio value="option-1">
          <RadioIndicator />
        </Radio>
        Red
      </Label>
      <Label>
        <Radio value="option-2">
          <RadioIndicator />
        </Radio>
        Green
      </Label>
      <Label>
        <Radio value="option-3">
          <RadioIndicator />
        </Radio>
        Blue
      </Label>
    </RadioGroup>
  );
}
