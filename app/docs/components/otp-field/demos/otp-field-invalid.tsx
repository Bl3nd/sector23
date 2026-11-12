import { Field, FieldError, FieldLabel } from "@/registry/sector23/ui/field";
import { OTPField, OTPFieldInput } from "@/registry/sector23/ui/otp-field";

const OTP_LENGTH = 6;

export function OTPFieldInvalid() {
  return (
    <Field invalid className="w-fit">
      <FieldLabel>Verification code</FieldLabel>
      <OTPField length={OTP_LENGTH} defaultValue="123456">
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
      <FieldError match={true}>
        That code is incorrect or has expired.
      </FieldError>
    </Field>
  );
}
