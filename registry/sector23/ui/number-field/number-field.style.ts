import { tv, type VariantProps } from "tailwind-variants";

const numberField = tv({
  slots: {
    root: "flex flex-col items-start gap-1.5",
    scrubArea: [
      "w-full cursor-ew-resize transition-opacity duration-150 ease-default select-none",
      "data-disabled:pointer-events-none data-disabled:opacity-50",
      "[&>label]:cursor-ew-resize",
    ],
    scrubAreaCursor: "",
    group: [
      "group flex items-center overflow-clip rounded-md border border-input bg-background shadow-sm transition-[border-color,box-shadow,opacity] duration-150 ease-default",
      "focus-within:ring-2 focus-within:ring-ring",
      "data-disabled:opacity-50",
      "data-invalid:border-destructive",
      "focus-within:data-invalid:ring-destructive",
      "dark:bg-input/15",
    ],
    decrement: [
      "flex h-full items-center justify-center bg-muted text-foreground transition-colors duration-150 ease-default select-none",
      "hover:bg-accent hover:text-accent-foreground",
      "data-disabled:pointer-events-none",
    ],
    input: [
      "h-full items-center rounded-[inherit] text-center text-foreground tabular-nums outline-none",
      "group-has-data-[slot='number-field-decrement']:rounded-s-none",
      "group-has-data-[slot='number-field-increment']:rounded-e-none",
      "placeholder:text-muted-foreground",
    ],
    increment: [
      "flex h-full items-center justify-center bg-muted text-foreground transition-colors duration-150 ease-default select-none",
      "hover:bg-accent hover:text-accent-foreground",
      "data-disabled:pointer-events-none",
    ],
  },
  variants: {
    size: {
      lg: {
        group: "h-10",
        decrement: "w-10 [&>svg:not([class*='size-'])]:size-4",
        input: "text-base",
        increment: "w-10 [&>svg:not([class*='size-'])]:size-4",
      },
      md: {
        group: "h-9",
        decrement: "w-9 [&>svg:not([class*='size-'])]:size-3.5",
        input: "text-sm",
        increment: "w-9 [&>svg:not([class*='size-'])]:size-3.5",
      },
      sm: {
        group: "h-8",
        decrement: "w-8 [&>svg:not([class*='size-'])]:size-3",
        input: "text-xs",
        increment: "w-8 [&>svg:not([class*='size-'])]:size-3",
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
});

type NumberFieldVariantProps = VariantProps<typeof numberField>;

export { numberField };
export type { NumberFieldVariantProps };
