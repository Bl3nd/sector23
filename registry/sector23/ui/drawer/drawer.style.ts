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
      "fixed inset-0 flex p-(--viewport-padding)",
      "[--viewport-padding:0rem]",
      "has-data-[swipe-direction=down]:items-end",
      "has-data-[swipe-direction=left]:justify-start",
      "has-data-[swipe-direction=right]:justify-end",
      "has-data-[swipe-direction=up]:items-start",
      "has-[[data-swipe-direction='down'],[data-swipe-direction='up']]:justify-center",
      "has-[[data-swipe-direction='left'],[data-swipe-direction='right']]:items-stretch",
      "supports-[-webkit-touch-callout:none]:[--viewport-padding:0.625rem]",
    ],
    popup: [
      "group touch-auto overscroll-contain rounded-lg border border-border bg-popover text-popover-foreground shadow-lg transition-transform duration-300 ease-default outline-none",
      "[--bleed:3rem]",
      "data-ending-style:duration-[calc(var(--drawer-swipe-strength)*250ms)]",
      "data-swiping:select-none",
      "data-[swipe-direction=down]:-mb-(--bleed) data-[swipe-direction=down]:pt-4 data-[swipe-direction=down]:pb-[max(0px,calc(1.5rem+env(safe-area-inset-bottom,0px)+var(--bleed)+var(--drawer-snap-point-offset)+var(--drawer-swipe-movement-y)))]",
      "data-[swipe-direction=down]:data-starting-style:pb-[calc(1.5rem+env(safe-area-inset-bottom,0px)+var(--bleed))]",
      "data-[swipe-direction=down]:data-ending-style:pb-[calc(1.5rem+env(safe-area-inset-bottom,0px)+var(--bleed))]",
      "data-[swipe-direction=down]:data-ending-style:transform-[translateY(calc(100%-var(--bleed)+var(--viewport-padding)+2px))]",
      "data-[swipe-direction=down]:data-starting-style:transform-[translateY(calc(100%-var(--bleed)+var(--viewport-padding)+2px))]",
      "data-[swipe-direction=left]:-ml-(--bleed) data-[swipe-direction=left]:p-6 data-[swipe-direction=left]:pl-[calc(1.5rem+var(--bleed))]",
      "data-[swipe-direction=left]:data-ending-style:transform-[translateX(calc(-100%-var(--bleed)+var(--viewport-padding)+2px))]",
      "data-[swipe-direction=left]:data-starting-style:transform-[translateX(calc(-100%-var(--bleed)+var(--viewport-padding)+2px))]",
      "data-[swipe-direction=right]:-mr-(--bleed) data-[swipe-direction=right]:p-6 data-[swipe-direction=right]:pr-[calc(1.5rem+var(--bleed))]",
      "data-[swipe-direction=right]:data-ending-style:transform-[translateX(calc(100%-var(--bleed)+var(--viewport-padding)+2px))]",
      "data-[swipe-direction=right]:data-starting-style:transform-[translateX(calc(100%-var(--bleed)+var(--viewport-padding)+2px))]",
      "data-[swipe-direction=up]:-mt-(--bleed) data-[swipe-direction=up]:pt-[calc(1.5rem+env(safe-area-inset-top,0px)+var(--bleed))] data-[swipe-direction=up]:pb-4",
      "data-[swipe-direction=up]:data-ending-style:transform-[translateY(calc(-100%-var(--bleed)+var(--viewport-padding)+2px))]",
      "data-[swipe-direction=up]:data-starting-style:transform-[translateY(calc(-100%-var(--bleed)+var(--viewport-padding)+2px))]",
      "supports-[-webkit-touch-callout:none]:border",
      "after:pointer-events-none after:absolute after:inset-x-0 after:top-full after:h-(--bleed) after:bg-inherit after:content-[''] supports-[-webkit-touch-callout:none]:[--bleed:0px]",
      "[[data-swipe-direction='down'],[data-swipe-direction='up']]:max-h-[calc(80vh+var(--bleed))] [[data-swipe-direction='down'],[data-swipe-direction='up']]:w-full [[data-swipe-direction='down'],[data-swipe-direction='up']]:transform-[translateY(calc(var(--drawer-snap-point-offset)+var(--drawer-swipe-movement-y)))] [[data-swipe-direction='down'],[data-swipe-direction='up']]:px-6",
      "[[data-swipe-direction='left'],[data-swipe-direction='right']]:h-full [[data-swipe-direction='left'],[data-swipe-direction='right']]:w-[calc(20rem+var(--bleed))] [[data-swipe-direction='left'],[data-swipe-direction='right']]:max-w-[calc(100vw-3rem+var(--bleed))] [[data-swipe-direction='left'],[data-swipe-direction='right']]:transform-[translateX(var(--drawer-swipe-movement-x))]",
    ],
    content: "mx-auto flex size-full max-w-lg flex-col gap-6",
    header: [
      "grid shrink-0 grid-cols-[auto_1fr] gap-1.5 border-b border-border pb-6",
    ],
    title: [
      "flex items-center gap-3 text-base leading-none font-semibold text-foreground",
      "[&_svg]:size-4",
    ],
    description: "col-span-2 text-sm text-muted-foreground",
    footer: [
      "flex shrink-0 items-center justify-end gap-2 border-t border-border pt-6",
    ],
    close: [
      "in-data-[slot=drawer-header]:col-start-2 in-data-[slot=drawer-header]:row-start-1 in-data-[slot=drawer-header]:ms-auto in-data-[slot=drawer-header]:aspect-square in-data-[slot=drawer-header]:min-h-[calc(1lh)] in-data-[slot=drawer-header]:px-0",
      "[&_svg]:size-4 [&_svg]:shrink-0",
    ],
  },
});

export { drawer };
