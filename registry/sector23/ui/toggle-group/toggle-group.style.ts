import { tv } from "tailwind-variants";

const toggleGroup = tv({
  base: [
    "flex items-center gap-2 rounded-lg border border-border p-1",
    "*:data-slot:border-none *:data-slot:shadow-none",
    "*:data-slot:focus-visible:z-1",
  ],
});

export { toggleGroup };
