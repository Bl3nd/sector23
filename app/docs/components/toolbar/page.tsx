import {
  AlignCenterIcon,
  AlignLeftIcon,
  AlignRightIcon,
  DollarSignIcon,
  PercentIcon,
} from "lucide-react";

import { Button } from "@/app/components/button";
import { Toggle } from "@/app/components/toggle";
import { ToggleGroup } from "@/app/components/toggle-group";
import {
  Toolbar,
  ToolbarButton,
  ToolbarGroup,
  ToolbarLink,
  ToolbarSeparator,
} from "@/app/components/toolbar";

export default function ToolbarPage() {
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
