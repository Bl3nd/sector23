"use client";

import { useId } from "react";

import { Label } from "@/registry/sector23/ui/label";
import {
  NumberField,
  NumberFieldGroup,
  NumberFieldInput,
  NumberFieldScrubArea,
  NumberFieldScrubAreaCursor,
} from "@/registry/sector23/ui/number-field";

export function NumberFieldWithoutButtons() {
  const id = useId();

  return (
    <NumberField id={id} defaultValue={100}>
      <NumberFieldScrubArea>
        <Label htmlFor={id}>Price</Label>
        <NumberFieldScrubAreaCursor />
      </NumberFieldScrubArea>

      <NumberFieldGroup>
        <NumberFieldInput />
      </NumberFieldGroup>
    </NumberField>
  );
}
