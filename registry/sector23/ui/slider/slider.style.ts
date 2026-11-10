import { tv, type VariantProps } from "tailwind-variants";

const slider = tv({
  slots: {
    root: [
      "grid data-[orientation='horizontal']:max-w-full data-[orientation='vertical']:max-h-full",
      "data-[orientation='horizontal']:grid-cols-[1fr_auto]",
      "data-[orientation='vertical']:grid-rows-[auto_1fr]",
    ],
    label: [
      "text-sm font-medium text-foreground transition-opacity duration-150 ease-default select-none",
      "data-disabled:opacity-50",
      "data-[orientation='vertical']:self-baseline-last",
    ],
    value: [
      "text-end text-sm text-foreground tabular-nums transition-[color,opacity] duration-150 ease-default",
      "data-disabled:opacity-50",
      "data-invalid:text-destructive",
      "data-[orientation='horizontal']:self-center",
      "data-[orientation='vertical']:col-start-1 data-[orientation='vertical']:row-start-1",
    ],
    control: [
      "flex touch-none items-center transition-opacity duration-150 ease-default select-none",
      "data-disabled:opacity-50",
      "data-[orientation='horizontal']:col-span-2",
      "data-[orientation='vertical']:col-start-2 data-[orientation='vertical']:row-span-2 data-[orientation='vertical']:row-start-1",
    ],
    track: [
      "rounded-full bg-muted",
      "data-[orientation='horizontal']:h-1 data-[orientation='horizontal']:w-full",
      "data-[orientation='vertical']:h-full data-[orientation='vertical']:w-1",
    ],
    indicator: "rounded-[inherit] bg-primary select-none",
    thumb: [
      "rounded-full border border-primary bg-background shadow-xs transition-[border-color,box-shadow] duration-150 ease-default select-none",
      "has-focus-visible:ring-2 has-focus-visible:ring-ring",
      "data-invalid:border-destructive",
      "data-invalid:has-focus-visible:ring-destructive",
    ],
  },
  variants: {
    size: {
      lg: {
        control: [
          "data-[orientation='horizontal']:py-4.5",
          "data-[orientation='vertical']:px-4.5",
        ],
        thumb: "size-5",
      },
      md: {
        control: [
          "data-[orientation='horizontal']:py-4",
          "data-[orientation='vertical']:px-4",
        ],
        thumb: "size-4.5",
      },
      sm: {
        control: [
          "data-[orientation='horizontal']:py-3.5",
          "data-[orientation='vertical']:px-3.5",
        ],
        thumb: "size-4",
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
});

type SliderVariantProps = VariantProps<typeof slider>;

export { slider };
export type { SliderVariantProps };
