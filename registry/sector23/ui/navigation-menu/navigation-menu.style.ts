import { tv } from "tailwind-variants";

const navigationMenu = tv({
  slots: {
    root: "min-w-max",
    list: "relative flex items-center gap-px",
    item: "",
    trigger: "",
    icon: "transition-transform duration-150 ease-default data-popup-open:rotate-180 [&>svg]:size-4",
    content: [
      "h-full w-[calc(100vw-2.5rem)] p-3 transition-[opacity,translate] duration-300 ease-emphasized",
      "data-ending-style:opacity-0 data-starting-style:opacity-0",
      "data-ending-style:data-[activation-direction=left]:translate-x-1/2",
      "data-starting-style:data-[activation-direction=left]:-translate-x-1/2",
      "data-ending-style:data-[activation-direction=right]:-translate-x-1/2",
      "data-starting-style:data-[activation-direction=right]:translate-x-1/2",
      "sm:w-max",
    ],
    link: [
      "relative block rounded-md transition-colors duration-150 ease-default outline-none select-none",
      "hover:bg-accent hover:text-accent-foreground",
      "focus-visible:ring-2 focus-visible:ring-ring/50",
      "data-active:bg-accent data-active:text-accent-foreground",
    ],
    portal: "",
    backdrop: "",
    positioner: [
      "h-(--positioner-height) w-(--positioner-width) max-w-(--available-width) transition-[top,left,right,bottom] duration-300 ease-emphasized",
      "before:absolute before:content-['']",
      "data-instant:transition-none",
      "data-[side=bottom]:before:inset-x-0 data-[side=bottom]:before:-top-2.5 data-[side=bottom]:before:h-2.5",
      "data-[side=left]:before:inset-y-0 data-[side=left]:before:-right-2.5 data-[side=left]:before:w-2.5",
      "data-[side=right]:before:inset-y-0 data-[side=right]:before:-left-2.5 data-[side=right]:before:w-2.5",
      "data-[side=top]:before:inset-x-0 data-[side=top]:before:-bottom-2.5 data-[side=top]:before:h-2.5",
    ],
    popup: [
      "relative h-(--popup-height) w-(--popup-width) origin-(--transform-origin) rounded-lg border border-border bg-popover text-popover-foreground shadow-lg transition-[opacity,scale,width,height] duration-300 ease-emphasized outline-none",
      "data-ending-style:scale-95 data-ending-style:opacity-0 data-ending-style:duration-150 data-ending-style:ease-emphasized",
      "data-starting-style:scale-95 data-starting-style:opacity-0",
    ],
    arrow: "",
    viewport: "relative size-full overflow-hidden",
  },
});

export { navigationMenu };
