import {
  ScrollArea,
  ScrollAreaContent,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaViewport,
} from "@/registry/sector23/ui/scroll-area";

export function ScrollAreaFaded() {
  return (
    <ScrollArea faded className="h-48 w-96">
      <ScrollAreaViewport>
        <ScrollAreaContent className="gap-4">
          <p>
            The edges fade where more text sits past the viewport. At the top of
            the passage the mask is clear, and the bottom edge softens while
            unread lines remain below. A short block would sit fully inside the
            frame, so this passage keeps going until the viewport has to clip
            it. The fade is the clipped edge, not a second background behind the
            type.
          </p>
          <p>
            Scroll down and the top edge fades in turn. Each fade follows the
            distance still hidden on that side, and it clears again when the
            passage reaches that edge. The handle on the track moves with that
            same distance. When the last line meets the bottom of the frame, the
            lower fade is gone and the upper fade remains.
          </p>
        </ScrollAreaContent>
      </ScrollAreaViewport>
      <ScrollAreaScrollbar>
        <ScrollAreaThumb />
      </ScrollAreaScrollbar>
    </ScrollArea>
  );
}
