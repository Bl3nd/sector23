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

const fonts = [
  { label: "Sans-serif", value: "sans" },
  { label: "Serif", value: "serif" },
  { label: "Monospace", value: "mono" },
];

export function SelectReadonly() {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <div className="flex w-xs flex-col items-start gap-1.5">
        <Select items={fonts} defaultValue="serif" name="font" readOnly>
          <SelectLabel>Font</SelectLabel>
          <SelectTrigger>
            <SelectValue />
            <SelectIcon />
          </SelectTrigger>
          <SelectPortal>
            <SelectPositioner>
              <SelectPopup>
                <SelectScrollUpArrow />
                <SelectList>
                  {fonts.map((font) => (
                    <SelectItem key={font.value} value={font.value}>
                      <SelectItemText>{font.label}</SelectItemText>
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
