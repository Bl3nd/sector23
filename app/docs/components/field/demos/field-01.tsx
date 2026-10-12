import { Field, FieldDescription, FieldError, FieldLabel } from "@/registry/sector23/ui/field";
import { Input } from "@/registry/sector23/ui/input";

export default function Field01() {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <Field validationMode="onBlur" className="max-w-sm">
        <FieldLabel>Workspace slug</FieldLabel>
        <Input required placeholder="sector23" />
        <FieldDescription>Lowercase letters, numbers, and hyphens only.</FieldDescription>
        <FieldError match="valueMissing">Enter a slug for your workspace.</FieldError>
      </Field>
    </div>
  );
}
