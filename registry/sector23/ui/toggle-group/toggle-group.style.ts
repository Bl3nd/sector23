import { tv, type VariantProps } from "tailwind-variants";

const toggleGroup = tv({
  base: "flex items-center gap-1.5 rounded-xl data-[orientation='horizontal']:flex-row data-[orientation='vertical']:flex-col",
  variants: {
    outline: {
      false: "",
      true: "border border-border p-1.5 *:data-slot:border-none *:data-slot:shadow-none",
    },
  },
  defaultVariants: {
    outline: false,
  },
});

type ToggleGroupVariantProps = VariantProps<typeof toggleGroup>;

export { toggleGroup };
export type { ToggleGroupVariantProps };
