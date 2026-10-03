import { tv } from "tailwind-variants";

const meter = tv({
  slots: {
    root: "grid max-w-full grid-cols-[1fr_auto] gap-y-1.5",
    label: "text-sm font-medium text-foreground",
    value: "text-sm tabular-nums",
    track: "col-span-2 h-2 overflow-hidden rounded-full bg-muted",
    indicator: "bg-primary transition-[width] duration-500 ease-emphasized",
  },
});

export { meter };
