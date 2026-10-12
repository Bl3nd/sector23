import { tv } from "tailwind-variants";

const fieldset = tv({
  slots: {
    root: "flex w-full flex-col gap-2",
    legend: "text-sm font-semibold text-foreground data-disabled:opacity-50",
  },
});

export { fieldset };
