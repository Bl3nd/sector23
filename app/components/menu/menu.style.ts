import { tv } from "tailwind-variants";

const menu = tv({
  slots: {
    trigger: "",
    portal: "",
    backdrop: "",
    positioner: "outline-none",
    popup: [
      "relative origin-(--transform-origin) rounded-md border border-border bg-popover p-1.5 text-popover-foreground shadow-md transition-[scale,opacity] duration-200 ease-default outline-none",
      "data-ending-style:scale-95 data-ending-style:opacity-0",
      "data-starting-style:scale-95 data-starting-style:opacity-0",
    ],
    arrow: "",
    item: [
      "grid min-h-8 grid-cols-1 items-center gap-2 rounded-md px-2 text-sm outline-none select-none",
      "has-[>kbd]:grid-cols-[1fr_auto] has-[>svg]:grid-cols-[auto_1fr] has-[>svg]:has-[>kbd]:grid-cols-[auto_1fr_auto]",
      "data-disabled:opacity-50",
      "data-highlighted:bg-accent data-highlighted:text-accent-foreground",
      "[&>kbd]:pointer-events-none [&>kbd]:flex [&>kbd]:items-center [&>kbd]:gap-1 [&>kbd]:text-xs [&>kbd]:text-muted-foreground [&>kbd]:select-none",
      "[&>svg]:size-4 [&>svg]:shrink-0",
      "[&>kbd]:[&>svg]:size-3",
    ],
    linkItem: "",
    separator: "my-1 h-px bg-border",
    submenuTrigger: [
      "grid min-h-8 grid-cols-1 items-center gap-2 rounded-md px-2 text-sm outline-none select-none",
      "has-[>svg]:grid-cols-[1fr_auto] has-[>svg~svg]:grid-cols-[auto_1fr_auto]",
      "data-disabled:opacity-50",
      "data-highlighted:bg-accent data-highlighted:text-accent-foreground",
      "[&>svg]:size-4 [&>svg]:shrink-0",
    ],
    group: "",
    groupLabel: "",
    radioGroup: "",
    radioItem: "",
    radioItemIndicator: "",
    checkboxItem: "",
    checkboxItemIndicator: "",
    viewport: "",
  },
});

export { menu };
