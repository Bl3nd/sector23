"use client";

import { useId } from "react";

import {
  Autocomplete,
  AutocompleteClear,
  AutocompleteControl,
  AutocompleteEmpty,
  AutocompleteIcon,
  AutocompleteInput,
  AutocompleteInputGroup,
  AutocompleteInputGroupActions,
  AutocompleteItem,
  AutocompleteList,
  AutocompletePopup,
  AutocompletePortal,
  AutocompletePositioner,
  AutocompleteTrigger,
} from "@/app/components/autocomplete";
import { Label } from "@/app/components/label";

interface Tag {
  id: string;
  value: string;
}

const tags: Tag[] = [
  { id: "t1", value: "feature" },
  { id: "t2", value: "fix" },
  { id: "t3", value: "bug" },
  { id: "t4", value: "docs" },
  { id: "t5", value: "internal" },
  { id: "t6", value: "mobile" },
  { id: "t7", value: "accessibility" },
  { id: "t8", value: "performance" },
  { id: "t9", value: "security" },
  { id: "t10", value: "design" },
];

export default function AutocompletePage() {
  const id = useId();

  return (
    <div className="flex flex-col items-center justify-center py-10">
      <Autocomplete items={tags} itemToStringValue={(tag) => tag.value}>
        <AutocompleteControl className="w-full max-w-xs">
          <Label htmlFor={id}>Search tags</Label>
          <AutocompleteInputGroup>
            <AutocompleteInput placeholder="e.g. feature" id={id} />
            <AutocompleteInputGroupActions>
              <AutocompleteClear />
              <AutocompleteTrigger>
                <AutocompleteIcon />
              </AutocompleteTrigger>
            </AutocompleteInputGroupActions>
          </AutocompleteInputGroup>
        </AutocompleteControl>

        <AutocompletePortal>
          <AutocompletePositioner>
            <AutocompletePopup>
              <AutocompleteEmpty>No tags found.</AutocompleteEmpty>
              <AutocompleteList>
                {(tag: Tag) => (
                  <AutocompleteItem key={tag.id} value={tag}>
                    {tag.value}
                  </AutocompleteItem>
                )}
              </AutocompleteList>
            </AutocompletePopup>
          </AutocompletePositioner>
        </AutocompletePortal>
      </Autocomplete>
    </div>
  );
}
