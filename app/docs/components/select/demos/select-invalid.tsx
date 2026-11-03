import { Field, FieldLabel } from "@/registry/sector23/ui/field";
import {
  Select,
  SelectIcon,
  SelectItem,
  SelectItemIndicator,
  SelectItemText,
  SelectList,
  SelectPopup,
  SelectPortal,
  SelectPositioner,
  SelectScrollDownArrow,
  SelectScrollUpArrow,
  SelectTrigger,
  SelectValue,
} from "@/registry/sector23/ui/select";

const countries = [
  { label: "Canada", value: "CA" },
  { label: "Mexico", value: "MX" },
  { label: "Japan", value: "JP" },
];

export function SelectInvalid() {
  return (
    <Field name="country" invalid className="w-xs">
      <FieldLabel>Country</FieldLabel>
      <Select items={countries} required>
        <SelectTrigger>
          <SelectValue placeholder="Select a country" />
          <SelectIcon />
        </SelectTrigger>
        <SelectPortal>
          <SelectPositioner>
            <SelectPopup>
              <SelectScrollUpArrow />
              <SelectList>
                {countries.map((country) => (
                  <SelectItem key={country.value} value={country.value}>
                    <SelectItemText>{country.label}</SelectItemText>
                    <SelectItemIndicator />
                  </SelectItem>
                ))}
              </SelectList>
              <SelectScrollDownArrow />
            </SelectPopup>
          </SelectPositioner>
        </SelectPortal>
      </Select>
    </Field>
  );
}
