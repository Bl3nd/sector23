import { Switch as BaseSwitch } from "@base-ui/react/switch";

function Switch({ className, ...props }: BaseSwitch.Root.Props) {
  return <BaseSwitch.Root data-slot="switch" className={className} {...props} />;
}

function SwitchThumb({ className, ...props }: BaseSwitch.Thumb.Props) {
  return <BaseSwitch.Thumb data-slot="switch-thumb" className={className} {...props} />;
}

export { Switch, SwitchThumb };
