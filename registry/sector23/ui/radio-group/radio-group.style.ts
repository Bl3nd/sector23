import { tv } from "tailwind-variants";

const radioGroup = tv({
  slots: {
    root: "flex flex-col items-start gap-2 text-foreground",
    legend: "text-sm font-semibold text-foreground",
    radio: [
      "flex size-4 shrink-0 items-center justify-center rounded-full border border-input bg-background transition-all duration-150 ease-default outline-none",
      "focus-visible:ring-2 focus-visible:ring-ring/50",
      "data-checked:bg-primary data-checked:text-primary-foreground",
      "data-disabled:pointer-events-none data-disabled:opacity-50",
      "data-invalid:border-destructive/50",
      "focus-visible:data-invalid:ring-destructive/50",
      "dark:bg-input/15",
      "dark:data-checked:bg-primary dark:data-checked:text-primary-foreground",
    ],
    radioIndicator: [
      "flex items-center justify-center transition-[scale,opacity] duration-300 ease-default",
      "before:size-2 before:rounded-full before:bg-current",
      "data-ending-style:scale-95 data-ending-style:opacity-0",
      "data-starting-style:scale-95 data-starting-style:opacity-0",
      "data-unchecked:hidden",
    ],
  },
});

export { radioGroup };
