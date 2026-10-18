"use client";

import { useId } from "react";

import {
  Combobox,
  ComboboxClear,
  ComboboxControl,
  ComboboxEmpty,
  ComboboxIcon,
  ComboboxInput,
  ComboboxInputGroup,
  ComboboxInputGroupActions,
  ComboboxItem,
  ComboboxItemIndicator,
  ComboboxList,
  ComboboxPopup,
  ComboboxPortal,
  ComboboxPositioner,
  ComboboxTrigger,
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

export function ComboboxDisabledItem() {
  const id = useId();

  return (
    <Combobox<Country>
      items={countries}
      itemToStringLabel={(country) => country.name}
      itemToStringValue={(country) => country.code}
      name="country"
    >
      <ComboboxControl className="w-full max-w-64">
        <Label htmlFor={id}>Shipping country</Label>
        <ComboboxInputGroup>
          <ComboboxInput placeholder="e.g. Canada" id={id} />
          <ComboboxInputGroupActions>
            <ComboboxClear />
            <ComboboxTrigger>
              <ComboboxIcon />
            </ComboboxTrigger>
          </ComboboxInputGroupActions>
        </ComboboxInputGroup>
      </ComboboxControl>

      <ComboboxPortal>
        <ComboboxPositioner>
          <ComboboxPopup>
            <ComboboxEmpty>
              We don&apos;t ship to that country yet.
            </ComboboxEmpty>
            <ComboboxList>
              {(country: Country) => (
                <ComboboxItem
                  key={country.code}
                  value={country}
                  disabled={country.code === "BR"}
                >
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
