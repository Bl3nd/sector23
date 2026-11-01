"use client";

import { useId } from "react";

import { Label } from "@/registry/sector23/ui/label";
import {
  Radio,
  RadioGroup,
  RadioGroupLegend,
  RadioIndicator,
} from "@/registry/sector23/ui/radio-group";

export function RadioGroupSize() {
  const smallId = useId();
  const mediumId = useId();
  const largeId = useId();

  return (
    <div className="flex flex-wrap items-start gap-6">
      <RadioGroup
        size="sm"
        aria-labelledby={smallId}
        defaultValue="light"
        className="[&>label]:flex [&>label]:items-center [&>label]:gap-1.5"
      >
        <RadioGroupLegend id={smallId}>Small</RadioGroupLegend>
        <Label>
          <Radio value="light">
            <RadioIndicator />
          </Radio>
          Light
        </Label>
        <Label>
          <Radio value="dark">
            <RadioIndicator />
          </Radio>
          Dark
        </Label>
      </RadioGroup>
      <RadioGroup
        size="md"
        aria-labelledby={mediumId}
        defaultValue="light"
        className="[&>label]:flex [&>label]:items-center [&>label]:gap-1.5"
      >
        <RadioGroupLegend id={mediumId}>Medium (default)</RadioGroupLegend>
        <Label>
          <Radio value="light">
            <RadioIndicator />
          </Radio>
          Light
        </Label>
        <Label>
          <Radio value="dark">
            <RadioIndicator />
          </Radio>
          Dark
        </Label>
      </RadioGroup>
      <RadioGroup
        size="lg"
        aria-labelledby={largeId}
        defaultValue="light"
        className="[&>label]:flex [&>label]:items-center [&>label]:gap-1.5"
      >
        <RadioGroupLegend id={largeId}>Large</RadioGroupLegend>
        <Label>
          <Radio value="light">
            <RadioIndicator />
          </Radio>
          Light
        </Label>
        <Label>
          <Radio value="dark">
            <RadioIndicator />
          </Radio>
          Dark
        </Label>
      </RadioGroup>
    </div>
  );
}
