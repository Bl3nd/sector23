"use client";

import { useId } from "react";

import { Label } from "@/registry/sector23/ui/label";
import {
  OTPField,
  OTPFieldInput,
  OTPFieldSeparator,
} from "@/registry/sector23/ui/otp-field";

const OTP_LENGTH = 6;

export function OTPFieldSeparatorDemo() {
  const id = useId();

  return (
    <div className="flex flex-col items-start gap-1.5">
      <Label htmlFor={id}>Verification code</Label>
      <OTPField id={id} length={OTP_LENGTH}>
        {Array.from({ length: 3 }, (_, index) => (
          <OTPFieldInput
            key={index}
            aria-label={
              index === 0
                ? undefined
                : `Character ${index + 1} of ${OTP_LENGTH}`
            }
          />
        ))}
        <OTPFieldSeparator />
        {Array.from({ length: 3 }, (_, index) => (
          <OTPFieldInput
            key={index + 3}
            aria-label={`Character ${index + 4} of ${OTP_LENGTH}`}
          />
        ))}
      </OTPField>
    </div>
  );
}
