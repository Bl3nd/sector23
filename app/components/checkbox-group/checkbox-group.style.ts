import { tv } from "tailwind-variants";

const checkboxGroup = tv({
  slots: {
    root: "flex flex-col gap-2",
    legend: "text-sm font-semibold",
  },
});

export { checkboxGroup };
