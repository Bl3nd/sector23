import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuCheckboxItemIndicator,
  ContextMenuGroup,
  ContextMenuGroupLabel,
  ContextMenuPopup,
  ContextMenuPortal,
  ContextMenuPositioner,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuRadioItemIndicator,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@/registry/sector23/ui/context-menu";

export function ContextMenuItems() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-32 w-full items-center justify-center rounded-md border border-dashed border-border sm:w-md">
        Right click me
      </ContextMenuTrigger>
      <ContextMenuPortal>
        <ContextMenuPositioner>
          <ContextMenuPopup className="w-48">
            <ContextMenuGroup>
              <ContextMenuGroupLabel>View</ContextMenuGroupLabel>
              <ContextMenuCheckboxItem defaultChecked>
                Show toolbar
                <ContextMenuCheckboxItemIndicator />
              </ContextMenuCheckboxItem>
              <ContextMenuCheckboxItem defaultChecked>
                Show status bar
                <ContextMenuCheckboxItemIndicator />
              </ContextMenuCheckboxItem>
              <ContextMenuCheckboxItem>
                Show minimap
                <ContextMenuCheckboxItemIndicator />
              </ContextMenuCheckboxItem>
              <ContextMenuCheckboxItem disabled>
                Show breadcrumbs
                <ContextMenuCheckboxItemIndicator />
              </ContextMenuCheckboxItem>
            </ContextMenuGroup>
            <ContextMenuSeparator />
            <ContextMenuRadioGroup defaultValue="name">
              <ContextMenuGroupLabel>Sort by</ContextMenuGroupLabel>
              <ContextMenuRadioItem value="name">
                Name
                <ContextMenuRadioItemIndicator />
              </ContextMenuRadioItem>
              <ContextMenuRadioItem value="date">
                Date modified
                <ContextMenuRadioItemIndicator />
              </ContextMenuRadioItem>
              <ContextMenuRadioItem value="size">
                Size
                <ContextMenuRadioItemIndicator />
              </ContextMenuRadioItem>
              <ContextMenuRadioItem value="type" disabled>
                Type
                <ContextMenuRadioItemIndicator />
              </ContextMenuRadioItem>
            </ContextMenuRadioGroup>
          </ContextMenuPopup>
        </ContextMenuPositioner>
      </ContextMenuPortal>
    </ContextMenu>
  );
}
