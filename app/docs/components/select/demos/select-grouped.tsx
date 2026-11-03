import { Fragment } from "react";

import {
  Select,
  SelectGroup,
  SelectGroupLabel,
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
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/registry/sector23/ui/select";

interface ProduceItem {
  value: string;
  label: string;
}

interface ProduceGroup {
  value: string;
  items: ProduceItem[];
}

const groupedProduce = [
  {
    value: "Fruits",
    items: [
      { value: "apple", label: "Apple" },
      { value: "banana", label: "Banana" },
      { value: "orange", label: "Orange" },
    ],
  },
  {
    value: "Vegetables",
    items: [
      { value: "carrot", label: "Carrot" },
      { value: "lettuce", label: "Lettuce" },
      { value: "spinach", label: "Spinach" },
    ],
  },
] satisfies ProduceGroup[];

export function SelectGrouped() {
  return (
    <div className="flex w-xs flex-col items-start gap-1.5">
      <Select items={groupedProduce} name="produce">
        <SelectLabel>Produce</SelectLabel>
        <SelectTrigger>
          <SelectValue placeholder="Select produce" />
          <SelectIcon />
        </SelectTrigger>
        <SelectPortal>
          <SelectPositioner>
            <SelectPopup>
              <SelectScrollUpArrow />
              <SelectList>
                {groupedProduce.map((group, index) => (
                  <Fragment key={group.value}>
                    {index > 0 && <SelectSeparator />}
                    <SelectGroup>
                      <SelectGroupLabel>{group.value}</SelectGroupLabel>
                      {group.items.map((item) => (
                        <SelectItem key={item.value} value={item.value}>
                          <SelectItemText>{item.label}</SelectItemText>
                          <SelectItemIndicator />
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </Fragment>
                ))}
              </SelectList>
              <SelectScrollDownArrow />
            </SelectPopup>
          </SelectPositioner>
        </SelectPortal>
      </Select>
    </div>
  );
}
