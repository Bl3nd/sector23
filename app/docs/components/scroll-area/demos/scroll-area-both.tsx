import {
  ScrollArea,
  ScrollAreaContent,
  ScrollAreaCorner,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaViewport,
} from "@/registry/sector23/ui/scroll-area";

const CELL_COUNT = 100;

export function ScrollAreaBoth() {
  return (
    <ScrollArea className="h-64 w-64">
      <ScrollAreaViewport>
        <ScrollAreaContent>
          <ul className="grid grid-cols-[repeat(10,5rem)] grid-rows-[repeat(10,5rem)] gap-3 p-3">
            {Array.from({ length: CELL_COUNT }, (_, index) => (
              <li
                key={index}
                className="flex items-center justify-center bg-muted text-sm font-medium text-muted-foreground"
              >
                {index + 1}
              </li>
            ))}
          </ul>
        </ScrollAreaContent>
      </ScrollAreaViewport>
      <ScrollAreaScrollbar>
        <ScrollAreaThumb />
      </ScrollAreaScrollbar>
      <ScrollAreaScrollbar orientation="horizontal">
        <ScrollAreaThumb />
      </ScrollAreaScrollbar>
      <ScrollAreaCorner />
    </ScrollArea>
  );
}
