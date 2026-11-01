import { tv, type VariantProps } from "tailwind-variants";

const select = tv({
  slots: {
    label: "w-full cursor-default text-sm font-medium text-foreground",
    trigger: [
      "flex w-full items-center justify-between rounded-md border border-input bg-background whitespace-nowrap text-foreground shadow-sm transition-all duration-150 ease-default outline-none select-none",
      "hover:bg-input/25",
      "focus-visible:ring-2 focus-visible:ring-ring",
      "data-disabled:pointer-events-none data-disabled:opacity-50",
      "data-invalid:border-destructive",
      "focus-visible:data-invalid:ring-destructive",
      "data-pressed:bg-input/20",
      "dark:bg-input/15",
      "dark:hover:bg-input/50",
      "dark:data-pressed:bg-input/55",
    ],
    value: "data-placeholder:text-muted-foreground",
    icon: "-me-1 text-muted-foreground [&>svg]:shrink-0",
    portal: "",
    backdrop: "",
    positioner: "outline-none select-none",
    popup: [
      "group min-w-(--anchor-width) origin-(--transform-origin) overflow-hidden rounded-md border border-border bg-popover text-popover-foreground shadow-lg transition-[scale,opacity] duration-500 ease-emphasized outline-none",
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
      "[&>svg]:shrink-0 [&>svg:not([class*='size-'])]:size-4",
    ],
    arrow: [
      "relative block h-1.5 w-3 overflow-clip",
      "before:absolute before:bottom-0 before:left-1/2 before:h-[calc(6px*sqrt(2))] before:w-[calc(6px*sqrt(2))] before:transform-[translate(-50%,50%)_rotate(45deg)] before:border before:border-border before:bg-popover before:content-['']",
      "data-[side=bottom]:-top-1.5",
      "data-[side=inline-end]:-inset-s-2.25",
      "data-[side=inline-start]:-inset-e-2.25",
      "data-[side=left]:-right-2.25",
      "data-[side=right]:-left-2.25",
      "data-[side=top]:-bottom-1.5 data-[side=top]:rotate-180",
      "[[data-side='left'],[data-side='inline-start']]:rotate-90",
      "[[data-side='right'],[data-side='inline-end']]:-rotate-90",
    ],
    list: "relative max-h-(--available-height) p-1.5",
    item: "grid grid-cols-[1fr_auto] items-center rounded-md outline-none select-none data-disabled:opacity-50 data-highlighted:bg-accent data-highlighted:text-accent-foreground",
    itemText: "",
    itemIndicator: "-me-0.5 [&>svg]:shrink-0",
    separator: [
      "self-stretch bg-border",
      "data-[orientation=horizontal]:my-1 data-[orientation=horizontal]:h-px",
      "data-[orientation=vertical]:mx-1 data-[orientation=vertical]:w-px",
    ],
    group: "flex flex-col not-last:mb-1",
    groupLabel: [
      "mb-0.5 flex items-center font-semibold tracking-tight text-muted-foreground uppercase",
    ],
    scrollDownArrow: [
      "bottom-0 z-1 flex h-4 w-full cursor-default items-center justify-center bg-popover text-center text-xs",
      "before:absolute before:left-0 before:h-full before:w-full before:content-['']",
      "data-[side=none]:before:-bottom-full",
      "[&>svg]:shrink-0 [&>svg:not([class*='size-'])]:size-4",
    ],
  },
  variants: {
    size: {
      lg: {
        trigger: "h-10 px-3 text-base",
        icon: "[&>svg:not([class*='size-'])]:size-4",
        item: "min-h-10 gap-2.5 px-3",
        itemText: "text-base",
        itemIndicator: "[&>svg:not([class*='size-'])]:size-4",
        groupLabel: "h-7 px-3 text-sm",
      },
      md: {
        trigger: "h-9 px-2.75 text-sm",
        icon: "[&>svg:not([class*='size-'])]:size-3.5",
        item: "min-h-9 gap-2.25 px-2.75",
        itemText: "text-sm",
        itemIndicator: "[&>svg:not([class*='size-'])]:size-3.5",
        groupLabel: "h-6 px-2.75 text-xs",
      },
      sm: {
        trigger: "h-8 px-2.5 text-xs",
        icon: "[&>svg:not([class*='size-'])]:size-3",
        item: "min-h-8 gap-2 px-2.5",
        itemText: "text-xs",
        itemIndicator: "[&>svg:not([class*='size-'])]:size-3",
        groupLabel: "h-5 px-2.5 text-xs",
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
});

type SelectVariantProps = VariantProps<typeof select>;

export { select };
export type { SelectVariantProps };
