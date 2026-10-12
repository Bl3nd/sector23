import { Field, FieldLabel } from "@/registry/sector23/ui/field";
import { Fieldset, FieldsetLegend } from "@/registry/sector23/ui/fieldset";
import { Input } from "@/registry/sector23/ui/input";

export default function Fieldset01() {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <Fieldset className="max-w-xs">
        <FieldsetLegend>Account Information</FieldsetLegend>
        <Field>
          <FieldLabel>Email</FieldLabel>
          <Input required placeholder="john.doe@example.com" />
        </Field>
        <Field>
          <FieldLabel>Password</FieldLabel>
          <Input required type="password" placeholder="********" />
        </Field>
        <Field>
          <FieldLabel>Confirm Password</FieldLabel>
          <Input required type="password" placeholder="********" />
        </Field>
      </Fieldset>
    </div>
  );
}
