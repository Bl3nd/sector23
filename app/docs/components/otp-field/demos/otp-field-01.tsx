// oxlint-disable no-magic-numbers
import { useId } from "react";

import { Label } from "@/app/components/label";
import { OTPField, OTPFieldInput } from "@/app/components/otp-field";

const OTP_LENGTH = 6;

export default function OTPField01() {
  const id = useId();
  const descriptionId = `${id}-description`;

  return (
    <div className="flex flex-col items-center justify-center py-10">
      <div className="flex flex-col items-start gap-1.5">
        <Label htmlFor={id}>Verification code</Label>
        <OTPField id={id} length={OTP_LENGTH} aria-describedby={descriptionId}>
          {Array.from({ length: OTP_LENGTH }, (_, index) => (
            <OTPFieldInput
              key={index}
              aria-label={index === 0 ? undefined : `Character ${index + 1} of ${OTP_LENGTH}`}
            />
          ))}
        </OTPField>
        <p id={descriptionId} className="text-sm text-muted-foreground">
          Enter the verification code sent to your email
        </p>
      </div>
    </div>
  );
}
