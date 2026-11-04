import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@/registry/sector23/ui/field";
import { Input } from "@/registry/sector23/ui/input";

export function FieldDisabled() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-6">
      <Field disabled>
        <FieldLabel>Workspace slug</FieldLabel>
        <Input defaultValue="sector23" />
        <FieldDescription>
          Lowercase letters, numbers, and hyphens only.
        </FieldDescription>
      </Field>
      <Field disabled invalid>
        <FieldLabel>Billing email</FieldLabel>
        <Input required placeholder="you@company.com" />
        <FieldDescription>We send invoices to this address.</FieldDescription>
        <FieldError match={true}>Enter a billing email.</FieldError>
      </Field>
    </div>
  );
}
