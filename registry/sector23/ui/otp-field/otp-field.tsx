"use client";

import { useDirection } from "@base-ui/react";
import { OTPField as BaseOTPField } from "@base-ui/react/otp-field";

import { mergeSlotClassName } from "@/registry/sector23/lib/merge-base-ui";

import { otpField } from "./otp-field.style";

function OTPField({ className, ...props }: BaseOTPField.Root.Props) {
  const direction = useDirection();

  return (
    <BaseOTPField.Root
      data-slot="otp-field"
      className={mergeSlotClassName(otpField().root, className)}
      {...props}
      dir={direction}
    />
  );
}

function OTPFieldInput({ className, ...props }: BaseOTPField.Input.Props) {
  return (
    <BaseOTPField.Input
      data-slot="otp-field-input"
      className={mergeSlotClassName(otpField().input, className)}
      {...props}
    />
  );
}

function OTPFieldSeparator({ className, ...props }: BaseOTPField.Separator.Props) {
  return (
    <BaseOTPField.Separator
      data-slot="otp-field-separator"
      className={mergeSlotClassName(otpField().separator, className)}
      {...props}
    />
  );
}

export { OTPField, OTPFieldInput, OTPFieldSeparator };
