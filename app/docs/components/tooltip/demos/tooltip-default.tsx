import { BoldIcon, ItalicIcon, UnderlineIcon } from "lucide-react";

import { Toggle } from "@/registry/sector23/ui/toggle";
import { ToggleGroup } from "@/registry/sector23/ui/toggle-group";
import {
  Tooltip,
  TooltipArrow,
  TooltipPopup,
  TooltipPortal,
  TooltipPositioner,
  TooltipProvider,
  TooltipTrigger,
} from "@/registry/sector23/ui/tooltip";

export function TooltipDefault() {
  return (
    <TooltipProvider>
      <ToggleGroup>
        <Tooltip>
          <TooltipTrigger render={<Toggle />} aria-label="Bold">
            <BoldIcon />
          </TooltipTrigger>
          <TooltipPortal>
            <TooltipPositioner>
              <TooltipPopup>
                <TooltipArrow />
                Bold text
              </TooltipPopup>
            </TooltipPositioner>
          </TooltipPortal>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger render={<Toggle />} aria-label="Italic">
            <ItalicIcon />
          </TooltipTrigger>
          <TooltipPortal>
            <TooltipPositioner>
              <TooltipPopup>
                <TooltipArrow />
                Italicize text
              </TooltipPopup>
            </TooltipPositioner>
          </TooltipPortal>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger render={<Toggle />} aria-label="Underline">
            <UnderlineIcon />
          </TooltipTrigger>
          <TooltipPortal>
            <TooltipPositioner>
              <TooltipPopup>
                <TooltipArrow />
                Underline text
              </TooltipPopup>
            </TooltipPositioner>
          </TooltipPortal>
        </Tooltip>
      </ToggleGroup>
    </TooltipProvider>
  );
}
