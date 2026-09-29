import { OTPField as BaseOTPField } from "@base-ui/react/otp-field";

function OTPField({ className, ...props }: BaseOTPField.Root.Props) {
  return <BaseOTPField.Root data-slot="otp-field" className={className} {...props} />;
}

function OTPFieldInput({ className, ...props }: BaseOTPField.Input.Props) {
  return <BaseOTPField.Input data-slot="otp-field-input" className={className} {...props} />;
}

function OTPFieldSeparator({ className, ...props }: BaseOTPField.Separator.Props) {
  return (
    <BaseOTPField.Separator data-slot="otp-field-separator" className={className} {...props} />
  );
}

export { OTPField, OTPFieldInput, OTPFieldSeparator };
