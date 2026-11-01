import { tv, type VariantProps } from "tailwind-variants";

const radioGroup = tv({
  slots: {
    root: "group/radio-group flex flex-col items-start gap-1.5 text-foreground",
    legend: [
      "text-sm font-semibold text-foreground",
      "group-data-disabled/radio-group:opacity-50",
      "group-data-readonly/radio-group:opacity-60",
    ],
    radio: [
      "m-1 flex shrink-0 items-center justify-center rounded-full border border-input bg-background shadow-md transition-all duration-150 ease-default outline-none",
      "focus-visible:ring-2 focus-visible:ring-ring",
      "data-checked:bg-primary data-checked:text-primary-foreground",
      "data-disabled:pointer-events-none data-disabled:opacity-50",
      "data-invalid:border-destructive",
      "focus-visible:data-invalid:ring-destructive",
      "data-readonly:pointer-events-none data-readonly:opacity-60",
      "dark:bg-input/15",
      "dark:data-checked:bg-primary dark:data-checked:text-primary-foreground",
    ],
    radioIndicator: [
      "flex items-center justify-center transition-[scale,opacity] duration-300 ease-default",
      "before:rounded-full before:bg-current",
      "data-ending-style:scale-95 data-ending-style:opacity-0",
      "data-starting-style:scale-95 data-starting-style:opacity-0",
      "data-unchecked:hidden",
    ],
  },
  variants: {
    size: {
      lg: {
        radio: "size-5",
        radioIndicator: "before:size-3",
      },
      md: {
        radio: "size-4.5",
        radioIndicator: "before:size-2.5",
      },
      sm: {
        radio: "size-4",
        radioIndicator: "before:size-2",
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
});

type RadioGroupVariantProps = VariantProps<typeof radioGroup>;

export { radioGroup };
export type { RadioGroupVariantProps };
