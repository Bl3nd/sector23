import { tv } from "tailwind-variants";

import { disabled, focusRing } from "@/app/lib/interaction";

const collapsible = tv({
  slots: {
    root: "",
    trigger: [
      "group flex w-full items-center justify-between gap-2 rounded-md py-1.5 text-start text-sm font-medium text-foreground select-none",
      "hover:underline hover:underline-offset-4",
      focusRing,
      disabled,
      "[&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:transition-[rotate] [&_svg]:duration-300 [&_svg]:ease-default",
    ],
    panel: [
      "h-(--collapsible-panel-height) overflow-hidden transition-[height] duration-300 ease-default",
      "data-disabled:opacity-50",
      "data-ending-style:h-0",
      "data-starting-style:h-0",
    ],
  },
});

export { collapsible };
