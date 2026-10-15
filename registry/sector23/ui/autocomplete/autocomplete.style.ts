import { tv } from "tailwind-variants";

const autocomplete = tv({
  slots: {
    control: "flex flex-col gap-1.5",
    inputGroup: [
      "group relative flex w-full cursor-text items-center rounded-md",
      "data-disabled:pointer-events-none data-disabled:opacity-50",
      "data-readonly:cursor-default data-readonly:opacity-60",
    ],
    input: [
      "flex h-8 w-full rounded-md border border-input bg-background px-2 text-sm font-normal text-foreground shadow-sm transition-all duration-150 ease-default outline-none",
      "placeholder:text-muted-foreground",
      "focus-visible:ring-2 focus-visible:ring-ring/50",
      "in-data-[slot='autocomplete-input-group']:group-has-[[data-slot='autocomplete-clear'],[data-slot='autocomplete-trigger']]:pe-9",
      "not-in-data-[slot='autocomplete-input-group']:data-disabled:opacity-50",
      "data-invalid:border-destructive/50",
      "focus-visible:data-invalid:ring-destructive/50",
      "data-readonly:cursor-default",
      "not-in-data-[slot='autocomplete-input-group']:data-readonly:opacity-60",
      "dark:bg-input/15",
    ],
    inputGroupActions: [
      "absolute inset-e-2 bottom-0 flex h-full items-center justify-center text-muted-foreground",
    ],
    trigger: [
      "flex cursor-default items-center justify-center rounded-md p-0.5 transition-colors duration-150 ease-default",
      "group-has-[[data-slot='autocomplete-clear'][data-visible]]:hidden",
      "hover:bg-accent hover:text-accent-foreground",
      "data-readonly:pointer-events-none",
    ],
    icon: "[&>svg]:size-4 [&>svg]:shrink-0",
    clear: [
      "invisible flex items-center justify-center rounded-md p-0.5 transition-colors duration-150 ease-default",
      "group-data-readonly:pointer-events-none",
      "hover:bg-accent hover:text-accent-foreground",
      "data-visible:visible",
      "[&>svg]:size-4 [&>svg]:shrink-0",
    ],
    portal: "",
    backdrop: "",
    positioner: "outline-none",
    // Default Popup transition does not work as intended as with other popups. So we have omitted the transition classes.
    popup: [
      "w-(--anchor-width) max-w-(--available-width) rounded-md border border-border bg-popover text-popover-foreground shadow-md outline-none",
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
      "data-highlighted:bg-accent data-highlighted:text-accent-foreground",
    ],
    separator: "",
    group: "",
    groupLabel: "",
  },
});

export { autocomplete };
