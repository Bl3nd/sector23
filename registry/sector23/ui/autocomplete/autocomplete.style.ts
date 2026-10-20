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
      "flex h-9 w-full items-center rounded-md border border-input bg-background px-2 text-sm font-normal text-foreground shadow-sm transition-all duration-150 ease-default outline-none",
      "placeholder:text-muted-foreground",
      "focus-visible:ring-2 focus-visible:ring-ring",
      "in-data-[slot='autocomplete-input-group']:group-has-[[data-slot='autocomplete-clear'],[data-slot='autocomplete-trigger']]:pe-9",
      "not-in-data-[slot='autocomplete-input-group']:data-disabled:opacity-50",
      "data-invalid:border-destructive/50",
      "focus-visible:data-invalid:ring-destructive",
      "data-readonly:cursor-default",
      "not-in-data-[slot='autocomplete-input-group']:data-readonly:opacity-60",

      "dark:bg-input/15",
    ],
    inputGroupActions: [
      "absolute inset-e-2 bottom-0 flex h-full items-center justify-center text-muted-foreground",
    ],
    trigger: [
      "flex shrink-0 cursor-default items-center justify-center rounded-md p-0.5 transition-colors duration-150 ease-default",
      "group-has-[[data-slot='autocomplete-clear'][data-visible]]:hidden",
      "hover:bg-accent hover:text-accent-foreground",
      "data-popup-open:bg-accent/80 data-popup-open:text-accent-foreground",
      "data-readonly:pointer-events-none",
    ],
    icon: "[&>svg]:size-4 [&>svg]:shrink-0",
    clear: [
      "invisible flex shrink-0 items-center justify-center rounded-md p-0.5 transition-colors duration-150 ease-default",
      "group-data-readonly:pointer-events-none",
      "hover:not-data-disabled:bg-accent hover:not-data-disabled:text-accent-foreground",
      "data-disabled:not-in-data-disabled:opacity-50",
      "data-visible:visible",
      "[&>svg]:size-4 [&>svg]:shrink-0",
    ],
    portal: "",
    backdrop: "",
    positioner: "outline-none",
    popup: [
      "relative max-w-(--available-width) min-w-(--anchor-width) origin-(--transform-origin) rounded-md border border-border bg-popover text-popover-foreground shadow-lg outline-none",
    ],
    arrow: [
      "relative block h-1.5 w-3 overflow-clip",
      "before:absolute before:bottom-0 before:left-1/2 before:h-[calc(6px*sqrt(2))] before:w-[calc(6px*sqrt(2))] before:transform-[translate(-50%,50%)_rotate(45deg)] before:border before:border-border before:bg-popover before:content-['']",
      "data-[side=bottom]:-top-1.5",
      "data-[side=inline-end]:-inset-s-2.25",
      "data-[side=inline-start]:-inset-e-2.25",
      "data-[side=left]:-right-2.25",
      "data-[side=right]:-left-2.25",
      "data-[side=top]:-bottom-1.5 data-[side=top]:rotate-180",
      "[[data-side='left'],[data-side='inline-start']]:rotate-90",
      "[[data-side='right'],[data-side='inline-end']]:-rotate-90",
    ],
    status: "",
    statusContent: [
      "px-3.5 py-2 text-sm text-muted-foreground",
      "[&>svg]:size-4 [&>svg]:shrink-0",
    ],
    empty: "",
    emptyContent: "px-3.5 py-2 text-sm text-muted-foreground",
    list: "p-1.5 data-empty:p-0",
    row: "grid",
    item: [
      "flex min-h-9 items-center gap-2 rounded-md px-2 text-sm outline-none select-none",
      "data-disabled:opacity-50",
      "data-highlighted:bg-accent data-highlighted:text-accent-foreground",
      "[&_svg]:size-4 [&_svg]:shrink-0",
    ],
    separator: [
      "self-stretch bg-border",
      "data-[orientation=horizontal]:my-1 data-[orientation=horizontal]:h-px",
      "data-[orientation=vertical]:mx-1 data-[orientation=vertical]:w-px",
    ],
    group: "flex flex-col not-last:mb-1",
    groupLabel: [
      "sticky top-0 mb-0.5 flex h-6 items-center bg-popover px-2 text-xs font-medium text-muted-foreground",
    ],
  },
});

export { autocomplete };
