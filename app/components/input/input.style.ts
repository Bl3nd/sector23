import { tv } from "tailwind-variants";

const input = tv({
  base: [
    "flex h-8 w-full items-center justify-center rounded-md border border-input bg-background px-2 text-sm font-normal shadow-sm transition-all duration-150 ease-default outline-none",
    "file:me-2 file:rounded-sm file:bg-input/50 file:px-2 file:py-px file:font-medium",
    "placeholder:text-muted-foreground",
    "focus-visible:ring-2 focus-visible:ring-ring/50",
    "data-disabled:pointer-events-none data-disabled:opacity-50",
    "data-invalid:border-destructive/50",
    "focus-visible:data-invalid:ring-destructive/50",
    "dark:bg-input/15",
    "[[type='file']]:py-1",
  ],
});

export { input };
