// oxlint-disable no-magic-numbers
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
} from "@/app/components/select";

const timezoneGroups = [
  {
    region: "North America",
    timezones: [
      { label: "Pacific Time (UTC−08:00)", value: "America/Los_Angeles" },
      { label: "Mountain Time (UTC−07:00)", value: "America/Denver" },
      { label: "Central Time (UTC−06:00)", value: "America/Chicago" },
      { label: "Eastern Time (UTC−05:00)", value: "America/New_York" },
    ],
  },
  {
    region: "Europe",
    timezones: [
      { label: "Greenwich Mean Time (UTC+00:00)", value: "Europe/London" },
      { label: "Central European Time (UTC+01:00)", value: "Europe/Berlin" },
      { label: "Eastern European Time (UTC+02:00)", value: "Europe/Athens" },
    ],
  },
  {
    region: "Asia Pacific",
    timezones: [
      { label: "India Standard Time (UTC+05:30)", value: "Asia/Kolkata" },
      { label: "China Standard Time (UTC+08:00)", value: "Asia/Shanghai" },
      { label: "Japan Standard Time (UTC+09:00)", value: "Asia/Tokyo" },
      { label: "Australian Eastern Time (UTC+10:00)", value: "Australia/Sydney" },
    ],
  },
];

const timezones = timezoneGroups.flatMap((group) => group.timezones);

export default function Select01() {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <div className="flex w-xs flex-col items-start gap-1.5">
        <Select items={timezones} name="timezone">
          <SelectLabel>Timezone</SelectLabel>
          <SelectTrigger>
            <SelectValue placeholder="Select a timezone" />
            <SelectIcon />
          </SelectTrigger>
          <SelectPortal>
            <SelectPositioner>
              <SelectPopup>
                <SelectScrollUpArrow />
                <SelectList>
                  {timezoneGroups.map((group, index) => (
                    <Fragment key={group.region}>
                      {index > 0 && <SelectSeparator />}
                      <SelectGroup>
                        <SelectGroupLabel>{group.region}</SelectGroupLabel>
                        {group.timezones.map((timezone) => (
                          <SelectItem key={timezone.value} value={timezone.value}>
                            <SelectItemText>{timezone.label}</SelectItemText>
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
    </div>
  );
}
