import { tv } from "tailwind-variants";

const combobox = tv({
  slots: {
    label: "",
    control: "flex flex-col gap-1.5",
    inputGroup: [
      "group relative flex h-8 w-full cursor-text rounded-md border border-input bg-background shadow-sm transition-all duration-150 ease-default",
      "focus-within:ring-2 focus-within:ring-ring/50 data-disabled:pointer-events-none",
      "dark:bg-input/15",
    ],
    input: [
      "flex size-full ps-2 text-sm text-foreground outline-none in-data-[slot='combobox-input-group']:group-has-data-[slot='combobox-trigger']:pe-9 in-data-[slot='combobox-input-group']:group-has-data-[slot='combobox-trigger']:group-has-data-[slot='combobox-clear']:pe-16",
      "placeholder:text-muted-foreground",
      "data-disabled:opacity-50",
    ],
    inputGroupActions: [
      "absolute inset-e-2 bottom-0 flex h-full items-center justify-center gap-2 text-muted-foreground",
    ],
    trigger: [
      "flex cursor-default items-center justify-center rounded-md p-0.5 transition-colors duration-150 ease-default",
      "hover:bg-accent hover:text-accent-foreground",
      "data-disabled:pointer-events-none data-disabled:opacity-50",
    ],
    icon: "[&>svg]:size-4 [&>svg]:shrink-0",
    clear: [
      "invisible flex items-center justify-center rounded-md p-0.5 transition-colors duration-150 ease-default",
      "hover:bg-accent hover:text-accent-foreground",
      "data-disabled:pointer-events-none data-disabled:opacity-50",
      "data-visible:visible",
      "[&>svg]:size-4 [&>svg]:shrink-0",
    ],
    chips: "",
    chip: "",
    chipRemove: "",
    portal: "",
    backdrop: "",
    positioner: "outline-none",
    popup: [
      "w-(--anchor-width) max-w-(--available-width) origin-(--transform-origin) rounded-lg border border-border bg-popover text-popover-foreground shadow-md transition-[scale,opacity] duration-300 ease-default",
      "data-ending-style:scale-95 data-ending-style:opacity-0",
      "data-starting-style:scale-95 data-starting-style:opacity-0",
    ],
    arrow: "",
    status: "",
    statusContent: "",
    empty: "",
    emptyContent: "px-3.5 py-3 text-sm text-muted-foreground",
    list: "p-1.5 data-empty:p-0",
    row: "",
    item: [
      "flex min-h-8 items-center gap-2 rounded-md px-2 text-sm outline-none select-none",
      "data-disabled:opacity-50",
      "data-highlighted:relative data-highlighted:z-0 data-highlighted:text-accent-foreground",
      "data-highlighted:before:absolute data-highlighted:before:inset-0 data-highlighted:before:z-[-1] data-highlighted:before:rounded-md data-highlighted:before:bg-accent data-highlighted:before:content-['']",
    ],
    itemIndicator: "ms-auto [&>svg]:size-4 [&>svg]:shrink-0",
    separator: "",
    group: "",
    groupLabel: "",
  },
});

export { combobox };
