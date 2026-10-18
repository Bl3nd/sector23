import { Button } from "@/registry/sector23/ui/button";
import { Checkbox, CheckboxIndicator } from "@/registry/sector23/ui/checkbox";
import { CheckboxGroup } from "@/registry/sector23/ui/checkbox-group";
import { Field, FieldItem, FieldLabel } from "@/registry/sector23/ui/field";
import { Fieldset, FieldsetLegend } from "@/registry/sector23/ui/fieldset";
import { Form } from "@/registry/sector23/ui/form";

export function CheckboxGroupForm() {
  return (
    <Form className="max-w-32">
      <Field name="options">
        <Fieldset render={<CheckboxGroup />}>
          <FieldsetLegend>Options</FieldsetLegend>
          <FieldItem>
            <FieldLabel className="flex items-center gap-2">
              <Checkbox required name="option" value="option-1">
                <CheckboxIndicator />
              </Checkbox>
              Option 1
            </FieldLabel>
          </FieldItem>
          <FieldItem>
            <FieldLabel className="flex items-center gap-2">
              <Checkbox required name="option" value="option-2">
                <CheckboxIndicator />
              </Checkbox>
              Option 2
            </FieldLabel>
          </FieldItem>
          <FieldItem>
            <FieldLabel className="flex items-center gap-2">
              <Checkbox required name="option" value="option-3">
                <CheckboxIndicator />
              </Checkbox>
              Option 3
            </FieldLabel>
          </FieldItem>
        </Fieldset>
      </Field>
      <Button type="submit">Submit</Button>
    </Form>
  );
}
