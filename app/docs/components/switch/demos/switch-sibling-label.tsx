import { useId } from "react";

import { Label } from "@/registry/sector23/ui/label";
import { Switch, SwitchThumb } from "@/registry/sector23/ui/switch";

export function SwitchSiblingLabel() {
  const id = useId();

  return (
    <div className="flex items-center gap-1.5">
      <Switch id={id}>
        <SwitchThumb />
      </Switch>
      <Label htmlFor={id}>Email me the changelog</Label>
    </div>
  );
}
