import { tv } from "tailwind-variants";

const collapsible = tv({
  slots: {
    root: "",
    trigger: "",
    panel: [
      "h-(--collapsible-panel-height) overflow-hidden transition-[height] duration-300 ease-default",
      "data-ending-style:h-0",
      "data-starting-style:h-0",
    ],
  },
});

export { collapsible };
