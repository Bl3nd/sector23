"use client";

import { useId } from "react";

import { Label } from "@/app/components/label";
import { Radio, RadioGroup, RadioGroupLegend, RadioIndicator } from "@/app/components/radio-group";

export default function RadioGroup01() {
  const id = useId();

  return (
    <div className="flex flex-col items-center justify-center py-10">
      <RadioGroup aria-labelledby={id} defaultValue="option-1">
        <RadioGroupLegend id={id}>What is your favorite color?</RadioGroupLegend>
        <Label className="flex items-center gap-2">
          <Radio value="option-1">
            <RadioIndicator />
          </Radio>
          Red
        </Label>
        <Label className="flex items-center gap-2">
          <Radio value="option-2">
            <RadioIndicator />
          </Radio>
          Green
        </Label>
        <Label className="flex items-center gap-2">
          <Radio value="option-3">
            <RadioIndicator />
          </Radio>
          Blue
        </Label>
      </RadioGroup>
    </div>
  );
}
