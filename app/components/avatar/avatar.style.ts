import type { VariantProps } from "tailwind-variants";

import { tv } from "tailwind-variants";

const avatar = tv({
  slots: {
    root: "inline-flex items-center justify-center overflow-hidden rounded-full bg-muted align-middle leading-none text-muted-foreground select-none [&_svg]:shrink-0",
    image: [
      "size-full object-cover transition-opacity duration-100 ease-fast",
      "data-ending-style:opacity-0",
      "data-starting-style:opacity-0",
    ],
    fallback: "flex size-full items-center justify-center",
  },
  variants: {
    size: {
      sm: {
        root: "size-7 text-xs [&_svg]:size-3",
        fallback: "text-xs",
      },
      md: {
        root: "size-8 text-sm [&_svg]:size-4",
        fallback: "text-sm",
      },
      lg: {
        root: "size-9 text-base [&_svg]:size-5",
        fallback: "text-base",
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
