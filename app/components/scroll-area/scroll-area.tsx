import { ScrollArea as BaseScrollArea } from "@base-ui/react/scroll-area";

function ScrollArea({ className, ...props }: BaseScrollArea.Root.Props) {
  return <BaseScrollArea.Root data-slot="scroll-area" className={className} {...props} />;
}

function ScrollAreaViewport({ className, ...props }: BaseScrollArea.Viewport.Props) {
  return (
    <BaseScrollArea.Viewport data-slot="scroll-area-viewport" className={className} {...props} />
  );
}

function ScrollAreaContent({ className, ...props }: BaseScrollArea.Content.Props) {
  return (
    <BaseScrollArea.Content data-slot="scroll-area-content" className={className} {...props} />
  );
}

function ScrollAreaScrollbar({ className, ...props }: BaseScrollArea.Scrollbar.Props) {
  return (
    <BaseScrollArea.Scrollbar data-slot="scroll-area-scrollbar" className={className} {...props} />
  );
}

function ScrollAreaThumb({ className, ...props }: BaseScrollArea.Thumb.Props) {
  return <BaseScrollArea.Thumb data-slot="scroll-area-thumb" className={className} {...props} />;
}

function ScrollAreaCorner({ className, ...props }: BaseScrollArea.Corner.Props) {
  return <BaseScrollArea.Corner data-slot="scroll-area-corner" className={className} {...props} />;
}

export {
  ScrollArea,
  ScrollAreaViewport,
  ScrollAreaContent,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaCorner,
};
