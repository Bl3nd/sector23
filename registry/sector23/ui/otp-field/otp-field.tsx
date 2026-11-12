"use client";

import { useDirection } from "@base-ui/react";
import { OTPField as BaseOTPField } from "@base-ui/react/otp-field";
import { createContext, useContext } from "react";

import { mergeSlotClassName } from "@/registry/sector23/lib/merge-base-ui";

import { otpField, type OTPFieldVariantProps } from "./otp-field.style";

type OTPFieldContext = OTPFieldVariantProps;

const OTPFieldContext = createContext<OTPFieldContext>({
  size: "md",
});

function useOTPField() {
  return useContext(OTPFieldContext);
}

function OTPField({
  size,
  className,
  children,
  ...props
}: BaseOTPField.Root.Props & OTPFieldVariantProps) {
  const direction = useDirection();

  return (
    <OTPFieldContext.Provider value={{ size }}>
      <BaseOTPField.Root
        data-slot="otp-field"
        className={mergeSlotClassName(otpField().root, className)}
        {...props}
        dir={direction}
      >
        {children}
      </BaseOTPField.Root>
    </OTPFieldContext.Provider>
  );
}

function OTPFieldInput({ className, ...props }: BaseOTPField.Input.Props) {
  const { size } = useOTPField();

  return (
    <BaseOTPField.Input
      data-slot="otp-field-input"
      className={mergeSlotClassName(otpField({ size }).input, className)}
      {...props}
    />
  );
}

function OTPFieldSeparator({
  className,
  ...props
}: BaseOTPField.Separator.Props) {
  const { size } = useOTPField();

  return (
    <BaseOTPField.Separator
      data-slot="otp-field-separator"
      className={mergeSlotClassName(otpField({ size }).separator, className)}
      {...props}
    />
  );
}

export { OTPField, OTPFieldInput, OTPFieldSeparator };
