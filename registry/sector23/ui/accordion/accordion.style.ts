import { tv } from "tailwind-variants";

const accordion = tv({
  slots: {
    root: "flex w-full flex-col",
    item: "flex flex-col not-last:border-b not-last:border-border",
    header: "",
    trigger: [
      "group flex w-full cursor-pointer items-start gap-2.5 rounded-md py-2 text-start text-sm font-medium text-foreground transition-all duration-150 ease-default outline-none select-none",
      "focus-visible:ring-2 focus-visible:ring-ring",
      "data-disabled:pointer-events-none data-disabled:opacity-50",
      "[&_svg]:ms-auto [&_svg]:shrink-0",
      "[&_svg]:mt-[calc((1lh-0.875rem)/2)] [&_svg:not([class*='size-'])]:size-3.5",
      "[&>svg]:transition-[rotate] [&>svg]:duration-300 [&>svg]:ease-default",
      "[&>svg:not([class*='rotate-'])]:group-data-panel-open:rotate-180",
    ],
    panel: [
      "h-(--accordion-panel-height) overflow-hidden text-sm text-muted-foreground transition-[height] duration-500 ease-emphasized",
      "data-disabled:opacity-50",
      "data-ending-style:h-0",
      "data-starting-style:h-0",
    ],
    panelContent: "pb-2",
  },
});

export { accordion };
