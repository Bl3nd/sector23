import { tv } from "tailwind-variants";

const checkboxGroup = tv({
  slots: {
    root: "group flex flex-col gap-1.5",
    legend: [
      "text-base font-semibold text-foreground transition-opacity duration-150 ease-default",
      "group-data-disabled:opacity-50",
    ],
  },
});

export { checkboxGroup };
