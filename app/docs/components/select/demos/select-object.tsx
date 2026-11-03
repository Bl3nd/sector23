"use client";

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

interface ShippingMethod {
  id: string;
  name: string;
  duration: string;
  price: string;
}

const standardShipping: ShippingMethod = {
  id: "standard",
  name: "Standard",
  duration: "Delivers in 4-6 business days",
  price: "$4.99",
};

const shippingMethods: ShippingMethod[] = [
  standardShipping,
  {
    id: "express",
    name: "Express",
    duration: "Delivers in 2-3 business days",
    price: "$9.99",
  },
  {
    id: "overnight",
    name: "Overnight",
    duration: "Delivers next business day",
    price: "$19.99",
  },
];

export function SelectObject() {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <div className="flex w-xs flex-col items-start gap-1.5">
        <Select
          defaultValue={standardShipping}
          itemToStringValue={(method) => method.id}
          isItemEqualToValue={(item, value) => item.id === value.id}
          name="shipping"
        >
          <SelectLabel>Shipping method</SelectLabel>
          <SelectTrigger className="h-auto py-1.5 whitespace-normal">
            <SelectValue>
              {(method: ShippingMethod | null) =>
                method ? (
                  <span className="flex flex-col items-start gap-0.5">
                    <span>{method.name}</span>
                    <span className="text-xs text-muted-foreground">
                      {method.duration} ({method.price})
                    </span>
                  </span>
                ) : (
                  "Select a shipping method"
                )
              }
            </SelectValue>
            <SelectIcon />
          </SelectTrigger>
          <SelectPortal>
            <SelectPositioner>
              <SelectPopup>
                <SelectScrollUpArrow />
                <SelectList>
                  {shippingMethods.map((method) => (
                    <SelectItem
                      key={method.id}
                      value={method}
                      className="items-start"
                    >
                      <SelectItemText className="flex flex-col gap-0.5 py-1.5">
                        <span>{method.name}</span>
                        <span className="text-xs text-muted-foreground in-data-highlighted:text-accent-foreground">
                          {method.duration} ({method.price})
                        </span>
                      </SelectItemText>
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
