import { tv } from "tailwind-variants";

const toast = tv({
  slots: {
    portal: "",
    viewport: [
      "fixed top-auto right-4 bottom-4 z-1 mx-auto w-[calc(100vw-3rem)]",
      "sm:right-8 sm:bottom-8 sm:w-md",
    ],
    root: [
      "absolute right-0 bottom-0 left-auto z-[calc(1000-var(--toast-index))] h-(--height) w-full origin-bottom transform-[translateX(var(--toast-swipe-movement-x))_translateY(calc(var(--toast-swipe-movement-y)-(var(--toast-index)*var(--peek))-(var(--shrink)*var(--height))))_scale(var(--scale))] rounded-lg border border-border bg-popover text-popover-foreground shadow-md select-none",
      "[--gap:0.75rem] [--height:var(--toast-frontmost-height,var(--toast-height))] [--offset-y:calc(var(--toast-offset-y)*-1+calc(var(--toast-index)*var(--gap)*-1)+var(--toast-swipe-movement-y))] [--peek:0.75rem] [--scale:calc(max(0,1-(var(--toast-index)*0.1)))] [--shrink:calc(1-var(--scale))] [transition:transform_0.5s_var(--ease-default),opacity_0.5s,height_0.15s]",
      "after:absolute after:top-full after:left-0 after:h-[calc(var(--gap)+1px)] after:w-full after:content-['']",
      "data-ending-style:opacity-0",
      "data-expanded:h-(--toast-height) data-expanded:transform-[translateX(var(--toast-swipe-movement-x))_translateY(calc(var(--offset-y)))]",
      "data-limited:opacity-0",
      "data-starting-style:transform-[translateY(150%)]",
      "data-ending-style:data-[swipe-direction=down]:transform-[translateY(calc(var(--toast-swipe-movement-y)+150%))]",
      "data-expanded:data-ending-style:data-[swipe-direction=down]:transform-[translateY(calc(var(--toast-swipe-movement-y)+150%))]",
      "data-ending-style:data-[swipe-direction=left]:transform-[translateX(calc(var(--toast-swipe-movement-x)-150%))_translateY(var(--offset-y))]",
      "data-expanded:data-ending-style:data-[swipe-direction=left]:transform-[translateX(calc(var(--toast-swipe-movement-x)-150%))_translateY(var(--offset-y))]",
      "data-ending-style:data-[swipe-direction=right]:transform-[translateX(calc(var(--toast-swipe-movement-x)+150%))_translateY(var(--offset-y))]",
      "data-expanded:data-ending-style:data-[swipe-direction=right]:transform-[translateX(calc(var(--toast-swipe-movement-x)+150%))_translateY(var(--offset-y))]",
      "data-ending-style:data-[swipe-direction=up]:transform-[translateY(calc(var(--toast-swipe-movement-y)-150%))]",
      "data-expanded:data-ending-style:data-[swipe-direction=up]:transform-[translateY(calc(var(--toast-swipe-movement-y)-150%))]",
      "[&[data-ending-style]:not([data-limited]):not([data-swipe-direction])]:transform-[translateY(150%)]",
    ],
    content: [
      "flex items-center overflow-hidden p-3 transition-opacity duration-300 ease-default",
      "data-behind:opacity-0 data-expanded:opacity-100",
    ],
    header: "flex min-w-0 flex-1 flex-col gap-1.5",
    title: "text-sm font-semibold",
    description: "text-sm text-muted-foreground",
    action: "",
    close: "",
    positioner: "",
    arrow: "",
  },
});

export { toast };
