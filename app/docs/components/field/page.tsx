import { Field, FieldDescription, FieldError, FieldLabel } from "@/app/components/field";
import { Input } from "@/app/components/input";

export default function FieldPage() {
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
