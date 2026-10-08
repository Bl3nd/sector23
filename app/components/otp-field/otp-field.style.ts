import { tv } from "tailwind-variants";

const otpField = tv({
  slots: {
    root: "flex w-full gap-2",
    input: [
      "size-8 items-center justify-center rounded-md border border-input bg-background text-center text-sm text-foreground tabular-nums shadow-sm transition-all duration-150 ease-default outline-none",
      "placeholder:text-muted-foreground",
      "focus-visible:ring-2 focus-visible:ring-ring/50",
      "data-disabled:pointer-events-none data-disabled:opacity-50",
      "data-invalid:border-destructive/50",
      "focus-visible:data-invalid:ring-destructive/50",
      "dark:bg-input/15",
    ],
    separator: "",
  },
});

export { otpField };
