"use client";

import { useId } from "react";

import { Checkbox, CheckboxIndicator } from "@/app/components/checkbox";
import { CheckboxGroup, CheckboxGroupLegend } from "@/app/components/checkbox-group";
import { Label } from "@/app/components/label";

export default function CheckboxGroupPage() {
  const id = useId();

  return (
    <div className="flex flex-col items-center justify-center py-10">
      <CheckboxGroup aria-labelledby={id} defaultValue={["option-1"]} disabled>
        <CheckboxGroupLegend id={id}>Options</CheckboxGroupLegend>
        <Label className="flex items-center gap-2">
          <Checkbox name="option" value="option-1">
            <CheckboxIndicator />
          </Checkbox>
          Option 1
        </Label>
        <Label className="flex items-center gap-2">
          <Checkbox name="option" value="option-2">
            <CheckboxIndicator />
          </Checkbox>
          Option 2
        </Label>
        <Label className="flex items-center gap-2">
          <Checkbox name="option" value="option-3">
            <CheckboxIndicator />
          </Checkbox>
          Option 3
        </Label>
      </CheckboxGroup>
    </div>
  );
}
