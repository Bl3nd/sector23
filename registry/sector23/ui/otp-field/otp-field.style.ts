import { tv, type VariantProps } from "tailwind-variants";

const otpField = tv({
  slots: {
    root: "flex w-full items-center gap-1.5",
    input: [
      "items-center justify-center rounded-md border border-input bg-background text-center text-foreground tabular-nums shadow-sm transition-[border-color,box-shadow,opacity] duration-150 ease-default outline-none",
      "placeholder:text-muted-foreground",
      "focus-visible:ring-2 focus-visible:ring-ring",
      "data-disabled:opacity-50",
      "data-invalid:border-destructive",
      "focus-visible:data-invalid:ring-destructive",
      "data-readonly:opacity-60",
      "dark:bg-input/15",
      "any-pointer-coarse:text-base",
    ],
    separator: [
      "bg-border",
      "data-[orientation=horizontal]:h-px",
      "data-[orientation=vertical]:w-px",
    ],
  },
  variants: {
    size: {
      lg: {
        input: "size-10 text-base",
        separator: [
          "data-[orientation=horizontal]:w-5",
          "data-[orientation=vertical]:h-5",
        ],
      },
      md: {
        input: "size-9 text-sm",
        separator: [
          "data-[orientation=horizontal]:w-4.5",
          "data-[orientation=vertical]:h-4.5",
        ],
      },
      sm: {
        input: "size-8 text-xs",
        separator: [
          "data-[orientation=horizontal]:w-4",
          "data-[orientation=vertical]:h-4",
        ],
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
});

type OTPFieldVariantProps = VariantProps<typeof otpField>;

export { otpField };
export type { OTPFieldVariantProps };
