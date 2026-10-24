import { tv, type VariantProps } from "tailwind-variants";

const autocomplete = tv({
  slots: {
    control: "flex flex-col gap-1.5",
    inputGroup: [
      "group relative flex w-full cursor-text items-center rounded-md",
      "data-disabled:pointer-events-none data-disabled:opacity-50",
      "data-readonly:cursor-default data-readonly:opacity-60",
    ],
    input: [
      "flex w-full items-center rounded-md border border-input bg-background font-normal text-foreground shadow-sm transition-all duration-150 ease-default outline-none",
      "placeholder:text-muted-foreground",
      "focus-visible:ring-2 focus-visible:ring-ring",
      "not-in-data-[slot='autocomplete-input-group']:data-disabled:opacity-50",
      "data-invalid:border-destructive/50",
      "focus-visible:data-invalid:ring-destructive",
      "data-readonly:cursor-default",
      "not-in-data-[slot='autocomplete-input-group']:data-readonly:opacity-60",
      "dark:bg-input/15",
    ],
    inputGroupActions: [
      "absolute bottom-0 flex h-full items-center justify-center text-muted-foreground",
    ],
    trigger: [
      "flex shrink-0 cursor-default items-center justify-center rounded-md p-0.5 transition-colors duration-150 ease-default",
      "group-has-[[data-slot='autocomplete-clear'][data-visible]]:hidden",
      "hover:bg-accent hover:text-accent-foreground",
      "data-popup-open:bg-accent/80 data-popup-open:text-accent-foreground",
      "data-readonly:pointer-events-none",
    ],
    icon: "[&>svg]:shrink-0",
    clear: [
      "invisible flex shrink-0 items-center justify-center rounded-md p-0.5 transition-colors duration-150 ease-default",
      "group-data-readonly:pointer-events-none",
      "hover:not-data-disabled:bg-accent hover:not-data-disabled:text-accent-foreground",
      "data-disabled:not-in-data-disabled:opacity-50",
      "data-visible:visible",
      "[&>svg]:shrink-0",
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
      "flex items-center py-2 text-muted-foreground",
      "[&>svg]:shrink-0",
    ],
    empty: "",
    emptyContent: "py-2 text-muted-foreground",
    list: "p-1.5 data-empty:p-0",
    row: "grid",
    item: [
      "flex items-center rounded-md outline-none select-none",
      "data-disabled:opacity-50",
      "data-highlighted:bg-accent data-highlighted:text-accent-foreground",
      "[&_svg]:shrink-0",
    ],
    separator: [
      "self-stretch bg-border",
      "data-[orientation=horizontal]:my-1 data-[orientation=horizontal]:h-px",
      "data-[orientation=vertical]:mx-1 data-[orientation=vertical]:w-px",
    ],
    group: "flex flex-col not-last:mb-1",
    groupLabel: [
      "sticky top-0 mb-0.5 flex items-center bg-popover font-medium text-muted-foreground",
    ],
  },
  variants: {
    size: {
      lg: {
        input: [
          "h-10 px-3 text-base",
          "in-data-[slot='autocomplete-input-group']:group-has-[[data-slot='autocomplete-clear'],[data-slot='autocomplete-trigger']]:pe-11",
        ],
        inputGroupActions: "inset-e-3",
        icon: "[&>svg:not([class*='size-'])]:size-4",
        clear: "[&>svg:not([class*='size-'])]:size-4",
        statusContent: [
          "gap-3 px-4.5 text-base",
          "[&>svg:not([class*='size-'])]:size-4",
        ],
        emptyContent: "px-4.5 text-base",
        item: "min-h-10 gap-3 px-3 text-base [&_svg:not([class*='size-'])]:size-4",
        groupLabel: "h-7 px-3 text-sm",
      },
      md: {
        input: [
          "h-9 px-2.75 text-sm",
          "in-data-[slot='autocomplete-input-group']:group-has-[[data-slot='autocomplete-clear'],[data-slot='autocomplete-trigger']]:pe-10",
        ],
        inputGroupActions: "inset-e-2.75",
        icon: "[&>svg:not([class*='size-'])]:size-3.5",
        clear: "[&>svg:not([class*='size-'])]:size-3.5",
        statusContent: [
          "gap-2.5 px-4.25 text-sm",
          "[&>svg:not([class*='size-'])]:size-3.5",
        ],
        emptyContent: "px-4.25 text-sm",
        item: "min-h-9 gap-2.5 px-2.75 text-sm [&_svg:not([class*='size-'])]:size-3.5",
        groupLabel: "h-6 px-2.75 text-xs",
      },
      sm: {
        input: [
          "h-8 px-2.5 text-xs",
          "in-data-[slot='autocomplete-input-group']:group-has-[[data-slot='autocomplete-clear'],[data-slot='autocomplete-trigger']]:pe-9",
        ],
        inputGroupActions: "inset-e-2.5",
        icon: "[&>svg:not([class*='size-'])]:size-3",
        clear: "[&>svg:not([class*='size-'])]:size-3",
        statusContent: [
          "gap-2 px-4 text-xs",
          "[&>svg:not([class*='size-'])]:size-3",
        ],
        emptyContent: "px-4 text-xs",
        item: "min-h-8 gap-2 px-2.5 text-xs [&_svg:not([class*='size-'])]:size-3",
        groupLabel: "h-5 px-2.5 text-xs",
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
});

type AutocompleteVariantProps = VariantProps<typeof autocomplete>;

export { autocomplete };
export type { AutocompleteVariantProps };
