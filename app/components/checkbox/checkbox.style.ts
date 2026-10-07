import { tv } from "tailwind-variants";

const checkbox = tv({
  slots: {
    root: [
      "flex size-4 shrink-0 items-center justify-center rounded-sm border border-border bg-background transition-all duration-150 ease-default outline-none",
      "focus-visible:ring-2 focus-visible:ring-ring/50",
      "data-checked:bg-primary data-checked:text-primary-foreground",
      "data-disabled:opacity-50",
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
