import type { VariantProps } from "tailwind-variants";

import { tv } from "tailwind-variants";

const avatar = tv({
  slots: {
    root: [
      "relative inline-flex items-center justify-center overflow-hidden rounded-full bg-muted leading-none text-muted-foreground select-none",
      "[&_svg]:shrink-0",
    ],
    image: [
      "absolute inset-0 size-full object-cover transition-opacity duration-150 ease-default",
      "data-ending-style:opacity-0",
      "data-error:invisible",
      "data-loading:invisible",
      "data-starting-style:opacity-0",
    ],
    fallback: "absolute inset-0 flex size-full items-center justify-center",
  },
  variants: {
    size: {
      lg: {
        root: "size-10 text-base [&_svg:not([class*='size-'])]:size-5",
        fallback: "text-base",
      },
      md: {
        root: "size-9 text-sm [&_svg:not([class*='size-'])]:size-4.5",
        fallback: "text-sm",
      },
      sm: {
        root: "size-8 text-xs [&_svg:not([class*='size-'])]:size-4",
        fallback: "text-xs",
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
});

type AvatarVariantProps = VariantProps<typeof avatar>;

export { avatar };
export type { AvatarVariantProps };
