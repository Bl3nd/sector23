import { tv, type VariantProps } from "tailwind-variants";

const toggle = tv({
  base: [
    "inline-flex shrink-0 transform-gpu items-center justify-center rounded-md border border-border bg-transparent font-medium whitespace-nowrap text-foreground shadow-2xs transition-[color,background-color,box-shadow,scale,opacity] duration-150 ease-default will-change-transform outline-none select-none",
    "hover:bg-accent hover:text-accent-foreground",
    "focus-visible:ring-2 focus-visible:ring-ring",
    "data-disabled:pointer-events-none data-disabled:opacity-50",
    "data-pressed:bg-accent/80 data-pressed:text-accent-foreground",
    "hover:data-pressed:bg-accent hover:data-pressed:text-accent-foreground",
    "motion-safe:active:not-aria-[expanded]:scale-98",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0",
  ],
  variants: {
    size: {
      lg: "h-10 gap-2.5 px-3 text-base has-data-[side='inline-end']:pe-2.5 has-data-[side='inline-start']:ps-2.5 [&_svg:not([class*='size-'])]:size-4",
      md: "h-9 gap-2.25 px-2.75 text-sm has-data-[side='inline-end']:pe-2.25 has-data-[side='inline-start']:ps-2.25 [&_svg:not([class*='size-'])]:size-3.5",
      sm: "h-8 gap-2 px-2.5 text-xs has-data-[side='inline-end']:pe-2.25 has-data-[side='inline-start']:ps-2.25 [&_svg:not([class*='size-'])]:size-3",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

type ToggleVariantProps = VariantProps<typeof toggle>;

export { toggle };
export type { ToggleVariantProps };
