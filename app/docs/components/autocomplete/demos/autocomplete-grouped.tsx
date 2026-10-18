// oxlint-disable no-magic-numbers
"use client";

import { Fragment, useId } from "react";

import {
  Autocomplete,
  AutocompleteClear,
  AutocompleteCollection,
  AutocompleteControl,
  AutocompleteEmpty,
  AutocompleteGroup,
  AutocompleteGroupLabel,
  AutocompleteIcon,
  AutocompleteInput,
  AutocompleteInputGroup,
  AutocompleteInputGroupActions,
  AutocompleteItem,
  AutocompleteList,
  AutocompletePopup,
  AutocompletePortal,
  AutocompletePositioner,
  AutocompleteSeparator,
  AutocompleteStatus,
  AutocompleteTrigger,
  useAutocompleteFilteredItems,
} from "@/registry/sector23/ui/autocomplete";
import { Label } from "@/registry/sector23/ui/label";
import {
  ScrollArea,
  ScrollAreaContent,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaViewport,
} from "@/registry/sector23/ui/scroll-area";

interface Tag {
  id: string;
  value: string;
}

interface TagGroup {
  value: string;
  items: Tag[];
}

const tagGroups: TagGroup[] = [
  {
    value: "Type",
    items: [
      { id: "t1", value: "feature" },
      { id: "t2", value: "fix" },
      { id: "t3", value: "bug" },
      { id: "t4", value: "docs" },
    ],
  },
  {
    value: "Area",
    items: [
      { id: "t7", value: "accessibility" },
      { id: "t8", value: "performance" },
      { id: "t9", value: "security" },
      { id: "t10", value: "design" },
    ],
  },
  {
    value: "Scope",
    items: [
      { id: "t5", value: "internal" },
      { id: "t6", value: "mobile" },
    ],
  },
];

function countTags(groups: readonly TagGroup[]) {
  return groups.reduce((count, group) => count + group.items.length, 0);
}

const tagCount = countTags(tagGroups);

function TagMatchStatus() {
  const matchCount = countTags(useAutocompleteFilteredItems<TagGroup>());

  return (
    <AutocompleteStatus show={matchCount > 0}>
      {matchCount} of {tagCount} tags
    </AutocompleteStatus>
  );
}

export function AutocompleteGrouped() {
  const id = useId();

  return (
    <Autocomplete items={tagGroups} itemToStringValue={(tag) => tag.value}>
      <AutocompleteControl>
        <Label htmlFor={id}>Search grouped tags</Label>
        <AutocompleteInputGroup>
          <AutocompleteInput placeholder="e.g. security" id={id} />
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
            <ScrollArea className="h-[min(19.5rem,calc(100dvh-3rem))]">
              <ScrollAreaViewport>
                <ScrollAreaContent className="p-0 pe-1.5">
                  <AutocompleteEmpty>No tags found.</AutocompleteEmpty>
                  <AutocompleteList>
                    {(group: TagGroup, index: number) => (
                      <Fragment key={group.value}>
                        {index > 0 && <AutocompleteSeparator />}
                        <AutocompleteGroup items={group.items}>
                          <AutocompleteGroupLabel>
                            {group.value}
                          </AutocompleteGroupLabel>
                          <AutocompleteCollection>
                            {(tag: Tag) => (
                              <AutocompleteItem key={tag.id} value={tag}>
                                {tag.value}
                              </AutocompleteItem>
                            )}
                          </AutocompleteCollection>
                        </AutocompleteGroup>
                      </Fragment>
                    )}
                  </AutocompleteList>
                </ScrollAreaContent>
              </ScrollAreaViewport>
              <ScrollAreaScrollbar>
                <ScrollAreaThumb />
              </ScrollAreaScrollbar>
            </ScrollArea>
            <TagMatchStatus />
          </AutocompletePopup>
        </AutocompletePositioner>
      </AutocompletePortal>
    </Autocomplete>
  );
}
