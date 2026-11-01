import { Field, FieldLabel } from "@/registry/sector23/ui/field";
import { Input } from "@/registry/sector23/ui/input";

export function InputInvalid() {
  return (
    <Field invalid className="w-56">
      <FieldLabel>Username</FieldLabel>
      <Input defaultValue="ada lovelace" />
    </Field>
  );
}
