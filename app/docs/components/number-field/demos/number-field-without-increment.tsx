"use client";

import { useId } from "react";

import { Label } from "@/registry/sector23/ui/label";
import {
  NumberField,
  NumberFieldDecrement,
  NumberFieldGroup,
  NumberFieldInput,
  NumberFieldScrubArea,
  NumberFieldScrubAreaCursor,
} from "@/registry/sector23/ui/number-field";

export function NumberFieldWithoutIncrement() {
  const id = useId();

  return (
    <NumberField id={id} defaultValue={100}>
      <NumberFieldScrubArea>
        <Label htmlFor={id}>Price</Label>
        <NumberFieldScrubAreaCursor />
      </NumberFieldScrubArea>

      <NumberFieldGroup>
        <NumberFieldDecrement />
        <NumberFieldInput />
      </NumberFieldGroup>
    </NumberField>
  );
}
