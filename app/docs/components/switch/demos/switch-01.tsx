import { Label } from "@/registry/sector23/ui/label";
import { Switch, SwitchThumb } from "@/registry/sector23/ui/switch";

export default function Switch01() {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <Label className="flex items-center gap-2">
        <Switch>
          <SwitchThumb />
        </Switch>
        Notifications
      </Label>
    </div>
  );
}
