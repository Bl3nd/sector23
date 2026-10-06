import { tv } from "tailwind-variants";

const toggleGroup = tv({
  base: [
    "flex items-center gap-1 rounded-lg border border-border p-1",
    "*:data-[slot=toggle]:border-none",
    "*:data-[slot=toggle]:focus-visible:z-1",
  ],
});

export { toggleGroup };
