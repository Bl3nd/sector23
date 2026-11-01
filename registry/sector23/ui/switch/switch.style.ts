import { tv, type VariantProps } from "tailwind-variants";

const switchStyle = tv({
  slots: {
    root: [
      "flex shrink-0 items-center rounded-full border border-input bg-background p-0.5 transition-all duration-150 ease-default outline-none",
      "focus-visible:ring-2 focus-visible:ring-ring",
      "data-checked:bg-primary",
      "data-disabled:pointer-events-none data-disabled:opacity-50",
      "data-invalid:border-destructive",
      "focus-visible:data-invalid:ring-destructive",
      "data-readonly:pointer-events-none data-readonly:opacity-60",
      "dark:bg-input/15",
      "dark:data-checked:bg-primary",
    ],
    thumb: [
      "flex items-center justify-center rounded-full bg-foreground transition-all duration-300 ease-default",
      "data-checked:translate-x-3.75 data-checked:bg-primary-foreground",
      "rtl:data-checked:-translate-x-3.75",
      "[&>svg]:shrink-0 [&>svg]:text-primary-foreground",
      "dark:[&>svg]:text-primary",
    ],
  },
  variants: {
    size: {
      lg: {
        root: "h-5 w-9",
        thumb: "size-4 [&>svg]:size-3",
      },
      md: {
        root: "h-4.5 w-8.5",
        thumb: "size-3.5 [&>svg]:size-2.5",
      },
      sm: {
        root: "h-4 w-8",
        thumb: "size-3 [&>svg]:size-2",
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
});

type SwitchVariantProps = VariantProps<typeof switchStyle>;

export { switchStyle };
export type { SwitchVariantProps };
