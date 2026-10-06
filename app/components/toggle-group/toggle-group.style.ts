import { tv } from "tailwind-variants";

const toggleGroup = tv({
  base: [
    "flex items-center gap-1 rounded-lg border border-border p-1",
    "*:data-slot:border-none",
    "*:data-slot:focus-visible:z-1",
  ],
});

export { toggleGroup };
