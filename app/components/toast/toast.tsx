import { mergeProps, useRender } from "@base-ui/react";
import { Toast as BaseToast } from "@base-ui/react/toast";

const { useToastManager } = BaseToast;

function ToastProvider(props: BaseToast.Provider.Props) {
  return <BaseToast.Provider {...props} />;
}

function ToastPortal({ className, ...props }: BaseToast.Portal.Props) {
  return <BaseToast.Portal data-slot="toast-portal" className={className} {...props} />;
}

function ToastViewport({ className, ...props }: BaseToast.Viewport.Props) {
  return <BaseToast.Viewport data-slot="toast-viewport" className={className} {...props} />;
}

function Toast({ className, ...props }: BaseToast.Root.Props) {
  return <BaseToast.Root data-slot="toast" className={className} {...props} />;
}

function ToastContent({ className, ...props }: BaseToast.Content.Props) {
  return <BaseToast.Content data-slot="toast-content" className={className} {...props} />;
}

function ToastHeader({ className, render, ...props }: useRender.ComponentProps<"div">) {
  const header = useRender({
    defaultTagName: "div",
    props: { ...mergeProps<"div">({ className }, props), "data-slot": "toast-header" },
    render,
  });

  return header;
}

function ToastTitle({ className, ...props }: BaseToast.Title.Props) {
  return <BaseToast.Title data-slot="toast-title" className={className} {...props} />;
}

function ToastDescription({ className, ...props }: BaseToast.Description.Props) {
  return <BaseToast.Description data-slot="toast-description" className={className} {...props} />;
}

function ToastAction({ className, ...props }: BaseToast.Action.Props) {
  return <BaseToast.Action data-slot="toast-action" className={className} {...props} />;
}

function ToastClose({ className, ...props }: BaseToast.Close.Props) {
  return <BaseToast.Close data-slot="toast-close" className={className} {...props} />;
}

function ToastPositioner({ className, ...props }: BaseToast.Positioner.Props) {
  return <BaseToast.Positioner data-slot="toast-positioner" className={className} {...props} />;
}

function ToastArrow({ className, ...props }: BaseToast.Arrow.Props) {
  return <BaseToast.Arrow data-slot="toast-arrow" className={className} {...props} />;
}

export {
  useToastManager,
  ToastProvider,
  ToastPortal,
  ToastViewport,
  Toast,
  ToastContent,
  ToastHeader,
  ToastTitle,
  ToastDescription,
  ToastAction,
  ToastClose,
  ToastPositioner,
  ToastArrow,
};
