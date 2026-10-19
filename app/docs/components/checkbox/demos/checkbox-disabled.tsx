import { Checkbox, CheckboxIndicator } from "@/registry/sector23/ui/checkbox";
import { Label } from "@/registry/sector23/ui/label";

export function CheckboxDisabled() {
  return (
    <Label className="flex items-center gap-2">
      <Checkbox disabled>
        <CheckboxIndicator />
      </Checkbox>
      Accept terms and conditions
    </Label>
  );
}
