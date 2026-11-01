"use client";

import { useId } from "react";

import { Label } from "@/registry/sector23/ui/label";
import {
  Radio,
  RadioGroup,
  RadioGroupLegend,
  RadioIndicator,
} from "@/registry/sector23/ui/radio-group";

export function RadioGroupDisabled() {
  const id = useId();

  return (
    <RadioGroup
      disabled
      aria-labelledby={id}
      defaultValue="text"
      className="[&>label]:flex [&>label]:items-center [&>label]:gap-1.5"
    >
      <RadioGroupLegend id={id}>Contact method</RadioGroupLegend>
      <Label>
        <Radio value="text">
          <RadioIndicator />
        </Radio>
        Text
      </Label>
      <Label>
        <Radio value="phone">
          <RadioIndicator />
        </Radio>
        Phone
      </Label>
      <Label>
        <Radio value="mail">
          <RadioIndicator />
        </Radio>
        Mail
      </Label>
    </RadioGroup>
  );
}
