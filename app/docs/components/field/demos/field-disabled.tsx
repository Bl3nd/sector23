import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@/registry/sector23/ui/field";
import { Input } from "@/registry/sector23/ui/input";

export function FieldDisabled() {
  return (
    <div className="flex w-full flex-col gap-6">
      <Field disabled className="max-w-sm">
        <FieldLabel>Workspace slug</FieldLabel>
        <Input defaultValue="sector23" />
        <FieldDescription>
          Lowercase letters, numbers, and hyphens only.
        </FieldDescription>
      </Field>
      <Field disabled invalid className="max-w-sm">
        <FieldLabel>Billing email</FieldLabel>
        <Input required placeholder="you@company.com" />
        <FieldDescription>We send invoices to this address.</FieldDescription>
        <FieldError match={true}>Enter a billing email.</FieldError>
      </Field>
    </div>
  );
}
