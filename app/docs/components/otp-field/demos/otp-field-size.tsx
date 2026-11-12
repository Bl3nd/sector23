"use client";

import { useId } from "react";

import { Label } from "@/registry/sector23/ui/label";
import { OTPField, OTPFieldInput } from "@/registry/sector23/ui/otp-field";

const OTP_LENGTH = 6;

export function OTPFieldSize() {
  const smId = useId();
  const mdId = useId();
  const lgId = useId();

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col items-start gap-1.5">
        <Label htmlFor={smId}>Small</Label>
        <OTPField id={smId} length={OTP_LENGTH} size="sm">
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
      <div className="flex flex-col items-start gap-1.5">
        <Label htmlFor={mdId}>Medium (default)</Label>
        <OTPField id={mdId} length={OTP_LENGTH} size="md">
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
      <div className="flex flex-col items-start gap-1.5">
        <Label htmlFor={lgId}>Large</Label>
        <OTPField id={lgId} length={OTP_LENGTH} size="lg">
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
    </div>
  );
}
