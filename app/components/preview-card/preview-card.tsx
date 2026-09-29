import { mergeProps, useRender } from "@base-ui/react";
import { PreviewCard as BasePreviewCard } from "@base-ui/react/preview-card";

const createPreviewCardHandle = BasePreviewCard.createHandle;

function PreviewCard(props: BasePreviewCard.Root.Props) {
  return <BasePreviewCard.Root {...props} />;
}

function PreviewCardTrigger({ className, ...props }: BasePreviewCard.Trigger.Props) {
  return (
    <BasePreviewCard.Trigger data-slot="preview-card-trigger" className={className} {...props} />
  );
}

function PreviewCardPortal({ className, ...props }: BasePreviewCard.Portal.Props) {
  return (
    <BasePreviewCard.Portal data-slot="preview-card-portal" className={className} {...props} />
  );
}

function PreviewCardBackdrop({ className, ...props }: BasePreviewCard.Backdrop.Props) {
  return (
    <BasePreviewCard.Backdrop data-slot="preview-card-backdrop" className={className} {...props} />
  );
}

function PreviewCardPositioner({ className, ...props }: BasePreviewCard.Positioner.Props) {
  return (
    <BasePreviewCard.Positioner
      data-slot="preview-card-positioner"
      className={className}
      {...props}
    />
  );
}

function PreviewCardPopup({ className, ...props }: BasePreviewCard.Popup.Props) {
  return <BasePreviewCard.Popup data-slot="preview-card-popup" className={className} {...props} />;
}

function PreviewCardArrow({ className, ...props }: BasePreviewCard.Arrow.Props) {
  return <BasePreviewCard.Arrow data-slot="preview-card-arrow" className={className} {...props} />;
}

function PreviewCardViewport({ className, ...props }: BasePreviewCard.Viewport.Props) {
  return (
    <BasePreviewCard.Viewport data-slot="preview-card-viewport" className={className} {...props} />
  );
}

function PreviewCardContent({ className, render, ...props }: useRender.ComponentProps<"div">) {
  const content = useRender({
    defaultTagName: "div",
    props: { ...mergeProps<"div">({ className }, props), "data-slot": "preview-card-content" },
    render,
  });

  return content;
}

export {
  createPreviewCardHandle,
  PreviewCard,
  PreviewCardTrigger,
  PreviewCardPortal,
  PreviewCardBackdrop,
  PreviewCardPositioner,
  PreviewCardPopup,
  PreviewCardArrow,
  PreviewCardViewport,
  PreviewCardContent,
};
