import { Tooltip as BaseTooltip } from "@base-ui/react/tooltip";

const createTooltipHandle = BaseTooltip.createHandle;

function TooltipProvider(props: BaseTooltip.Provider.Props) {
  return <BaseTooltip.Provider {...props} />;
}

function Tooltip(props: BaseTooltip.Root.Props) {
  return <BaseTooltip.Root {...props} />;
}

function TooltipTrigger({ className, ...props }: BaseTooltip.Trigger.Props) {
  return <BaseTooltip.Trigger data-slot="tooltip-trigger" className={className} {...props} />;
}

function TooltipPortal({ className, ...props }: BaseTooltip.Portal.Props) {
  return <BaseTooltip.Portal data-slot="tooltip-portal" className={className} {...props} />;
}

function TooltipPositioner({ className, ...props }: BaseTooltip.Positioner.Props) {
  return <BaseTooltip.Positioner data-slot="tooltip-positioner" className={className} {...props} />;
}

function TooltipPopup({ className, ...props }: BaseTooltip.Popup.Props) {
  return <BaseTooltip.Popup data-slot="tooltip-popup" className={className} {...props} />;
}

function TooltipArrow({ className, ...props }: BaseTooltip.Arrow.Props) {
  return <BaseTooltip.Arrow data-slot="tooltip-arrow" className={className} {...props} />;
}

function TooltipViewport({ className, ...props }: BaseTooltip.Viewport.Props) {
  return <BaseTooltip.Viewport data-slot="tooltip-viewport" className={className} {...props} />;
}

export {
  createTooltipHandle,
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipPortal,
  TooltipPositioner,
  TooltipPopup,
  TooltipArrow,
  TooltipViewport,
};
