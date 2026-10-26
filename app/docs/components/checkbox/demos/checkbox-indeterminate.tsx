"use client";

import { useState } from "react";

import { Checkbox, CheckboxIndicator } from "@/registry/sector23/ui/checkbox";
import { Label } from "@/registry/sector23/ui/label";

export function CheckboxIndeterminate() {
  const [indeterminate, setIndeterminate] = useState(true);

  return (
    <Label className="flex items-center gap-1.5">
      <Checkbox
        indeterminate={indeterminate}
        onCheckedChange={() => setIndeterminate(false)}
      >
        <CheckboxIndicator />
      </Checkbox>
      Some notifications
    </Label>
  );
}
