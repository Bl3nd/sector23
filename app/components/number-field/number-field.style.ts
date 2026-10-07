import { tv } from "tailwind-variants";

const numberField = tv({
  slots: {
    root: "flex flex-col items-start gap-1.5",
    scrubArea: [
      "w-full cursor-ew-resize select-none",
      "data-disabled:pointer-events-none data-disabled:opacity-50",
      "[&>label]:cursor-ew-resize",
    ],
    scrubAreaCursor: "",
    group: [
      "group flex h-8 items-center rounded-md border border-input bg-background",
      "dark:bg-input/15",
    ],
    decrement: [
      "flex h-full w-8 items-center justify-center rounded-s-[inherit] bg-input/20 text-foreground transition-colors duration-150 ease-default select-none",
      "hover:bg-accent hover:text-accent-foreground",
      "data-disabled:pointer-events-none data-disabled:opacity-50",
      "[&>svg]:size-4",
    ],
    input: [
      "h-full items-center rounded-[inherit] text-center text-foreground tabular-nums outline-none",
      "group-has-data-[slot='number-field-decrement']:rounded-s-none",
      "group-has-data-[slot='number-field-increment']:rounded-e-none",
      "placeholder:text-muted-foreground",
      "focus-visible:ring-2 focus-visible:ring-ring/50",
      "data-disabled:opacity-50",
    ],
    increment: [
      "flex h-full w-8 items-center justify-center rounded-e-[inherit] bg-input/20 text-foreground transition-colors duration-150 ease-default select-none",
      "hover:bg-accent hover:text-accent-foreground",
      "data-disabled:pointer-events-none data-disabled:opacity-50",
      "[&>svg]:size-4",
    ],
  },
});

export { numberField };
