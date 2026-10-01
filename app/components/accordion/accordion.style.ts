import { tv } from "tailwind-variants";

import { disabled, focusRing } from "@/app/lib/interaction";

const accordion = tv({
  slots: {
    root: "flex w-full flex-col",
    item: "flex w-full flex-col not-last:border-b not-last:border-border",
    header: "",
    trigger: [
      "group flex w-full items-start rounded-md py-1.5 text-start text-sm font-medium text-foreground transition-shadow duration-150 ease-default select-none",
      "hover:underline hover:underline-offset-4",
      focusRing,
      disabled,
      "[&_svg]:ms-auto [&_svg]:size-4 [&_svg]:shrink-0",
      "[&>svg]:mt-[calc((1lh-1rem)/2)] [&>svg]:transition-[rotate] [&>svg]:duration-300",
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
