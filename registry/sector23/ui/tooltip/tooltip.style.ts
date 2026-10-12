import { tv } from "tailwind-variants";

const tooltip = tv({
  slots: {
    trigger: "",
    portal: "",
    positioner: "",
    popup: [
      "relative flex origin-(--transform-origin) flex-col rounded-md border border-border bg-popover px-2 py-1.5 text-sm leading-none text-popover-foreground shadow-md transition-[scale,opacity] duration-200 ease-default",
      "data-ending-style:scale-95 data-ending-style:opacity-0",
      "data-instant:transition-none",
      "data-starting-style:scale-95 data-starting-style:opacity-0",
    ],
    arrow: [
      "relative block h-1.5 w-3 overflow-clip",
      "before:absolute before:bottom-0 before:left-1/2 before:h-[calc(6px*sqrt(2))] before:w-[calc(6px*sqrt(2))] before:transform-[translate(-50%,50%)_rotate(45deg)] before:border before:border-border before:bg-popover before:content-['']",
      "data-[side=bottom]:-top-1.5",
      "data-[side=inline-end]:-inset-s-2.25 data-[side=inline-end]:-rotate-90",
      "data-[side=inline-start]:-inset-e-2.25 data-[side=inline-start]:rotate-90",
      "data-[side=left]:-right-2.25 data-[side=left]:rotate-90",
      "data-[side=right]:-left-2.25 data-[side=right]:-rotate-90",
      "data-[side=top]:-bottom-1.5 data-[side=top]:rotate-180",
    ],
    viewport: "",
  },
});

export { tooltip };
