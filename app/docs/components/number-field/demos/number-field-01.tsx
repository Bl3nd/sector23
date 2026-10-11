"use client";

import { useId } from "react";

import { Label } from "@/app/components/label";
import {
  NumberField,
  NumberFieldDecrement,
  NumberFieldGroup,
  NumberFieldIncrement,
  NumberFieldInput,
  NumberFieldScrubArea,
  NumberFieldScrubAreaCursor,
} from "@/app/components/number-field";

export default function NumberField01() {
  const id = useId();

  return (
    <div className="flex flex-col items-center justify-center py-10">
      <NumberField id={id} defaultValue={100}>
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
    </div>
  );
}
