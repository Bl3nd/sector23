import { tv } from "tailwind-variants";

const field = tv({
  slots: {
    root: "flex w-full flex-col gap-1",
    label: [
      "text-sm font-medium text-foreground select-none",
      "data-disabled:opacity-50",
      "data-invalid:text-destructive",
    ],
    control: "",
    description: "text-sm text-muted-foreground data-disabled:opacity-50",
    item: "",
    error: "text-sm text-destructive data-disabled:opacity-50",
  },
});

export { field };
