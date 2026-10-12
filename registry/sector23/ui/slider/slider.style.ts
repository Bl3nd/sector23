import { tv } from "tailwind-variants";

const slider = tv({
  slots: {
    root: "grid max-w-full grid-cols-[1fr_auto]",
    label: "text-sm font-medium text-foreground select-none data-disabled:opacity-50",
    value: "text-sm text-foreground tabular-nums data-disabled:opacity-50",
    control: "col-span-2 flex touch-none items-center py-3 select-none data-disabled:opacity-50",
    track: "h-1 w-full rounded-full bg-muted",
    indicator: "rounded-[inherit] bg-primary select-none",
    thumb: [
      "size-4 rounded-full border border-primary bg-background select-none",
      "has-focus-visible:ring-2 has-focus-visible:ring-ring/50",
    ],
  },
});

export { slider };
