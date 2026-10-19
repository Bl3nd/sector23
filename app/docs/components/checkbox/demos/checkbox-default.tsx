import { Checkbox, CheckboxIndicator } from "@/registry/sector23/ui/checkbox";
import { Label } from "@/registry/sector23/ui/label";

export function CheckboxDefault() {
  return (
    <Label className="flex items-center gap-2">
      <Checkbox>
        <CheckboxIndicator />
      </Checkbox>
      Accept terms and conditions
    </Label>
  );
}
