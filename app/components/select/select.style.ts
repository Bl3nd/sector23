import { tv } from "tailwind-variants";

const select = tv({
  slots: {
    label: "w-full cursor-default text-sm font-medium text-foreground",
    trigger: [
      "flex h-8 w-full items-center justify-between rounded-md border border-input bg-background px-2 text-sm whitespace-nowrap text-foreground shadow-sm transition-all duration-150 ease-default outline-none select-none",
      "hover:bg-input/25",
      "focus-visible:ring-2 focus-visible:ring-ring/50",
      "data-disabled:pointer-events-none data-disabled:opacity-50",
      "data-pressed:bg-input/20",
      "dark:bg-input/15",
      "dark:hover:bg-input/50",
      "dark:data-pressed:bg-input/55",
    ],
    value: "data-placeholder:text-muted-foreground",
    icon: "text-muted-foreground [&>svg]:size-4 [&>svg]:shrink-0",
    portal: "",
    backdrop: "",
    positioner: "outline-none select-none",
    popup: [
      "group min-w-(--anchor-width) origin-(--transform-origin) overflow-hidden rounded-md border border-border bg-popover bg-clip-padding p-px text-popover-foreground shadow-md transition-[scale,opacity] duration-300 ease-default outline-none",
      "data-ending-style:scale-95 data-ending-style:opacity-0",
      "data-starting-style:scale-95 data-starting-style:opacity-0",
      "data-[side=none]:min-w-[calc(var(--anchor-width)+0.875rem)] data-[side=none]:translate-y-[0.5px]",
      "data-[side=none]:data-ending-style:transition-none",
      "data-[side=none]:data-starting-style:scale-100 data-[side=none]:data-starting-style:opacity-100 data-[side=none]:data-starting-style:transition-none",
    ],
    scrollUpArrow: [
      "top-0 z-1 flex h-4 w-full cursor-default items-center justify-center bg-popover text-center text-xs",
      "before:absolute before:left-0 before:h-full before:w-full before:content-['']",
      "data-[side=none]:before:-top-full",
      "[&>svg]:size-4 [&>svg]:shrink-0",
    ],
    arrow: "",
    list: "relative max-h-(--available-height) p-1.5",
    item: "grid min-h-8 grid-cols-[1fr_auto] items-center gap-2 rounded-md px-2 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground",
    itemText: "",
    itemIndicator: "[&>svg]:size-4 [&>svg]:shrink-0",
    separator: "mb-1 h-px bg-border",
    group: "block not-last:pb-0.5",
    groupLabel: "px-0.5 text-sm font-semibold tracking-tight text-muted-foreground uppercase",
    scrollDownArrow: [
      "bottom-0 z-1 flex h-4 w-full cursor-default items-center justify-center bg-popover text-center text-xs",
      "before:absolute before:left-0 before:h-full before:w-full before:content-['']",
      "data-[side=none]:before:-bottom-full",
      "[&>svg]:size-4 [&>svg]:shrink-0",
    ],
  },
});

export { select };
