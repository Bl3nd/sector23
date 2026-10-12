type BaseUIClassName<State> = string | ((state: State) => string | undefined) | undefined;

export function mergeVariantClassName<VariantProps extends object, State>(
  variant: (props?: VariantProps & { className?: string }) => string,
  variantProps: VariantProps,
  className: BaseUIClassName<State>,
) {
  return (state: State) =>
    variant({
      ...variantProps,
      className: typeof className === "function" ? className(state) : className,
    });
}

export function mergeSlotClassName<State>(
  slot: (props?: { className?: string }) => string,
  className: BaseUIClassName<State>,
) {
  return mergeVariantClassName(slot, {}, className);
}
