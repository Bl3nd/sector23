import {
  AlignCenterIcon,
  AlignLeftIcon,
  AlignRightIcon,
  DollarSignIcon,
  PercentIcon,
} from "lucide-react";

import { Button } from "@/registry/sector23/ui/button";
import { Toggle } from "@/registry/sector23/ui/toggle";
import { ToggleGroup } from "@/registry/sector23/ui/toggle-group";
import {
  Toolbar,
  ToolbarButton,
  ToolbarGroup,
  ToolbarLink,
  ToolbarSeparator,
} from "@/registry/sector23/ui/toolbar";

export default function Toolbar01() {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <Toolbar className="w-sm">
        <ToggleGroup aria-label="Alignment" className="gap-2 border-none p-0">
          <ToolbarButton render={<Toggle />} aria-label="Align left" value="align-left">
            <AlignLeftIcon />
          </ToolbarButton>
          <ToolbarButton render={<Toggle />} aria-label="Align center" value="align-center">
            <AlignCenterIcon />
          </ToolbarButton>
          <ToolbarButton render={<Toggle />} aria-label="Align right" value="align-right">
            <AlignRightIcon />
          </ToolbarButton>
        </ToggleGroup>
        <ToolbarSeparator />
        <ToolbarGroup aria-label="Numerical format">
          <ToolbarButton render={<Button variant="ghost" />} aria-label="Format as currency">
            <DollarSignIcon />
          </ToolbarButton>
          <ToolbarButton render={<Button variant="ghost" />} aria-label="Format as percentage">
            <PercentIcon />
          </ToolbarButton>
        </ToolbarGroup>
        <ToolbarSeparator />
        <ToolbarLink href="#" className="ms-auto">
          Help
        </ToolbarLink>
      </Toolbar>
    </div>
  );
}
