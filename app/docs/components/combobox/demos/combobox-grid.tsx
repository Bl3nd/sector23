"use client";

import {
  BookOpenIcon,
  BriefcaseIcon,
  BugIcon,
  CameraIcon,
  ChartLineIcon,
  ChevronsUpDownIcon,
  CloudIcon,
  CodeIcon,
  CoffeeIcon,
  DatabaseIcon,
  FilmIcon,
  FlameIcon,
  FolderIcon,
  GitBranchIcon,
  GlobeIcon,
  HeartIcon,
  ImageIcon,
  LeafIcon,
  MegaphoneIcon,
  MusicIcon,
  PaletteIcon,
  PenToolIcon,
  RocketIcon,
  ServerIcon,
  ShoppingCartIcon,
  StarIcon,
  TargetIcon,
  TerminalIcon,
  TrophyIcon,
  WalletIcon,
  ZapIcon,
  type LucideIcon,
} from "lucide-react";
import { useId } from "react";

import { Button } from "@/registry/sector23/ui/button";
import {
  Combobox,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxGroupLabel,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxPopup,
  ComboboxPortal,
  ComboboxPositioner,
  ComboboxRow,
  ComboboxTrigger,
  ComboboxValue,
} from "@/registry/sector23/ui/combobox";
import { Label } from "@/registry/sector23/ui/label";
import {
  ScrollArea,
  ScrollAreaContent,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaViewport,
} from "@/registry/sector23/ui/scroll-area";

interface ProjectIcon {
  value: string;
  label: string;
  icon: LucideIcon;
}

interface ProjectIconGroup {
  value: string;
  items: ProjectIcon[];
}

const COLUMNS = 6;

const defaultIcon: ProjectIcon = {
  value: "rocket",
  label: "Rocket",
  icon: RocketIcon,
};

const iconGroups: ProjectIconGroup[] = [
  {
    value: "General",
    items: [
      { value: "folder", label: "Folder", icon: FolderIcon },
      defaultIcon,
      { value: "briefcase", label: "Briefcase", icon: BriefcaseIcon },
      { value: "book-open", label: "Book", icon: BookOpenIcon },
      { value: "star", label: "Star", icon: StarIcon },
      { value: "heart", label: "Heart", icon: HeartIcon },
      { value: "zap", label: "Lightning", icon: ZapIcon },
      { value: "flame", label: "Flame", icon: FlameIcon },
      { value: "leaf", label: "Leaf", icon: LeafIcon },
      { value: "coffee", label: "Coffee", icon: CoffeeIcon },
    ],
  },
  {
    value: "Engineering",
    items: [
      { value: "code", label: "Code", icon: CodeIcon },
      { value: "terminal", label: "Terminal", icon: TerminalIcon },
      { value: "git-branch", label: "Branch", icon: GitBranchIcon },
      { value: "bug", label: "Bug", icon: BugIcon },
      { value: "database", label: "Database", icon: DatabaseIcon },
      { value: "server", label: "Server", icon: ServerIcon },
      { value: "cloud", label: "Cloud", icon: CloudIcon },
      { value: "globe", label: "Globe", icon: GlobeIcon },
    ],
  },
  {
    value: "Design & Media",
    items: [
      { value: "palette", label: "Palette", icon: PaletteIcon },
      { value: "pen-tool", label: "Pen", icon: PenToolIcon },
      { value: "image", label: "Image", icon: ImageIcon },
      { value: "camera", label: "Camera", icon: CameraIcon },
      { value: "film", label: "Film", icon: FilmIcon },
      { value: "music", label: "Music", icon: MusicIcon },
    ],
  },
  {
    value: "Business",
    items: [
      { value: "megaphone", label: "Megaphone", icon: MegaphoneIcon },
      { value: "shopping-cart", label: "Cart", icon: ShoppingCartIcon },
      { value: "wallet", label: "Wallet", icon: WalletIcon },
      { value: "chart-line", label: "Chart", icon: ChartLineIcon },
      { value: "target", label: "Target", icon: TargetIcon },
      { value: "trophy", label: "Trophy", icon: TrophyIcon },
    ],
  },
];

function chunkArray<T>(array: T[], size: number): T[][] {
  const result: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}

export function ComboboxGrid() {
  const id = useId();

  return (
    <Combobox<ProjectIcon>
      items={iconGroups}
      defaultValue={defaultIcon}
      itemToStringLabel={(icon) => icon.label}
      itemToStringValue={(icon) => icon.value}
      name="projectIcon"
      grid
    >
      <div className="flex w-full max-w-64 flex-col gap-1.5">
        <Label htmlFor={id}>Project icon</Label>
        <ComboboxTrigger
          id={id}
          render={<Button variant="outline" />}
          className="justify-between p-0 px-2"
        >
          <ComboboxValue>
            {(selected: ProjectIcon | null) => {
              if (!selected) {
                return "Choose an icon";
              }
              const Icon = selected.icon;
              return (
                <span className="flex items-center gap-2">
                  <Icon aria-hidden />
                  {selected.label}
                </span>
              );
            }}
          </ComboboxValue>
          <ChevronsUpDownIcon aria-hidden className="text-muted-foreground" />
        </ComboboxTrigger>
      </div>

      <ComboboxPortal>
        <ComboboxPositioner align="start">
          <ComboboxPopup aria-label="Choose a project icon" className="w-64">
            <ComboboxInput
              aria-label="Search icons"
              placeholder="Search icons"
              className="rounded-b-none border-0 border-b shadow-none focus-visible:ring-0"
            />
            <ScrollArea className="max-h-[min(18rem,calc(100dvh-3rem))]">
              <ScrollAreaViewport>
                <ScrollAreaContent className="p-0 pe-1">
                  <ComboboxEmpty>No icons found.</ComboboxEmpty>
                  <ComboboxList aria-label="Icons">
                    {(group: ProjectIconGroup) => (
                      <ComboboxGroup key={group.value} items={group.items}>
                        <ComboboxGroupLabel>{group.value}</ComboboxGroupLabel>
                        {chunkArray(group.items, COLUMNS).map((row, index) => (
                          <ComboboxRow
                            key={index}
                            className="grid grid-cols-6 gap-0.5"
                          >
                            {row.map((item) => {
                              const Icon = item.icon;
                              return (
                                <ComboboxItem
                                  key={item.value}
                                  value={item}
                                  aria-label={item.label}
                                  title={item.label}
                                  className="aspect-square justify-center px-0 data-selected:bg-muted [&>svg]:size-4"
                                >
                                  <Icon aria-hidden />
                                </ComboboxItem>
                              );
                            })}
                          </ComboboxRow>
                        ))}
                      </ComboboxGroup>
                    )}
                  </ComboboxList>
                </ScrollAreaContent>
              </ScrollAreaViewport>
              <ScrollAreaScrollbar>
                <ScrollAreaThumb />
              </ScrollAreaScrollbar>
            </ScrollArea>
          </ComboboxPopup>
        </ComboboxPositioner>
      </ComboboxPortal>
    </Combobox>
  );
}
