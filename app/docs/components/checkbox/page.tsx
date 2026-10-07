import { Checkbox, CheckboxIndicator } from "@/app/components/checkbox";
import { Label } from "@/app/components/label";

export default function CheckboxPage() {
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
