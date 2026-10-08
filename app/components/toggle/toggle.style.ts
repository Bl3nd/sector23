import { tv } from "tailwind-variants";

const toggle = tv({
  base: [
    "inline-flex size-8 shrink-0 items-center justify-center rounded-md border border-border bg-transparent text-foreground shadow-sm transition-all duration-150 ease-default outline-none select-none",
    "hover:bg-accent hover:text-accent-foreground",
    "focus-visible:ring-2 focus-visible:ring-ring/50",
    "data-disabled:pointer-events-none data-disabled:opacity-50",
    "data-pressed:bg-accent/80 data-pressed:text-accent-foreground",
    "[&>svg]:size-4 [&>svg]:shrink-0",
  ],
});

export { toggle };
