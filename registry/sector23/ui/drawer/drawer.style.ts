import { tv } from "tailwind-variants";

const drawer = tv({
  slots: {
    indentBackground: "",
    indent: "",
    trigger: "",
    swipeArea: "",
    portal: "",
    backdrop: [
      "fixed inset-0 min-h-dvh bg-black opacity-[calc(var(--backdrop-opacity)*(1-var(--drawer-swipe-progress)))] transition-opacity duration-300 ease-default",
      "[--backdrop-opacity:0.2] [--bleed:3rem]",
      "data-ending-style:opacity-0 data-ending-style:duration-[calc(var(--drawer-swipe-strength)*250ms)]",
      "data-starting-style:opacity-0",
      "data-swiping:duration-0",
      "supports-[-webkit-touch-callout:none]:absolute",
      "dark:[--backdrop-opacity:0.5]",
    ],
    viewport: [
      "fixed inset-0 flex items-stretch p-(--viewport-padding)",
      "[--viewport-padding:0rem]",
      "data-[swipe-direction=left]:justify-start data-[swipe-direction=right]:justify-end",
      "supports-[-webkit-touch-callout:none]:[--viewport-padding:0.625rem]",
    ],
    popup: [
      "h-full w-[calc(20rem+var(--bleed))] max-w-[calc(100vw-3rem+var(--bleed))] transform-[translateX(var(--drawer-swipe-movement-x))] touch-auto overscroll-contain rounded-lg border border-border bg-popover p-6 text-popover-foreground shadow-lg transition-transform duration-300 ease-default outline-none",
      "[--bleed:3rem]",
      "data-ending-style:duration-[calc(var(--drawer-swipe-strength)*250ms)]",
      "data-swiping:select-none",
      "data-[swipe-direction=left]:-ml-(--bleed) data-[swipe-direction=left]:pl-[calc(1.5rem+var(--bleed))]",
      "data-[swipe-direction=left]:data-ending-style:transform-[translateX(calc(-100%-var(--bleed)+var(--viewport-padding)+2px))]",
      "data-[swipe-direction=left]:data-starting-style:transform-[translateX(calc(-100%-var(--bleed)+var(--viewport-padding)+2px))]",
      "data-[swipe-direction=right]:-mr-(--bleed) data-[swipe-direction=right]:pr-[calc(1.5rem+var(--bleed))]",
      "data-[swipe-direction=right]:data-ending-style:transform-[translateX(calc(100%-var(--bleed)+var(--viewport-padding)+2px))]",
      "data-[swipe-direction=right]:data-starting-style:transform-[translateX(calc(100%-var(--bleed)+var(--viewport-padding)+2px))]",
      "supports-[-webkit-touch-callout:none]:border supports-[-webkit-touch-callout:none]:[--bleed:0px]",
    ],
    content: "mx-auto flex size-full max-w-lg flex-col gap-6",
    header: "grid shrink-0 grid-cols-[auto_1fr] gap-1.5 border-b border-border pb-6",
    title:
      "flex items-center gap-3 text-base leading-none font-semibold text-foreground [&_svg]:size-4",
    description: "col-span-2 text-sm text-muted-foreground",
    footer: "flex shrink-0 items-center justify-end gap-2 border-t border-border pt-6",
    close:
      "in-data-[slot=drawer-header]:col-start-2 in-data-[slot=drawer-header]:row-start-1 in-data-[slot=drawer-header]:ms-auto in-data-[slot=drawer-header]:aspect-square in-data-[slot=drawer-header]:min-h-[calc(1lh)] in-data-[slot=drawer-header]:px-0 [&_svg]:size-4 [&_svg]:shrink-0",
  },
});

export { drawer };
