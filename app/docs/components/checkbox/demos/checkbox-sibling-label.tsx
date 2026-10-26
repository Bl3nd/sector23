import { useId } from "react";

import { Checkbox, CheckboxIndicator } from "@/registry/sector23/ui/checkbox";
import { Label } from "@/registry/sector23/ui/label";

export function CheckboxSiblingLabel() {
  const id = useId();

  return (
    <div className="flex items-center gap-1.5">
      <Checkbox id={id}>
        <CheckboxIndicator />
      </Checkbox>
      <Label htmlFor={id}>Email me the changelog</Label>
    </div>
  );
}
