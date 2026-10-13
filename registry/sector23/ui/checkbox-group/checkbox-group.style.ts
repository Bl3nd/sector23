import { tv } from "tailwind-variants";

/*
Data attributes:

data-disabled
*/

const checkboxGroup = tv({
  slots: {
    root: "group flex flex-col gap-2",
    legend: [
      "text-sm font-semibold text-foreground",
      "group-data-disabled:opacity-50",
    ],
  },
});

export { checkboxGroup };
