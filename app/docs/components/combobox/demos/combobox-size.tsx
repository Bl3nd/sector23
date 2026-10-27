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

function CountryCombobox({
  size,
  label,
}: {
  size: "sm" | "md" | "lg";
  label: string;
}) {
  const id = useId();

  return (
    <Combobox<Country>
      size={size}
      items={countries}
      itemToStringLabel={(country) => country.name}
      itemToStringValue={(country) => country.code}
    >
      <ComboboxControl className="w-44">
        <Label htmlFor={id}>{label}</Label>
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

export function ComboboxSize() {
  return (
    <div className="flex flex-wrap items-end gap-4">
      <CountryCombobox size="sm" label="Small" />
      <CountryCombobox size="md" label="Medium (default)" />
      <CountryCombobox size="lg" label="Large" />
    </div>
  );
}
