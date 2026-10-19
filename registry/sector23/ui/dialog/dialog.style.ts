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
    viewport:
      "group/dialog-viewport fixed inset-0 flex items-center justify-center overflow-hidden",
    popup: [
      "fixed top-[calc(50%+1.25rem*var(--nested-dialogs))] left-1/2 flex w-md max-w-[calc(100vw-3rem)] -translate-x-1/2 -translate-y-1/2 scale-[calc(1-0.1*var(--nested-dialogs))] flex-col rounded-lg border border-border bg-popover text-popover-foreground shadow-lg transition-[top,scale,opacity] duration-300 ease-default outline-none",
      "after:pointer-events-none after:absolute after:inset-0 after:bg-black/5 after:opacity-0 after:transition-opacity after:duration-150 after:ease-default",
      "data-ending-style:top-[calc(50%+0.25rem+1.25rem*var(--nested-dialogs))] data-ending-style:scale-95 data-ending-style:opacity-0",
      "data-nested-dialog-open:after:opacity-100",
      "data-starting-style:top-[calc(50%+0.25rem+1.25rem*var(--nested-dialogs))] data-starting-style:scale-95 data-starting-style:opacity-0",
    ],
    header: "flex flex-col gap-1.5 p-4",
    title: "text-base leading-none font-semibold text-foreground",
    description: "text-sm text-muted-foreground",
    footer: "flex flex-wrap items-center justify-end gap-2 p-4",
    close: "",
  },
});

export { dialog };
