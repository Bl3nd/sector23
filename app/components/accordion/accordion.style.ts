import { tv } from "tailwind-variants";

const accordion = tv({
  slots: {
    root: "flex w-full flex-col",
    item: "flex w-full flex-col not-last:border-b not-last:border-border",
    header: "",
    trigger: [
      "group flex w-full items-start rounded-md py-1.5 text-start text-sm font-medium text-foreground transition-all duration-150 ease-default outline-none select-none",
      "hover:underline hover:underline-offset-4",
      "focus-visible:ring-2 focus-visible:ring-ring/50",
      "data-disabled:pointer-events-none data-disabled:opacity-50",
      "[&_svg]:ms-auto [&_svg]:size-4 [&_svg]:shrink-0",
      "[&>svg]:mt-[calc((1lh-1rem)/2)] [&>svg]:transition-[rotate] [&>svg]:duration-300 [&>svg]:ease-default",
    ],
    panel: [
      "h-(--accordion-panel-height) overflow-hidden text-sm text-muted-foreground transition-[height] duration-300 ease-default",
      "data-disabled:opacity-50",
      "data-ending-style:h-0",
      "data-starting-style:h-0",
    ],
    panelContent: "pb-1.5",
  },
});

export { accordion };
