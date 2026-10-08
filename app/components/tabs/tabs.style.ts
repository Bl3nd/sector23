import { tv } from "tailwind-variants";

const tabs = tv({
  slots: {
    root: "",
    list: "relative z-1 mb-1 flex w-fit gap-2 rounded-lg border border-border bg-muted p-1",
    tab: [
      "flex h-8 items-center justify-center rounded-md bg-transparent px-2 text-sm font-medium break-keep whitespace-nowrap text-muted-foreground transition-all duration-150 ease-default outline-none select-none",
      "hover:text-foreground",
      "focus-visible:ring-2 focus-visible:ring-ring/50",
      "data-active:text-accent-foreground",
      "data-disabled:pointer-events-none data-disabled:opacity-50",
    ],
    indicator:
      "absolute top-0 left-0 -z-1 h-(--active-tab-height) w-(--active-tab-width) translate-x-(--active-tab-left) translate-y-(--active-tab-top) rounded-md bg-accent transition-[translate,width,height] duration-300 ease-default",
    content: "grid w-full grid-cols-1 rounded-md border border-border",
    panel: [
      "col-start-1 row-start-1 flex w-full overflow-hidden rounded-[inherit] p-3 outline-none",
      "focus-visible:z-1 focus-visible:ring-2 focus-visible:ring-ring/50",
      "[[hidden]]:hidden",
    ],
  },
});

export { tabs };
