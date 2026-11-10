"use client";

import { useId } from "react";

import { Label } from "@/registry/sector23/ui/label";
import {
  NumberField,
  NumberFieldDecrement,
  NumberFieldGroup,
  NumberFieldIncrement,
  NumberFieldInput,
  NumberFieldScrubArea,
  NumberFieldScrubAreaCursor,
} from "@/registry/sector23/ui/number-field";

export function NumberFieldDisabled() {
  const id = useId();

  return (
    <NumberField id={id} defaultValue={100} disabled>
      <NumberFieldScrubArea>
        <Label htmlFor={id}>Price</Label>
        <NumberFieldScrubAreaCursor />
      </NumberFieldScrubArea>

      <NumberFieldGroup>
        <NumberFieldDecrement />
        <NumberFieldInput />
        <NumberFieldIncrement />
      </NumberFieldGroup>
    </NumberField>
  );
}
