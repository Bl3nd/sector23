"use client";

import { useId } from "react";

import { Label } from "@/registry/sector23/ui/label";
import { OTPField, OTPFieldInput } from "@/registry/sector23/ui/otp-field";

const OTP_LENGTH = 6;

export function OTPFieldDisabled() {
  const id = useId();

  return (
    <div className="flex flex-col items-start gap-1.5">
      <Label htmlFor={id}>Verification code</Label>
      <OTPField id={id} length={OTP_LENGTH} defaultValue="482913" disabled>
        {Array.from({ length: OTP_LENGTH }, (_, index) => (
          <OTPFieldInput
            key={index}
            aria-label={
              index === 0
                ? undefined
                : `Character ${index + 1} of ${OTP_LENGTH}`
            }
          />
        ))}
      </OTPField>
    </div>
  );
}
