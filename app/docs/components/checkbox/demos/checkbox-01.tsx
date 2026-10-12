import { Checkbox, CheckboxIndicator } from "@/registry/sector23/ui/checkbox";
import { Label } from "@/registry/sector23/ui/label";

export default function Checkbox01() {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <Label className="flex items-center gap-2">
        <Checkbox>
          <CheckboxIndicator />
        </Checkbox>
        Accept terms and conditions
      </Label>
    </div>
  );
}
