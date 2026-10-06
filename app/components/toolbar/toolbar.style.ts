import { tv } from "tailwind-variants";

const toolbar = tv({
  slots: {
    root: "flex max-w-full items-center gap-2 rounded-lg border border-border p-1 **:data-slot:shadow-none",
    button: "",
    link: "flex min-h-8 items-center justify-center rounded-md px-2 text-sm text-muted-foreground transition-all duration-150 ease-default outline-none hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring/50",
    separator: [
      "min-w-px self-stretch bg-border",
      "data-[orientation=horizontal]:my-1 data-[orientation=horizontal]:h-px",
      "data-[orientation=vertical]:mx-1 data-[orientation=vertical]:w-px",
    ],
    group: "flex items-center gap-2",
    input: "",
  },
});

export { toolbar };
