import { BoldIcon, ItalicIcon, UnderlineIcon } from "lucide-react";

import { Toggle } from "@/app/components/toggle";
import { ToggleGroup } from "@/app/components/toggle-group";
import {
  Tooltip,
  TooltipArrow,
  TooltipPopup,
  TooltipPortal,
  TooltipPositioner,
  TooltipProvider,
  TooltipTrigger,
} from "@/app/components/tooltip";

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
