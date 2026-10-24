"use client";

import { Fragment, useState } from "react";

import {
  Autocomplete,
  AutocompleteCollection,
  AutocompleteEmpty,
  AutocompleteGroup,
  AutocompleteGroupLabel,
  AutocompleteInput,
  AutocompleteItem,
  AutocompleteList,
  AutocompleteSeparator,
} from "@/registry/sector23/ui/autocomplete";
import { Button } from "@/registry/sector23/ui/button";
import {
  Dialog,
  DialogBackdrop,
  DialogClose,
  DialogPopup,
  DialogPortal,
  DialogTrigger,
} from "@/registry/sector23/ui/dialog";
import {
  ScrollArea,
  ScrollAreaContent,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaViewport,
} from "@/registry/sector23/ui/scroll-area";

interface Command {
  id: string;
  label: string;
}

interface CommandGroup {
  value: string;
  items: Command[];
}

const commandGroups: CommandGroup[] = [
  {
    value: "Issues",
    items: [
      { id: "c1", label: "Create issue" },
      { id: "c2", label: "Assign to me" },
      { id: "c3", label: "Change status" },
      { id: "c4", label: "Add tag" },
    ],
  },
  {
    value: "Navigation",
    items: [
      { id: "c5", label: "Go to inbox" },
      { id: "c6", label: "Go to projects" },
      { id: "c7", label: "Go to settings" },
    ],
  },
  {
    value: "View",
    items: [
      { id: "c8", label: "Toggle sidebar" },
      { id: "c9", label: "Toggle dark mode" },
    ],
  },
];

export function AutocompleteCommandPalette() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger render={<Button variant="outline" />}>
        Open command palette
      </DialogTrigger>
      <DialogPortal>
        <DialogBackdrop />
        <DialogPopup aria-label="Command palette">
          <Autocomplete
            open
            inline
            items={commandGroups}
            itemToStringValue={(command) => command.label}
            autoHighlight="always"
            keepHighlight
          >
            <div className="border-b border-border p-2">
              <AutocompleteInput
                aria-label="Search commands"
                placeholder="Search commands"
              />
            </div>
            <DialogClose className="sr-only">Close command palette</DialogClose>

            <ScrollArea className="max-h-[min(19.5rem,calc(100dvh-8rem))]">
              <ScrollAreaViewport>
                <ScrollAreaContent className="p-0 pe-1.5">
                  <AutocompleteEmpty>No commands found.</AutocompleteEmpty>
                  <AutocompleteList>
                    {(group: CommandGroup, index: number) => (
                      <Fragment key={group.value}>
                        {index > 0 && <AutocompleteSeparator />}
                        <AutocompleteGroup items={group.items}>
                          <AutocompleteGroupLabel>
                            {group.value}
                          </AutocompleteGroupLabel>
                          <AutocompleteCollection>
                            {(command: Command) => (
                              <AutocompleteItem
                                key={command.id}
                                value={command}
                                onClick={() => setOpen(false)}
                              >
                                {command.label}
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
          </Autocomplete>
        </DialogPopup>
      </DialogPortal>
    </Dialog>
  );
}
