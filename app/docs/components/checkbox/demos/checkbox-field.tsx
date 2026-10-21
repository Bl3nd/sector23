import { Checkbox, CheckboxIndicator } from "@/registry/sector23/ui/checkbox";
import { Field, FieldLabel } from "@/registry/sector23/ui/field";

export function CheckboxField() {
  return (
    <Field name="terms" className="w-fit" invalid>
      <FieldLabel className="flex items-center gap-1.5">
        <Checkbox required>
          <CheckboxIndicator />
        </Checkbox>
        Accept terms and conditions
      </FieldLabel>
    </Field>
  );
}
