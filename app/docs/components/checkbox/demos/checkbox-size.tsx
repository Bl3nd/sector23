import { Checkbox, CheckboxIndicator } from "@/registry/sector23/ui/checkbox";
import { Label } from "@/registry/sector23/ui/label";

export function CheckboxSize() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <Label className="flex items-center gap-1.5">
        <Checkbox size="sm" defaultChecked>
          <CheckboxIndicator />
        </Checkbox>
        Small
      </Label>
      <Label className="flex items-center gap-1.5">
        <Checkbox size="md" defaultChecked>
          <CheckboxIndicator />
        </Checkbox>
        Medium (default)
      </Label>
      <Label className="flex items-center gap-1.5">
        <Checkbox size="lg" defaultChecked>
          <CheckboxIndicator />
        </Checkbox>
        Large
      </Label>
    </div>
  );
}
