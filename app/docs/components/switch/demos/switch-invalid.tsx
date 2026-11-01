import { Field, FieldLabel } from "@/registry/sector23/ui/field";
import { Switch, SwitchThumb } from "@/registry/sector23/ui/switch";

export function SwitchInvalid() {
  return (
    <Field name="airplane-mode" className="w-fit" invalid>
      <FieldLabel className="flex items-center gap-1.5">
        <Switch required>
          <SwitchThumb />
        </Switch>
        Airplane mode
      </FieldLabel>
    </Field>
  );
}
