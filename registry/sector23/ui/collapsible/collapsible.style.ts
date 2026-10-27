import { tv } from "tailwind-variants";

const collapsible = tv({
  slots: {
    root: "",
    trigger: "group",
    panel: [
      "h-(--collapsible-panel-height) overflow-hidden transition-[height] duration-500 ease-emphasized",
      "data-disabled:opacity-50",
      "data-ending-style:h-0",
      "data-starting-style:h-0",
    ],
  },
});

export { collapsible };
