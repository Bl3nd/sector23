import { tv } from "tailwind-variants";

const alertDialog = tv({
  slots: {
    trigger: "",
    portal: "",
    backdrop: [
      "fixed inset-0 min-h-dvh bg-black/20 backdrop-blur-xs transition-all duration-300 ease-emphasized",
      "data-ending-style:opacity-0",
      "data-starting-style:opacity-0",
      "supports-[-webkit-touch-callout:none]:absolute",
      "dark:bg-black/50",
    ],
    viewport: "fixed inset-0 flex items-center justify-center overflow-hidden",
    popup: [
      "flex max-h-[calc(100dvh-3rem)] w-md max-w-[calc(100vw-3rem)] scale-[calc(1-0.1*var(--nested-dialogs))] flex-col overflow-hidden rounded-lg border border-border bg-popover text-popover-foreground shadow-xl transition-[top,scale,opacity] duration-500 ease-emphasized outline-none",
      // Custom top position offsets for animation. --animation-top-offset is for all animations, --nested-top-offset is for a nested dialogs top position offset.
      "[--animation-top-offset:0.5rem] [--nested-top-offset:0rem]",
      // In the viewport, the popup is centered according to the viewport so remove any positioning
      "not-in-data-[slot=alert-dialog-viewport]:fixed not-in-data-[slot=alert-dialog-viewport]:top-[calc(50%+var(--nested-top-offset)*var(--nested-dialogs))] not-in-data-[slot=alert-dialog-viewport]:left-1/2 not-in-data-[slot=alert-dialog-viewport]:-translate-x-1/2 not-in-data-[slot=alert-dialog-viewport]:-translate-y-1/2",
      // Nested dialog styling to make the lower dialogs appear darker
      "after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:bg-black/10 after:opacity-0 after:transition-opacity after:duration-300 after:ease-emphasized after:content-['']",
      // Animating out
      "data-ending-style:top-[calc(50%+var(--animation-top-offset)+var(--nested-top-offset)*var(--nested-dialogs))] data-ending-style:scale-95 data-ending-style:opacity-0",
      // Making a lower nested dialog fully opaque
      "data-nested-dialog-open:after:opacity-50",
      // Animating in
      "data-starting-style:top-[calc(50%+var(--animation-top-offset)+var(--nested-top-offset)*var(--nested-dialogs))] data-starting-style:scale-95 data-starting-style:opacity-0",
      // Dark mode for making the lower nested dialogs appear darker
      "dark:after:bg-black/30",
    ],
    header: "flex flex-col gap-1.5 p-4",
    title: "text-base leading-none font-semibold text-foreground",
    description: "text-sm text-muted-foreground",
    footer: [
      "flex flex-col-reverse items-center justify-center gap-2 p-4",
      "sm:flex-row sm:justify-end",
    ],
    close: "w-full sm:w-auto",
  },
});

export { alertDialog };
