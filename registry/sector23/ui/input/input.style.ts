import { tv, type VariantProps } from "tailwind-variants";

const input = tv({
  base: [
    "flex w-full items-center justify-center rounded-md border border-input bg-background font-normal shadow-sm transition-all duration-150 ease-default outline-none",
    "file:rounded-sm file:bg-input/50 file:py-px file:font-medium",
    "placeholder:text-muted-foreground",
    "focus-visible:ring-2 focus-visible:ring-ring",
    "data-disabled:pointer-events-none data-disabled:opacity-50",
    "data-invalid:border-destructive",
    "focus-visible:data-invalid:ring-destructive",
    "dark:bg-input/15",
    "[[type='file']]:py-1.5",
  ],
  variants: {
    size: {
      lg: "h-10 px-3 text-base file:me-3 file:px-3",
      md: "h-9 px-2.75 text-sm file:me-2.75 file:px-2.75",
      sm: "h-8 px-2.5 text-xs file:me-2.5 file:px-2.5",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

type InputVariantProps = VariantProps<typeof input>;

export { input };
export type { InputVariantProps };
