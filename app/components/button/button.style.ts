import type { VariantProps } from "tailwind-variants";

import { tv } from "tailwind-variants";

import { disabled, focusRing } from "@/app/lib/interaction";

const button = tv({
  base: [
    "inline-flex shrink-0 items-center justify-center rounded-md font-medium whitespace-nowrap shadow-sm transition-all duration-150 ease-default select-none",
    focusRing,
    disabled,
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
      destructive: [
        "bg-destructive text-destructive-foreground",
        "hover:bg-destructive/90",
        "focus-visible:ring-destructive/50",
      ],
      ghost: "shadow-none hover:bg-accent hover:text-accent-foreground",
      "ghost-emphasized": "text-muted-foreground shadow-none hover:text-accent-foreground",
      outline: "border border-border hover:bg-accent hover:text-accent-foreground",
      primary: "bg-primary text-primary-foreground hover:bg-primary/90",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/90",
    },
  },
});

type ButtonVariantProps = VariantProps<typeof button>;

export { button };
export type { ButtonVariantProps };
