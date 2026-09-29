import { Menubar as BaseMenubar } from "@base-ui/react/menubar";

function Menubar({ className, ...props }: BaseMenubar.Props) {
  return <BaseMenubar data-slot="menubar" className={className} {...props} />;
}

export { Menubar };
