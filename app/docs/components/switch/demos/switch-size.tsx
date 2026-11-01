import { Label } from "@/registry/sector23/ui/label";
import { Switch, SwitchThumb } from "@/registry/sector23/ui/switch";

export function SwitchSize() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <Label className="flex items-center gap-1.5">
        <Switch size="sm" defaultChecked>
          <SwitchThumb />
        </Switch>
        Small
      </Label>
      <Label className="flex items-center gap-1.5">
        <Switch size="md" defaultChecked>
          <SwitchThumb />
        </Switch>
        Medium (default)
      </Label>
      <Label className="flex items-center gap-1.5">
        <Switch size="lg" defaultChecked>
          <SwitchThumb />
        </Switch>
        Large
      </Label>
    </div>
  );
}
