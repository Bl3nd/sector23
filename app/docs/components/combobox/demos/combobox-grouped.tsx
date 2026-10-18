// oxlint-disable no-magic-numbers
"use client";

import { Fragment, useId } from "react";

import {
  Combobox,
  ComboboxClear,
  ComboboxCollection,
  ComboboxControl,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxGroupLabel,
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
  ComboboxSeparator,
  ComboboxTrigger,
} from "@/registry/sector23/ui/combobox";
import { Label } from "@/registry/sector23/ui/label";
import {
  ScrollArea,
  ScrollAreaContent,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaViewport,
} from "@/registry/sector23/ui/scroll-area";

interface TimeZone {
  value: string;
  label: string;
  offset: string;
}

interface TimeZoneGroup {
  value: string;
  items: TimeZone[];
}

const timeZoneGroups: TimeZoneGroup[] = [
  {
    value: "Americas",
    items: [
      { value: "America/Los_Angeles", label: "Los Angeles", offset: "UTC−8" },
      { value: "America/Denver", label: "Denver", offset: "UTC−7" },
      { value: "America/Chicago", label: "Chicago", offset: "UTC−6" },
      { value: "America/New_York", label: "New York", offset: "UTC−5" },
      { value: "America/Sao_Paulo", label: "São Paulo", offset: "UTC−3" },
    ],
  },
  {
    value: "Europe & Africa",
    items: [
      { value: "Europe/London", label: "London", offset: "UTC+0" },
      { value: "Europe/Paris", label: "Paris", offset: "UTC+1" },
      { value: "Europe/Berlin", label: "Berlin", offset: "UTC+1" },
      { value: "Africa/Johannesburg", label: "Johannesburg", offset: "UTC+2" },
      { value: "Africa/Nairobi", label: "Nairobi", offset: "UTC+3" },
    ],
  },
  {
    value: "Asia & Pacific",
    items: [
      { value: "Asia/Dubai", label: "Dubai", offset: "UTC+4" },
      { value: "Asia/Kolkata", label: "Mumbai", offset: "UTC+5:30" },
      { value: "Asia/Singapore", label: "Singapore", offset: "UTC+8" },
      { value: "Asia/Tokyo", label: "Tokyo", offset: "UTC+9" },
      { value: "Australia/Sydney", label: "Sydney", offset: "UTC+10" },
    ],
  },
];

export function ComboboxGrouped() {
  const id = useId();

  return (
    <Combobox<TimeZone>
      items={timeZoneGroups}
      itemToStringLabel={(timeZone) => timeZone.label}
      itemToStringValue={(timeZone) => timeZone.value}
      name="timeZone"
    >
      <ComboboxControl className="w-full max-w-64">
        <Label htmlFor={id}>Time zone</Label>
        <ComboboxInputGroup>
          <ComboboxInput placeholder="e.g. Tokyo" id={id} />
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
            <ScrollArea className="max-h-[min(19.5rem,calc(100dvh-3rem))]">
              <ScrollAreaViewport>
                <ScrollAreaContent className="p-0 pe-1.5">
                  <ComboboxEmpty>No time zones found.</ComboboxEmpty>
                  <ComboboxList>
                    {(group: TimeZoneGroup, index: number) => (
                      <Fragment key={group.value}>
                        {index > 0 && <ComboboxSeparator />}
                        <ComboboxGroup items={group.items}>
                          <ComboboxGroupLabel>{group.value}</ComboboxGroupLabel>
                          <ComboboxCollection>
                            {(timeZone: TimeZone) => (
                              <ComboboxItem
                                key={timeZone.value}
                                value={timeZone}
                              >
                                <span className="flex-1">{timeZone.label}</span>
                                <span className="text-xs text-muted-foreground tabular-nums">
                                  {timeZone.offset}
                                </span>
                                <ComboboxItemIndicator />
                              </ComboboxItem>
                            )}
                          </ComboboxCollection>
                        </ComboboxGroup>
                      </Fragment>
                    )}
                  </ComboboxList>
                </ScrollAreaContent>
              </ScrollAreaViewport>
              <ScrollAreaScrollbar>
                <ScrollAreaThumb />
              </ScrollAreaScrollbar>
            </ScrollArea>
          </ComboboxPopup>
        </ComboboxPositioner>
      </ComboboxPortal>
    </Combobox>
  );
}
