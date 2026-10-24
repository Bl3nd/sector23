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

function TagAutocomplete({
  size,
  label,
}: {
  size: "sm" | "md" | "lg";
  label: string;
}) {
  const id = useId();

  return (
    <Autocomplete
      size={size}
      items={tags}
      itemToStringValue={(tag) => tag.value}
    >
      <AutocompleteControl className="w-44">
        <Label htmlFor={id}>{label}</Label>
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

export function AutocompleteSize() {
  return (
    <div className="flex flex-wrap items-end gap-4">
      <TagAutocomplete size="sm" label="Small" />
      <TagAutocomplete size="md" label="Medium (default)" />
      <TagAutocomplete size="lg" label="Large" />
    </div>
  );
}
