import { tv } from "tailwind-variants";

const popover = tv({
  slots: {
    trigger: "",
    portal: "",
    backdrop: "",
    positioner: [
      "has-data-[slot='popover-viewport']:h-(--positioner-height) has-data-[slot='popover-viewport']:w-(--positioner-width) has-data-[slot='popover-viewport']:max-w-(--available-width) motion-safe:has-data-[slot='popover-viewport']:transition-[top,left,right,bottom,transform] motion-safe:has-data-[slot='popover-viewport']:duration-500 motion-safe:has-data-[slot='popover-viewport']:ease-emphasized",
      "has-data-[slot='popover-viewport']:data-instant:transition-none",
    ],
    popup: [
      "relative flex h-(--popup-height,auto) w-(--popup-width,auto) max-w-(--available-width) origin-(--transform-origin) flex-col gap-1.5 rounded-lg border border-border bg-popover p-3 text-popover-foreground shadow-md transition-[scale,opacity] duration-200 ease-default outline-none",
      "has-data-[slot='popover-viewport']:p-0 motion-safe:has-data-[slot='popover-viewport']:transition-[width,height,scale,opacity] motion-safe:has-data-[slot='popover-viewport']:duration-500 motion-safe:has-data-[slot='popover-viewport']:ease-emphasized motion-safe:has-data-[slot='popover-viewport']:**:data-[slot='popover-arrow']:transition-[left] motion-safe:has-data-[slot='popover-viewport']:**:data-[slot='popover-arrow']:duration-500 motion-safe:has-data-[slot='popover-viewport']:**:data-[slot='popover-arrow']:ease-emphasized",
      "data-ending-style:opacity-0",
      "has-data-[slot='popover-viewport']:data-instant:transition-none",
      "data-starting-style:opacity-0",
      "motion-safe:data-ending-style:scale-95",
      "motion-safe:data-starting-style:scale-95",
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
    viewport: [
      "relative h-full w-full overflow-clip p-3",
      "**:data-current:w-[calc(var(--popup-width)-1rem)] **:data-current:translate-x-0 **:data-current:opacity-100",
      "**:data-previous:w-[calc(var(--popup-width)-1rem)] **:data-previous:translate-x-0 **:data-previous:opacity-100",
      "motion-safe:**:data-current:transition-[translate,opacity] motion-safe:**:data-current:duration-[500ms,250ms] motion-safe:**:data-current:ease-emphasized",
      "motion-safe:**:data-previous:transition-[translate,opacity] motion-safe:**:data-previous:duration-[500ms,250ms] motion-safe:**:data-previous:ease-emphasized",
      "motion-safe:data-[activation-direction~='left']:[&_[data-current][data-starting-style]]:-translate-x-1/2 motion-safe:data-[activation-direction~='left']:[&_[data-current][data-starting-style]]:opacity-0",
      "motion-safe:data-[activation-direction~='right']:[&_[data-current][data-starting-style]]:translate-x-1/2 motion-safe:data-[activation-direction~='right']:[&_[data-current][data-starting-style]]:opacity-0",
      "motion-safe:data-[activation-direction~='left']:[&_[data-previous][data-ending-style]]:translate-x-1/2 motion-safe:data-[activation-direction~='left']:[&_[data-previous][data-ending-style]]:opacity-0",
      "motion-safe:data-[activation-direction~='right']:[&_[data-previous][data-ending-style]]:-translate-x-1/2 motion-safe:data-[activation-direction~='right']:[&_[data-previous][data-ending-style]]:opacity-0",
    ],
    header: "flex flex-col",
    title: "text-sm font-semibold [text-box:trim-start_cap_alphabetic]",
    description: "text-sm text-muted-foreground",
    close: "",
  },
});

export { popover };
