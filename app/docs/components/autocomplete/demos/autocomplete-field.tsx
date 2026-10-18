"use client";

import {
  Autocomplete,
  AutocompleteClear,
  AutocompleteControl,
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
import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/registry/sector23/ui/field";

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

export function AutocompleteField() {
  return (
    <Field name="tags" invalid className="max-w-52">
      <Autocomplete items={tags} required mode="both">
        <AutocompleteControl>
          <FieldLabel>Tags</FieldLabel>
          <AutocompleteInputGroup>
            <AutocompleteInput placeholder="e.g. feature" />
            <AutocompleteInputGroupActions>
              <AutocompleteClear />
              <AutocompleteTrigger>
                <AutocompleteIcon />
              </AutocompleteTrigger>
            </AutocompleteInputGroupActions>
          </AutocompleteInputGroup>
        </AutocompleteControl>
        <FieldDescription>Select tags to use</FieldDescription>

        <AutocompletePortal>
          <AutocompletePositioner>
            <AutocompletePopup>
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
    </Field>
  );
}
