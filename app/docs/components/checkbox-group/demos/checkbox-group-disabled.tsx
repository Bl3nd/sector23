"use client";

import { useId } from "react";

import { Checkbox, CheckboxIndicator } from "@/registry/sector23/ui/checkbox";
import {
  CheckboxGroup,
  CheckboxGroupLegend,
} from "@/registry/sector23/ui/checkbox-group";
import { Label } from "@/registry/sector23/ui/label";

export function CheckboxGroupDisabled() {
  const id = useId();

  return (
    <CheckboxGroup
      aria-labelledby={id}
      defaultValue={["option-1"]}
      className="[&>label]:flex [&>label]:items-center [&>label]:gap-1.5"
      disabled
    >
      <CheckboxGroupLegend id={id}>Options</CheckboxGroupLegend>
      <Label>
        <Checkbox name="option" value="option-1">
          <CheckboxIndicator />
        </Checkbox>
        Option 1
      </Label>
      <Label>
        <Checkbox name="option" value="option-2">
          <CheckboxIndicator />
        </Checkbox>
        Option 2
      </Label>
      <Label>
        <Checkbox name="option" value="option-3">
          <CheckboxIndicator />
        </Checkbox>
        Option 3
      </Label>
    </CheckboxGroup>
  );
}
