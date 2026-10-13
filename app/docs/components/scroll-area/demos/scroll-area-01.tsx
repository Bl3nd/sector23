import {
  ScrollArea,
  ScrollAreaContent,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaViewport,
} from "@/registry/sector23/ui/scroll-area";

export default function ScrollArea01() {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <ScrollArea className="h-48 w-96">
        <ScrollAreaViewport>
          <ScrollAreaContent className="gap-4">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque euismod, urna eu tincidunt consectetur, nisi nisl
              luctus enim, eu laoreet felis est ut augue. Etiam hendrerit quam
              vel dolor dictum, non laoreet mi ultricies. Nulla facilisi. Nam in
              orci feugiat, posuere eros nec, consequat nibh. Suspendisse
              potenti. Mauris facilisis, metus a dictum malesuada, nisl velit
              cursus sapien, id cursus tortor sapien nec enim. Mauris dictum,
              enim sit amet dictum gravida, magna erat tincidunt dolor, at
              dictum ligula urna quis ligula.
            </p>
            <p>
              Sed sed gravida dolor. Vivamus commodo ante vitae fermentum
              ultricies. Proin convallis, sem non facilisis facilisis, massa
              neque euismod erat, et cursus est massa at purus. Aenean nec dolor
              eu nulla pretium elementum. Vestibulum ante ipsum primis in
              faucibus orci luctus et ultrices posuere cubilia curae; Duis
              dictum, eros at commodo venenatis, nulla ex vulputate eros, in
              feugiat mi erat nec ipsum. Praesent sed tortor vitae urna
              consectetur suscipit sed et velit.
            </p>
          </ScrollAreaContent>
          <ScrollAreaScrollbar>
            <ScrollAreaThumb />
          </ScrollAreaScrollbar>
        </ScrollAreaViewport>
      </ScrollArea>
    </div>
  );
}
