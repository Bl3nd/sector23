import { tv } from "tailwind-variants";

const separator = tv({
  base: "self-stretch bg-border data-[orientation=horizontal]:h-px data-[orientation=vertical]:w-px",
});

export { separator };
