import { tv } from "tailwind-variants";

const dialog = tv({
  slots: {
    trigger: "",
    portal: "",
    backdrop: [
      "fixed inset-0 min-h-dvh bg-black/20 transition-all duration-150 ease-default",
      "data-ending-style:opacity-0 data-starting-style:opacity-0",
      "supports-[-webkit-touch-callout:none]:absolute",
      "dark:bg-black/50",
    ],
    viewport: "",
    popup: [
      "fixed top-1/2 left-1/2 flex w-md max-w-[calc(100vw-3rem)] -translate-x-1/2 -translate-y-1/2 flex-col rounded-lg border border-border bg-popover text-popover-foreground shadow-lg transition-[scale,opacity] duration-300 ease-default outline-none",
      "data-ending-style:scale-95 data-ending-style:opacity-0",
      "data-starting-style:scale-95 data-starting-style:opacity-0",
    ],
    header: "flex flex-col gap-1.5 p-4",
    title: "text-base leading-none font-semibold text-foreground",
    description: "text-sm text-muted-foreground",
    footer: "flex flex-wrap items-center justify-end gap-2 p-4",
    close: "",
  },
});

export { dialog };
