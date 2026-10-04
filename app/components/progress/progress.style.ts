import { tv } from "tailwind-variants";

const progress = tv({
  slots: {
    root: "grid grid-cols-[1fr_auto] gap-y-1.5",
    label: "text-sm font-medium text-foreground",
    value: "text-sm tabular-nums",
    track: "col-span-2 h-2 overflow-hidden rounded-full bg-muted",
    indicator: [
      "bg-primary transition-[width] duration-500 ease-emphasized",
      "data-progressing:bg-primary/80",
      "motion-safe:data-progressing:animate-pulse",
    ],
  },
});

export { progress };
