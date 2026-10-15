"use client";

import {
  Combobox,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxItemIndicator,
  ComboboxList,
  ComboboxPopup,
  ComboboxPortal,
  ComboboxPositioner,
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

export function ComboboxInputDemo() {
  return (
    <Combobox<Country>
      items={countries}
      itemToStringLabel={(country) => country.name}
      itemToStringValue={(country) => country.code}
    >
      <Label className="flex w-full max-w-52 flex-col gap-1.5">
        Shipping country
        <ComboboxInput placeholder="e.g. Mexico" />
      </Label>

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
