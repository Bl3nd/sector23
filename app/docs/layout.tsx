import {
  ScrollArea,
  ScrollAreaContent,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaViewport,
} from "@/registry/sector23/ui/scroll-area";

import DocsDesktopSidebar from "../components/docs/docs-desktop-sidebar";

export default function DocsLayout({ children }: LayoutProps<"/docs">) {
  return (
    <div className="flex h-[calc(100%-var(--header-height))]">
      <DocsDesktopSidebar />
      <div className="min-w-0 flex-1">
        <ScrollArea className="h-full max-w-full">
          <ScrollAreaViewport className="overscroll-contain focus-visible:ring-0">
            <ScrollAreaContent
              // Base UI sets min-width: fit-content, which lets a long line widen the column.
              style={{ minWidth: 0 }}
            >
              {children}
            </ScrollAreaContent>
          </ScrollAreaViewport>
          <ScrollAreaScrollbar>
            <ScrollAreaThumb />
          </ScrollAreaScrollbar>
        </ScrollArea>
      </div>
    </div>
  );
}
