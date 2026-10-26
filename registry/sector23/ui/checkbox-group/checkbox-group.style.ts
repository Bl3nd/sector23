import { tv } from "tailwind-variants";

const checkboxGroup = tv({
  slots: {
    root: "group flex flex-col gap-1.5",
    legend: [
      "text-sm font-semibold text-foreground",
      "group-data-disabled:opacity-50",
    ],
  },
});

export { checkboxGroup };
