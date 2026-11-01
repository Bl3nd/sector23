import { Label } from "@/registry/sector23/ui/label";
import { Switch, SwitchThumb } from "@/registry/sector23/ui/switch";

export function SwitchReadonly() {
  return (
    <Label className="flex items-center gap-1.5">
      <Switch readOnly defaultChecked>
        <SwitchThumb />
      </Switch>
      Airplane mode
    </Label>
  );
}
