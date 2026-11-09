import { tv } from "tailwind-variants";

const fieldset = tv({
  slots: {
    root: "flex w-full flex-col gap-1.5",
    legend: [
      "text-base font-semibold text-foreground transition-opacity duration-150 ease-default",
      "data-disabled:opacity-50",
    ],
  },
});

export { fieldset };
