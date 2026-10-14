import { tv } from "tailwind-variants";

/*
Slots and their data-attributes and css variables:

root: data-open/data-closed/data-starting-style/data-ending-style
trigger: data-panel-open
panel: data-open/data-closed/data-starting-style/data-ending-style; --collapsible-panel-height/--collapsible-panel-width
*/

const collapsible = tv({
  slots: {
    root: "",
    trigger: "group",
    panel: [
      "h-(--collapsible-panel-height) overflow-hidden transition-[height] duration-300 ease-default",
      "data-disabled:opacity-50",
      "data-ending-style:h-0",
      "data-starting-style:h-0",
    ],
  },
});

export { collapsible };
