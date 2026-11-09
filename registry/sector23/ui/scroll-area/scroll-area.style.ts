import { tv, type VariantProps } from "tailwind-variants";

const scrollArea = tv({
  slots: {
    root: "relative flex min-h-0 max-w-[calc(100vw-3rem)] flex-auto",
    viewport: [
      "min-h-0 flex-auto outline-none focus-visible:ring-2 focus-visible:ring-ring",
    ],
    content: "relative flex flex-col pe-3 text-sm text-foreground",
    scrollbar: [
      "pointer-events-none m-px flex rounded-full bg-muted opacity-0 transition-opacity duration-300 ease-default",
      "data-hovering:pointer-events-auto data-hovering:opacity-100",
      "data-scrolling:pointer-events-auto data-scrolling:opacity-100 data-scrolling:duration-0",
      "data-[orientation=horizontal]:h-1.5",
      "data-[orientation=vertical]:w-1.5 data-[orientation=vertical]:justify-center",
    ],
    thumb: [
      "w-full rounded-full bg-primary",
      "data-[orientation=horizontal]:h-full",
    ],
    corner: "",
  },
  variants: {
    faded: {
      false: {},
      true: {
        viewport:
          "mask-linear-[to_bottom,transparent_0,black_min(40px,var(--scroll-area-overflow-y-start)),black_calc(100%-min(40px,var(--scroll-area-overflow-y-end,40px))),transparent_100%] mask-no-repeat",
      },
    },
  },
  defaultVariants: {
    faded: false,
  },
});

type ScrollAreaVariantProps = VariantProps<typeof scrollArea>;

export { scrollArea };
export type { ScrollAreaVariantProps };
