import { tv, type VariantProps } from "tailwind-variants";

const tabs = tv({
  slots: {
    root: "flex data-[orientation=horizontal]:flex-col data-[orientation=vertical]:flex-row",
    list: "relative z-1 flex gap-2 data-[orientation=horizontal]:mb-1.5 data-[orientation=horizontal]:w-fit data-[orientation=vertical]:me-1.5 data-[orientation=vertical]:h-fit data-[orientation=vertical]:flex-col",
    tab: [
      "flex items-center rounded-md bg-transparent font-medium break-keep whitespace-nowrap text-muted-foreground transition-all duration-150 ease-default outline-none select-none",
      "hover:text-accent-foreground",
      "focus-visible:ring-2 focus-visible:ring-ring",
      "data-active:text-accent-foreground",
      "data-disabled:pointer-events-none data-disabled:opacity-50",
      "data-[orientation=horizontal]:justify-center",
      "data-[orientation=vertical]:justify-start",
    ],
    indicator: [
      "absolute -z-1 translate-x-(--active-tab-left) translate-y-(--active-tab-top) transition-[translate,width,height] duration-300 ease-emphasized",
    ],
    content: [
      "grid h-full w-full grid-cols-1 overflow-hidden rounded-md border border-border",
    ],
    panel: [
      "col-start-1 row-start-1 flex overflow-hidden rounded-[inherit] p-3 outline-none",
      "focus-visible:z-1 focus-visible:ring-2 focus-visible:ring-ring",
      "data-[orientation=horizontal]:w-full",
      "data-[orientation=vertical]:h-full",
      "[[hidden]]:hidden",
    ],
  },
  variants: {
    size: {
      lg: {
        tab: "h-10 gap-2.5 px-3 text-base has-data-[side='inline-end']:pe-2.5 has-data-[side='inline-start']:ps-2.5 [&_svg:not([class*='size-'])]:size-4",
      },
      md: {
        tab: "h-9 gap-2.25 px-2.75 text-sm has-data-[side='inline-end']:pe-2.25 has-data-[side='inline-start']:ps-2.25 [&_svg:not([class*='size-'])]:size-3.5",
      },
      sm: {
        tab: "h-8 gap-2 px-2.5 text-xs has-data-[side='inline-end']:pe-2 has-data-[side='inline-start']:ps-2 [&_svg:not([class*='size-'])]:size-3",
      },
    },
    variant: {
      default: {
        list: "rounded-lg border border-border bg-muted p-1",
        indicator: [
          "top-0 left-0 h-(--active-tab-height) w-(--active-tab-width) rounded-md bg-accent",
        ],
      },
      line: {
        list: "border-border data-[orientation=horizontal]:border-b data-[orientation=vertical]:border-e",
        indicator: [
          "bg-primary",
          "data-[orientation=horizontal]:bottom-0 data-[orientation=horizontal]:h-0.5 data-[orientation=horizontal]:w-(--active-tab-width)",
          "data-[orientation=vertical]:inset-e-0 data-[orientation=vertical]:h-(--active-tab-height) data-[orientation=vertical]:w-0.5",
          "rtl:data-[orientation=horizontal]:inset-e-0",
        ],
      },
    },
    animated: {
      false: {},
      true: {
        panel: [
          "[transition:opacity_150ms_var(--ease-default),translate_300ms_var(--ease-emphasized)]",
          "data-ending-style:opacity-0",
          "data-starting-style:opacity-0",
          "motion-safe:data-[orientation=horizontal]:data-ending-style:data-[activation-direction=left]:translate-x-full",
          "motion-safe:data-[orientation=horizontal]:data-starting-style:data-[activation-direction=left]:-translate-x-full",
          "motion-safe:data-[orientation=horizontal]:data-ending-style:data-[activation-direction=right]:-translate-x-full",
          "motion-safe:data-[orientation=horizontal]:data-starting-style:data-[activation-direction=right]:translate-x-full",
          "motion-safe:data-[orientation=vertical]:data-ending-style:data-[activation-direction=up]:translate-y-full",
          "motion-safe:data-[orientation=vertical]:data-starting-style:data-[activation-direction=up]:-translate-y-full",
          "motion-safe:data-[orientation=vertical]:data-ending-style:data-[activation-direction=down]:-translate-y-full",
          "motion-safe:data-[orientation=vertical]:data-starting-style:data-[activation-direction=down]:translate-y-full",
        ],
      },
    },
  },
  defaultVariants: {
    size: "md",
    variant: "default",
    animated: false,
  },
});

type TabsVariantProps = VariantProps<typeof tabs>;

export { tabs };
export type { TabsVariantProps };
