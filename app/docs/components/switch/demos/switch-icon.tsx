import { CheckIcon, XIcon } from "lucide-react";

import { Label } from "@/registry/sector23/ui/label";
import { Switch, SwitchThumb } from "@/registry/sector23/ui/switch";

export function SwitchIcon() {
  return (
    <Label className="flex items-center gap-1.5">
      <Switch>
        <SwitchThumb>
          <XIcon className="group-data-checked:hidden" />
          <CheckIcon className="hidden group-data-checked:block" />
        </SwitchThumb>
      </Switch>
      Wi-Fi
    </Label>
  );
}
