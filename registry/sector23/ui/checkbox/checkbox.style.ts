import { tv, type VariantProps } from "tailwind-variants";

const checkbox = tv({
  slots: {
    root: [
      "m-1 flex shrink-0 items-center justify-center rounded-sm border border-input bg-background shadow-md transition-all duration-150 ease-default outline-none",
      "focus-visible:ring-2 focus-visible:ring-ring",
      "data-checked:bg-primary data-checked:text-primary-foreground",
      "data-disabled:pointer-events-none data-disabled:opacity-50",
      "data-invalid:border-destructive",
      "focus-visible:data-invalid:ring-destructive",
      "data-readonly:pointer-events-none data-readonly:opacity-60",
      "dark:bg-input/15",
      "dark:data-checked:bg-primary dark:data-checked:text-primary-foreground",
    ],
    indicator: [
      "flex items-center justify-center transition-[scale,opacity] duration-300 ease-default",
      "data-ending-style:scale-95 data-ending-style:opacity-0",
      "data-starting-style:scale-95 data-starting-style:opacity-0",
      "data-unchecked:hidden",
      "[&>svg]:shrink-0",
    ],
  },
  variants: {
    size: {
      lg: {
        root: "size-5",
        indicator: "[&>svg]:size-4",
      },
      md: {
        root: "size-4.5",
        indicator: "[&>svg]:size-3.5",
      },
      sm: {
        root: "size-4",
        indicator: "[&>svg]:size-3",
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
});

type CheckboxVariantProps = VariantProps<typeof checkbox>;

export { checkbox };
export type { CheckboxVariantProps };
