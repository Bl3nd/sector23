import type { VariantProps } from "tailwind-variants";

import { tv } from "tailwind-variants";

const button = tv({
  base: [
    "inline-flex shrink-0 items-center justify-center rounded-md font-medium whitespace-nowrap shadow-sm transition-all duration-150 ease-default outline-none select-none",
    "focus-visible:ring-3 focus-visible:ring-ring/50",
    "data-disabled:pointer-events-none data-disabled:opacity-50",
    "[&_svg]:shrink-0",
  ],
  defaultVariants: {
    size: "md",
    variant: "primary",
  },
  variants: {
    size: {
      lg: "min-h-9 gap-2 px-2 text-base [&_svg]:size-5",
      md: "min-h-8 gap-1.5 px-2 text-sm [&_svg]:size-4",
      sm: "min-h-7 gap-1 px-2 text-xs [&_svg]:size-3",
    },
    variant: {
      primary: [
        "bg-primary text-primary-foreground",
        "hover:bg-primary/90",
        "data-popup-open:bg-primary/80",
      ],
      secondary: [
        "bg-secondary text-secondary-foreground",
        "hover:bg-secondary/90",
        "data-popup-open:bg-secondary/80",
      ],
      destructive: [
        "bg-destructive text-destructive-foreground",
        "hover:bg-destructive/90",
        "focus-visible:ring-destructive/50",
        "data-popup-open:bg-destructive/80",
      ],
      outline: [
        "border border-border",
        "hover:bg-accent hover:text-accent-foreground",
        "data-popup-open:bg-accent/80 data-popup-open:text-accent-foreground",
      ],
      ghost: [
        "shadow-none",
        "hover:bg-accent hover:text-accent-foreground",
        "data-popup-open:bg-accent/80 data-popup-open:text-accent-foreground",
      ],
      "ghost-emphasized": [
        "text-muted-foreground shadow-none",
        "hover:text-accent-foreground",
        "data-popup-open:text-accent-foreground",
      ],
    },
  },
});

type ButtonVariantProps = VariantProps<typeof button>;

export { button };
export type { ButtonVariantProps };
