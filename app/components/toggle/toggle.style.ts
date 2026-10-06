import { tv } from "tailwind-variants";

const toggle = tv({
  base: [
    "flex size-8 items-center justify-center rounded-md border border-border bg-transparent text-foreground shadow-sm transition-all duration-150 ease-default outline-none select-none",
    "hover:bg-accent",
    "focus-visible:ring-2 focus-visible:ring-ring/50",
    "data-disabled:pointer-events-none data-disabled:opacity-50",
    "data-pressed:bg-accent/80 data-pressed:text-accent-foreground",
    "[&>svg]:size-4",
  ],
});

export { toggle };
