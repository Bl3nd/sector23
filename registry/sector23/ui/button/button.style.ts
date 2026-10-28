import type { VariantProps } from "tailwind-variants";

import { tv } from "tailwind-variants";

const button = tv({
  base: [
    "inline-flex shrink-0 transform-gpu items-center justify-center rounded-md font-medium whitespace-nowrap shadow-md transition-[color,background-color,box-shadow,scale] duration-150 ease-default will-change-transform outline-none select-none",
    "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background",
    "active:not-aria-[expanded]:scale-98",
    "data-disabled:pointer-events-none data-disabled:opacity-50",
    "motion-reduce:transition-none motion-reduce:duration-0",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0",
    "[&>span]:inline-flex [&>span]:items-center [&>span]:justify-center [&>span]:whitespace-nowrap",
  ],
  variants: {
    size: {
      lg: "h-10 gap-2.5 px-3 text-base has-data-[side='inline-end']:pe-2.5 has-data-[side='inline-start']:ps-2.5 [&_svg:not([class*='size-'])]:size-4 [&>span]:gap-2.5",
      md: "h-9 gap-2.25 px-2.75 text-sm has-data-[side='inline-end']:pe-2.25 has-data-[side='inline-start']:ps-2.25 [&_svg:not([class*='size-'])]:size-3.5 [&>span]:gap-2.25",
      sm: "h-8 gap-2 px-2.5 text-xs has-data-[side='inline-end']:pe-2 has-data-[side='inline-start']:ps-2 [&_svg:not([class*='size-'])]:size-3 [&>span]:gap-2",
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
  defaultVariants: {
    size: "md",
    variant: "primary",
  },
});

type ButtonVariantProps = VariantProps<typeof button>;

export { button };
export type { ButtonVariantProps };
