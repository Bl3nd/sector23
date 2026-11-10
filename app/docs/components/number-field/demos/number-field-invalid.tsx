"use client";

import { Field, FieldError, FieldLabel } from "@/registry/sector23/ui/field";
import {
  NumberField,
  NumberFieldDecrement,
  NumberFieldGroup,
  NumberFieldIncrement,
  NumberFieldInput,
} from "@/registry/sector23/ui/number-field";

export function NumberFieldInvalid() {
  return (
    <Field name="quantity" invalid className="w-fit">
      <NumberField defaultValue={0}>
        <FieldLabel>Quantity</FieldLabel>
        <NumberFieldGroup>
          <NumberFieldDecrement />
          <NumberFieldInput />
          <NumberFieldIncrement />
        </NumberFieldGroup>
      </NumberField>
      <FieldError match={true}>Enter a quantity greater than 0.</FieldError>
    </Field>
  );
}
