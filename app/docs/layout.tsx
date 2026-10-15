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
      <div className="flex-1">
        <ScrollArea className="h-full max-w-full">
          <ScrollAreaViewport className="focus-visible:ring-0">
            <ScrollAreaContent>{children}</ScrollAreaContent>
          </ScrollAreaViewport>
          <ScrollAreaScrollbar>
            <ScrollAreaThumb />
          </ScrollAreaScrollbar>
        </ScrollArea>
      </div>
    </div>
  );
}
