import { Field, FieldLabel } from "@/registry/sector23/ui/field";
import { Fieldset, FieldsetLegend } from "@/registry/sector23/ui/fieldset";
import { Input } from "@/registry/sector23/ui/input";

export function FieldsetDisabled() {
  return (
    <Fieldset className="max-w-xs" disabled>
      <FieldsetLegend>Account Information</FieldsetLegend>
      <Field>
        <FieldLabel>Email</FieldLabel>
        <Input defaultValue="john.doe@example.com" />
      </Field>
      <Field>
        <FieldLabel>Password</FieldLabel>
        <Input type="password" defaultValue="password" />
      </Field>
    </Fieldset>
  );
}
