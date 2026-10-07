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
} from "@/app/components/combobox";
import { Label } from "@/app/components/label";

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

export default function ComboboxPage() {
  const id = useId();

  return (
    <div className="flex flex-col items-center justify-center py-10">
      <Combobox
        items={countries}
        itemToStringLabel={(country) => country.name}
        itemToStringValue={(country) => country.code}
        name="country"
      >
        <ComboboxControl className="w-full max-w-xs">
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
              <ComboboxEmpty>We don&apos;t ship to that country yet.</ComboboxEmpty>
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
    </div>
  );
}
