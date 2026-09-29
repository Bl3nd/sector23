import { Toolbar as BaseToolbar } from "@base-ui/react/toolbar";

function Toolbar({ className, ...props }: BaseToolbar.Root.Props) {
  return <BaseToolbar.Root data-slot="toolbar" className={className} {...props} />;
}

function ToolbarButton({ className, ...props }: BaseToolbar.Button.Props) {
  return <BaseToolbar.Button data-slot="toolbar-button" className={className} {...props} />;
}

function ToolbarLink({ className, ...props }: BaseToolbar.Link.Props) {
  return <BaseToolbar.Link data-slot="toolbar-link" className={className} {...props} />;
}

function ToolbarSeparator({ className, ...props }: BaseToolbar.Separator.Props) {
  return <BaseToolbar.Separator data-slot="toolbar-separator" className={className} {...props} />;
}

function ToolbarGroup({ className, ...props }: BaseToolbar.Group.Props) {
  return <BaseToolbar.Group data-slot="toolbar-group" className={className} {...props} />;
}

function ToolbarInput({ className, ...props }: BaseToolbar.Input.Props) {
  return <BaseToolbar.Input data-slot="toolbar-input" className={className} {...props} />;
}

export { Toolbar, ToolbarButton, ToolbarLink, ToolbarSeparator, ToolbarGroup, ToolbarInput };
