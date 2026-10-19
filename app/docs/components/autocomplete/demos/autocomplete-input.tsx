"use client";

import {
  Autocomplete,
  AutocompleteEmpty,
  AutocompleteInput,
  AutocompleteItem,
  AutocompleteList,
  AutocompletePopup,
  AutocompletePortal,
  AutocompletePositioner,
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

export function AutocompleteInputDemo() {
  return (
    <Autocomplete items={tags} itemToStringValue={(tag) => tag.value}>
      <Label className="flex w-full max-w-50 flex-col gap-1.5">
        Search tags
        <AutocompleteInput placeholder="e.g. feature" />
      </Label>

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
