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

export function NumberFieldSize() {
  const smId = useId();
  const mdId = useId();
  const lgId = useId();

  return (
    <div className="flex flex-wrap items-end gap-6">
      <NumberField id={smId} defaultValue={100} size="sm">
        <NumberFieldScrubArea>
          <Label htmlFor={smId}>Small</Label>
          <NumberFieldScrubAreaCursor />
        </NumberFieldScrubArea>
        <NumberFieldGroup>
          <NumberFieldDecrement />
          <NumberFieldInput />
          <NumberFieldIncrement />
        </NumberFieldGroup>
      </NumberField>

      <NumberField id={mdId} defaultValue={100} size="md">
        <NumberFieldScrubArea>
          <Label htmlFor={mdId}>Medium (default)</Label>
          <NumberFieldScrubAreaCursor />
        </NumberFieldScrubArea>
        <NumberFieldGroup>
          <NumberFieldDecrement />
          <NumberFieldInput />
          <NumberFieldIncrement />
        </NumberFieldGroup>
      </NumberField>

      <NumberField id={lgId} defaultValue={100} size="lg">
        <NumberFieldScrubArea>
          <Label htmlFor={lgId}>Large</Label>
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
