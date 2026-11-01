"use client";

import { useId, useState } from "react";

import { Checkbox, CheckboxIndicator } from "@/registry/sector23/ui/checkbox";
import { CheckboxGroup } from "@/registry/sector23/ui/checkbox-group";
import { Label } from "@/registry/sector23/ui/label";

const options = ["option-1", "option-2", "option-3"];

export function CheckboxGroupParent() {
  const id = useId();
  const [value, setValue] = useState<string[]>([]);

  return (
    <CheckboxGroup
      aria-labelledby={id}
      value={value}
      onValueChange={setValue}
      allValues={options}
      className="[&>label]:flex [&>label]:items-center [&>label]:gap-1.5 [&>label]:not-first:ms-2"
    >
      <Label id={id}>
        <Checkbox parent>
          <CheckboxIndicator />
        </Checkbox>
        Select all options
      </Label>

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
