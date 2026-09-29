import { Radio as BaseRadio } from "@base-ui/react/radio";
import { RadioGroup as BaseRadioGroup } from "@base-ui/react/radio-group";

function RadioGroup({ className, ...props }: BaseRadioGroup.Props) {
  return <BaseRadioGroup data-slot="radio-group" className={className} {...props} />;
}

function Radio({ className, ...props }: BaseRadio.Root.Props) {
  return <BaseRadio.Root data-slot="radio" className={className} {...props} />;
}

function RadioIndicator({ className, ...props }: BaseRadio.Indicator.Props) {
  return <BaseRadio.Indicator data-slot="radio-indicator" className={className} {...props} />;
}

export { RadioGroup, Radio, RadioIndicator };
