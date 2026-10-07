import { Label } from "@/app/components/label";
import { Switch, SwitchThumb } from "@/app/components/switch";

export default function SwitchPage() {
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
