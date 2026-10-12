import { tv } from "tailwind-variants";

const switchStyle = tv({
  slots: {
    root: [
      "flex h-4 w-8 shrink-0 items-center rounded-full border border-input bg-background p-0.5 transition-all duration-150 ease-default outline-none",
      "focus-visible:ring-2 focus-visible:ring-ring/50",
      "data-checked:bg-primary",
      "data-disabled:pointer-events-none data-disabled:opacity-50",
      "data-invalid:border-destructive/50",
      "focus-visible:data-invalid:ring-destructive/50",
      "dark:bg-input/15",
      "dark:data-checked:bg-primary",
    ],
    thumb: [
      "size-3 rounded-full bg-foreground transition-all duration-300 ease-default",
      "data-checked:translate-x-3.75 data-checked:bg-primary-foreground",
      "rtl:data-checked:-translate-x-3.75",
    ],
  },
});

export { switchStyle };
