import { Field, FieldItem, FieldLabel } from "@/registry/sector23/ui/field";
import { Fieldset, FieldsetLegend } from "@/registry/sector23/ui/fieldset";
import {
  Radio,
  RadioGroup,
  RadioIndicator,
} from "@/registry/sector23/ui/radio-group";

export function RadioGroupInvalid() {
  return (
    <Field name="shipping" className="w-fit" invalid>
      <Fieldset render={<RadioGroup required />}>
        <FieldsetLegend>Shipping method</FieldsetLegend>
        <FieldItem>
          <FieldLabel className="flex items-center gap-1.5">
            <Radio value="ground">
              <RadioIndicator />
            </Radio>
            Ground
          </FieldLabel>
        </FieldItem>
        <FieldItem>
          <FieldLabel className="flex items-center gap-1.5">
            <Radio value="air">
              <RadioIndicator />
            </Radio>
            Air
          </FieldLabel>
        </FieldItem>
      </Fieldset>
    </Field>
  );
}
