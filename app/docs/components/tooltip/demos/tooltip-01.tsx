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

export default function Tooltip01() {
  return (
    <div className="flex flex-col items-center justify-center py-10">
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
    </div>
  );
}
