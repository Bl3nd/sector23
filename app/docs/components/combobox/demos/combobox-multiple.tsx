// oxlint-disable no-magic-numbers
"use client";

import { useId } from "react";

import {
  Combobox,
  ComboboxChip,
  ComboboxChipRemove,
  ComboboxChips,
  ComboboxControl,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxInputGroup,
  ComboboxItem,
  ComboboxItemIndicator,
  ComboboxList,
  ComboboxPopup,
  ComboboxPortal,
  ComboboxPositioner,
  ComboboxValue,
} from "@/registry/sector23/ui/combobox";
import { Label } from "@/registry/sector23/ui/label";

interface Country {
  code: string;
  name: string;
}

const countries: Country[] = [
  { code: "AU", name: "Australia" },
  { code: "BR", name: "Brazil" },
  { code: "CA", name: "Canada" },
  { code: "DE", name: "Germany" },
  { code: "FR", name: "France" },
  { code: "IN", name: "India" },
  { code: "JP", name: "Japan" },
  { code: "MX", name: "Mexico" },
  { code: "GB", name: "United Kingdom" },
  { code: "US", name: "United States" },
];

export function ComboboxMultiple() {
  const id = useId();
  return (
    <Combobox items={countries} multiple>
      <ComboboxControl className="w-full max-w-xs">
        <Label htmlFor={id}>Shipping countries</Label>
        <ComboboxInputGroup>
          <ComboboxValue>
            {(value: Country[]) => (
              <ComboboxChips
                aria-label={value.length > 0 ? "Selected countries" : undefined}
              >
                {value.map((country) => (
                  <ComboboxChip
                    key={country.code}
                    aria-label={country.name}
                    aria-description="Press Backspace or Delete to remove"
                  >
                    {country.name}
                    <ComboboxChipRemove aria-label={`Remove ${country.name}`} />
                  </ComboboxChip>
                ))}
                <ComboboxInput
                  id={id}
                  placeholder={value.length > 0 ? "" : "e.g. United States"}
                  aria-description={
                    value.length > 0
                      ? `${value.length} selected. From the start of the input, press Left Arrow to focus the selected items`
                      : undefined
                  }
                />
              </ComboboxChips>
            )}
          </ComboboxValue>
        </ComboboxInputGroup>
      </ComboboxControl>

      <ComboboxPortal>
        <ComboboxPositioner>
          <ComboboxPopup>
            <ComboboxEmpty>No countries found.</ComboboxEmpty>
            <ComboboxList>
              {(country: Country) => (
                <ComboboxItem key={country.code} value={country}>
                  {country.name}
                  <ComboboxItemIndicator />
                </ComboboxItem>
              )}
            </ComboboxList>
          </ComboboxPopup>
        </ComboboxPositioner>
      </ComboboxPortal>
    </Combobox>
  );
}
