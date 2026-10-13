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
} from "@/registry/sector23/ui/autocomplete";
import { Label } from "@/registry/sector23/ui/label";

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

export function AutocompleteDefault() {
  const id = useId();

  return (
    <Autocomplete items={tags} itemToStringValue={(tag) => tag.value}>
      <AutocompleteControl>
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
  );
}
