import { Popover as BasePopover } from "@base-ui/react/popover";

const createPopoverHandle = BasePopover.createHandle;

function Popover(props: BasePopover.Root.Props) {
  return <BasePopover.Root {...props} />;
}

function PopoverTrigger({ className, ...props }: BasePopover.Trigger.Props) {
  return <BasePopover.Trigger data-slot="popover-trigger" className={className} {...props} />;
}

function PopoverPortal({ className, ...props }: BasePopover.Portal.Props) {
  return <BasePopover.Portal data-slot="popover-portal" className={className} {...props} />;
}

function PopoverBackdrop({ className, ...props }: BasePopover.Backdrop.Props) {
  return <BasePopover.Backdrop data-slot="popover-backdrop" className={className} {...props} />;
}

function PopoverPositioner({ className, ...props }: BasePopover.Positioner.Props) {
  return <BasePopover.Positioner data-slot="popover-positioner" className={className} {...props} />;
}

function PopoverPopup({ className, ...props }: BasePopover.Popup.Props) {
  return <BasePopover.Popup data-slot="popover-popup" className={className} {...props} />;
}

function PopoverArrow({ className, ...props }: BasePopover.Arrow.Props) {
  return <BasePopover.Arrow data-slot="popover-arrow" className={className} {...props} />;
}

function PopoverViewport({ className, ...props }: BasePopover.Viewport.Props) {
  return <BasePopover.Viewport data-slot="popover-viewport" className={className} {...props} />;
}

function PopoverTitle({ className, ...props }: BasePopover.Title.Props) {
  return <BasePopover.Title data-slot="popover-title" className={className} {...props} />;
}

function PopoverDescription({ className, ...props }: BasePopover.Description.Props) {
  return (
    <BasePopover.Description data-slot="popover-description" className={className} {...props} />
  );
}

function PopoverClose({ className, ...props }: BasePopover.Close.Props) {
  return <BasePopover.Close data-slot="popover-close" className={className} {...props} />;
}

export {
  createPopoverHandle,
  Popover,
  PopoverTrigger,
  PopoverPortal,
  PopoverBackdrop,
  PopoverPositioner,
  PopoverPopup,
  PopoverArrow,
  PopoverViewport,
  PopoverTitle,
  PopoverDescription,
  PopoverClose,
};
