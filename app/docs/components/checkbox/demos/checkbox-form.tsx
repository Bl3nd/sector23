import { Button } from "@/registry/sector23/ui/button";
import { Checkbox, CheckboxIndicator } from "@/registry/sector23/ui/checkbox";
import { Field, FieldLabel } from "@/registry/sector23/ui/field";
import { Form } from "@/registry/sector23/ui/form";

export function CheckboxForm() {
  return (
    <Form className="max-w-60">
      <Field name="terms" className="w-fit">
        <FieldLabel className="flex items-center gap-2">
          <Checkbox required>
            <CheckboxIndicator />
          </Checkbox>
          Accept terms and conditions
        </FieldLabel>
      </Field>

      <Button type="submit">Submit</Button>
    </Form>
  );
}
