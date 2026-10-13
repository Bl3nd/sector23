import { tv } from "tailwind-variants";

/*
Slots and their data-attributes and css variables:
root: data-checked/data-unchecked/data-disabled/data-readonly/data-required/data-valid/data-invalid/data-dirty/data-touched/data-filled/data-focused/data-indeterminate
indicator: data-checked/data-unchecked/data-disabled/data-readonly/data-required/data-valid/data-invalid/data-dirty/data-touched/data-filled/data-focused/data-indeterminate/data-starting-style/data-ending-style
*/

const checkbox = tv({
  slots: {
    root: [
      "flex size-4 shrink-0 items-center justify-center rounded-sm border border-input bg-background shadow-sm transition-all duration-150 ease-default outline-none",
      "focus-visible:ring-2 focus-visible:ring-ring/50",
      "data-checked:bg-primary data-checked:text-primary-foreground",
      "data-disabled:pointer-events-none data-disabled:opacity-50",
      "data-invalid:border-destructive/50",
      "data-readonly:pointer-events-none data-readonly:opacity-60",
      "focus-visible:data-invalid:ring-destructive/50",
      "dark:bg-input/15",
      "dark:data-checked:bg-primary dark:data-checked:text-primary-foreground",
    ],
    indicator: [
      "flex items-center justify-center transition-[scale,opacity] duration-300 ease-default",
      "data-ending-style:scale-95 data-ending-style:opacity-0",
      "data-starting-style:scale-95 data-starting-style:opacity-0",
      "data-unchecked:hidden",
      "[&>svg]:size-3 [&>svg]:shrink-0",
    ],
  },
});

export { checkbox };
