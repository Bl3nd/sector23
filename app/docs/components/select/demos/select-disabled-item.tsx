import {
  Select,
  SelectIcon,
  SelectItem,
  SelectItemIndicator,
  SelectItemText,
  SelectLabel,
  SelectList,
  SelectPopup,
  SelectPortal,
  SelectPositioner,
  SelectScrollDownArrow,
  SelectScrollUpArrow,
  SelectTrigger,
  SelectValue,
} from "@/registry/sector23/ui/select";

const apples = [
  { label: "Gala", value: "gala" },
  { label: "Fuji", value: "fuji" },
  { label: "Honeycrisp", value: "honeycrisp" },
  { label: "Granny Smith", value: "granny-smith" },
];

export function SelectDisabledItem() {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <div className="flex w-xs flex-col items-start gap-1.5">
        <Select items={apples} name="apple">
          <SelectLabel>Apple</SelectLabel>
          <SelectTrigger>
            <SelectValue placeholder="Select an apple" />
            <SelectIcon />
          </SelectTrigger>
          <SelectPortal>
            <SelectPositioner>
              <SelectPopup>
                <SelectScrollUpArrow />
                <SelectList>
                  {apples.map((apple) => (
                    <SelectItem
                      key={apple.value}
                      value={apple.value}
                      disabled={apple.value === "honeycrisp"}
                    >
                      <SelectItemText>{apple.label}</SelectItemText>
                      <SelectItemIndicator />
                    </SelectItem>
                  ))}
                </SelectList>
                <SelectScrollDownArrow />
              </SelectPopup>
            </SelectPositioner>
          </SelectPortal>
        </Select>
      </div>
    </div>
  );
}
