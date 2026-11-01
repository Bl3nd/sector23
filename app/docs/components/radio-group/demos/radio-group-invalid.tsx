"use client";

import { useId } from "react";

import { Field, FieldItem, FieldLabel } from "@/registry/sector23/ui/field";
import {
  Radio,
  RadioGroup,
  RadioGroupLegend,
  RadioIndicator,
} from "@/registry/sector23/ui/radio-group";

export function RadioGroupInvalid() {
  const id = useId();

  return (
    <Field name="shipping" className="w-fit" invalid>
      <RadioGroup required aria-labelledby={id}>
        <RadioGroupLegend id={id}>Shipping method</RadioGroupLegend>
        <FieldItem>
          <FieldLabel className="flex items-center gap-1.5">
            <Radio value="ground">
              <RadioIndicator />
            </Radio>
            Ground
          </FieldLabel>
        </FieldItem>
        <FieldItem>
          <FieldLabel className="flex items-center gap-1.5">
            <Radio value="air">
              <RadioIndicator />
            </Radio>
            Air
          </FieldLabel>
        </FieldItem>
      </RadioGroup>
    </Field>
  );
}
