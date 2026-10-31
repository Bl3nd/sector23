import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@/registry/sector23/ui/field";
import { Input } from "@/registry/sector23/ui/input";

export function FieldDefault() {
  return (
    <Field validationMode="onBlur" className="max-w-sm">
      <FieldLabel>Workspace slug</FieldLabel>
      <Input required placeholder="sector23" />
      <FieldDescription>
        Lowercase letters, numbers, and hyphens only.
      </FieldDescription>
      <FieldError match="valueMissing">
        Enter a slug for your workspace.
      </FieldError>
    </Field>
  );
}
