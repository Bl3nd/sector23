"use client";

import { useId } from "react";

import { Label } from "@/registry/sector23/ui/label";
import {
  Radio,
  RadioGroup,
  RadioGroupLegend,
  RadioIndicator,
} from "@/registry/sector23/ui/radio-group";

export function RadioGroupSiblingLabel() {
  const legendId = useId();
  const emailId = useId();
  const pushId = useId();

  return (
    <RadioGroup aria-labelledby={legendId} defaultValue="email">
      <RadioGroupLegend id={legendId}>Notifications</RadioGroupLegend>
      <div className="flex items-center gap-1.5">
        <Radio id={emailId} value="email">
          <RadioIndicator />
        </Radio>
        <Label htmlFor={emailId}>Email</Label>
      </div>
      <div className="flex items-center gap-1.5">
        <Radio id={pushId} value="push">
          <RadioIndicator />
        </Radio>
        <Label htmlFor={pushId}>Push</Label>
      </div>
    </RadioGroup>
  );
}
