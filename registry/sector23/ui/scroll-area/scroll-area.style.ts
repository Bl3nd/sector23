import { tv } from "tailwind-variants";

const scrollArea = tv({
  slots: {
    root: "max-w-[calc(100vw-3rem)]",
    viewport: "h-full outline-none focus-visible:ring-2 focus-visible:ring-ring/50",
    content: "flex flex-col p-2 pe-3 text-sm text-foreground",
    scrollbar: [
      "pointer-events-none m-px flex w-1.5 justify-center rounded-full bg-muted opacity-0 transition-opacity duration-300 ease-default",
      "data-hovering:pointer-events-auto data-hovering:opacity-100",
      "data-scrolling:pointer-events-auto data-scrolling:opacity-100 data-scrolling:duration-0",
    ],
    thumb: "w-full rounded-full bg-primary",
    corner: "",
  },
});

export { scrollArea };
