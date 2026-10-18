// oxlint-disable no-magic-numbers
"use client";

import { FaceSlightlySmilingPlusIcon } from "lucide-react";
import { useRef, useState } from "react";

import {
  Autocomplete,
  AutocompleteEmpty,
  AutocompleteGroup,
  AutocompleteGroupLabel,
  AutocompleteInput,
  AutocompleteItem,
  AutocompleteList,
  AutocompletePopup,
  AutocompletePortal,
  AutocompletePositioner,
  AutocompleteRow,
  AutocompleteTrigger,
} from "@/registry/sector23/ui/autocomplete";
import { Button } from "@/registry/sector23/ui/button";
import { Input } from "@/registry/sector23/ui/input";
import {
  ScrollArea,
  ScrollAreaContent,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaViewport,
} from "@/registry/sector23/ui/scroll-area";

export function AutocompleteGrid() {
  const [emojiPickerOpen, setEmojiPickerOpen] = useState(false);
  const [textValue, setTextValue] = useState("");
  const [searchValue, setSearchValue] = useState("");

  const textInputRef = useRef<HTMLInputElement | null>(null);

  // oxlint-disable-next-line max-statements
  function handleInsertEmoji(value: string | null) {
    if (!value || !textInputRef.current) {
      return;
    }

    const emoji = value;
    const start =
      textInputRef.current.selectionStart ??
      textInputRef.current.value.length ??
      0;
    const end =
      textInputRef.current.selectionEnd ??
      textInputRef.current.value.length ??
      0;

    setTextValue((prev) => prev.slice(0, start) + emoji + prev.slice(end));
    setEmojiPickerOpen(false);

    const input = textInputRef.current;
    if (input) {
      input.focus();
      const caretPosition = start + emoji.length;
      input.setSelectionRange(caretPosition, caretPosition);
    }
  }

  return (
    <div className="flex w-full max-w-xs items-center gap-2">
      <Input
        ref={textInputRef}
        type="text"
        aria-label="Message"
        placeholder="What would you like to say?"
        value={textValue}
        onChange={(e) => setTextValue(e.target.value)}
      />

      <Autocomplete
        items={emojiGroups}
        open={emojiPickerOpen}
        onOpenChange={setEmojiPickerOpen}
        onOpenChangeComplete={() => setSearchValue("")}
        value={searchValue}
        onValueChange={(value, details) => {
          if (details.reason !== "item-press") {
            setSearchValue(value);
          }
        }}
        grid
      >
        <AutocompleteTrigger
          render={<Button variant="outline" />}
          aria-label="Choose an emoji"
          className="aspect-square p-0"
        >
          <FaceSlightlySmilingPlusIcon />
        </AutocompleteTrigger>
        <AutocompletePortal>
          <AutocompletePositioner align="end">
            <AutocompletePopup aria-label="Select an emoji" className="w-52">
              <AutocompleteInput
                aria-label="Search for an emoji"
                placeholder="Search emojis"
                className="mb-1 border-0 border-b"
              />
              <ScrollArea className="max-h-[min(27.5rem,calc(100dvh-3rem))]">
                <ScrollAreaViewport>
                  <ScrollAreaContent>
                    <AutocompleteEmpty>No emojis found</AutocompleteEmpty>
                    <AutocompleteList aria-label="Emoji results">
                      {(group: EmojiGroup) => (
                        <AutocompleteGroup
                          key={group.value}
                          items={group.items}
                        >
                          <AutocompleteGroupLabel>
                            {group.label}
                          </AutocompleteGroupLabel>
                          {chunkArray(group.items, COLUMNS).map(
                            (row, rowIndex) => (
                              <AutocompleteRow
                                key={rowIndex}
                                className="grid-cols-5"
                              >
                                {row.map((rowItem) => (
                                  <AutocompleteItem
                                    key={rowItem.emoji}
                                    value={rowItem}
                                    onClick={() => {
                                      handleInsertEmoji(rowItem.emoji);
                                      setEmojiPickerOpen(false);
                                    }}
                                  >
                                    {rowItem.emoji}
                                  </AutocompleteItem>
                                ))}
                              </AutocompleteRow>
                            ),
                          )}
                        </AutocompleteGroup>
                      )}
                    </AutocompleteList>
                  </ScrollAreaContent>
                </ScrollAreaViewport>
                <ScrollAreaScrollbar>
                  <ScrollAreaThumb />
                </ScrollAreaScrollbar>
              </ScrollArea>
            </AutocompletePopup>
          </AutocompletePositioner>
        </AutocompletePortal>
      </Autocomplete>
    </div>
  );
}

const COLUMNS = 5;

function chunkArray<T>(array: T[], size: number): T[][] {
  const result: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}

interface EmojiItem {
  emoji: string;
  value: string;
  name: string;
}

interface EmojiGroup {
  value: string;
  label: string;
  items: EmojiItem[];
}

export const emojiCategories = [
  {
    label: "Smileys & Emotion",
    emojis: [
      { emoji: "😀", name: "grinning face" },
      { emoji: "😃", name: "grinning face with big eyes" },
      { emoji: "😄", name: "grinning face with smiling eyes" },
      { emoji: "😁", name: "beaming face with smiling eyes" },
      { emoji: "😆", name: "grinning squinting face" },
      { emoji: "😅", name: "grinning face with sweat" },
      { emoji: "🤣", name: "rolling on the floor laughing" },
      { emoji: "😂", name: "face with tears of joy" },
      { emoji: "🙂", name: "slightly smiling face" },
      { emoji: "🙃", name: "upside-down face" },
      { emoji: "😉", name: "winking face" },
      { emoji: "😊", name: "smiling face with smiling eyes" },
      { emoji: "😇", name: "smiling face with halo" },
      { emoji: "🥰", name: "smiling face with hearts" },
      { emoji: "😍", name: "smiling face with heart-eyes" },
      { emoji: "🤩", name: "star-struck" },
      { emoji: "😘", name: "face blowing a kiss" },
      { emoji: "😗", name: "kissing face" },
      { emoji: "☺️", name: "smiling face" },
      { emoji: "😚", name: "kissing face with closed eyes" },
      { emoji: "😙", name: "kissing face with smiling eyes" },
      { emoji: "🥲", name: "smiling face with tear" },
      { emoji: "😋", name: "face savoring food" },
      { emoji: "😛", name: "face with tongue" },
      { emoji: "😜", name: "winking face with tongue" },
      { emoji: "🤪", name: "zany face" },
      { emoji: "😝", name: "squinting face with tongue" },
      { emoji: "🤑", name: "money-mouth face" },
      { emoji: "🤗", name: "hugging face" },
      { emoji: "🤭", name: "face with hand over mouth" },
    ],
  },
  {
    label: "Animals & Nature",
    emojis: [
      { emoji: "🐶", name: "dog face" },
      { emoji: "🐱", name: "cat face" },
      { emoji: "🐭", name: "mouse face" },
      { emoji: "🐹", name: "hamster" },
      { emoji: "🐰", name: "rabbit face" },
      { emoji: "🦊", name: "fox" },
      { emoji: "🐻", name: "bear" },
      { emoji: "🐼", name: "panda" },
      { emoji: "🐨", name: "koala" },
      { emoji: "🐯", name: "tiger face" },
      { emoji: "🦁", name: "lion" },
      { emoji: "🐮", name: "cow face" },
      { emoji: "🐷", name: "pig face" },
      { emoji: "🐽", name: "pig nose" },
      { emoji: "🐸", name: "frog" },
      { emoji: "🐵", name: "monkey face" },
      { emoji: "🙈", name: "see-no-evil monkey" },
      { emoji: "🙉", name: "hear-no-evil monkey" },
      { emoji: "🙊", name: "speak-no-evil monkey" },
      { emoji: "🐒", name: "monkey" },
      { emoji: "🐔", name: "chicken" },
      { emoji: "🐧", name: "penguin" },
      { emoji: "🐦", name: "bird" },
      { emoji: "🐤", name: "baby chick" },
      { emoji: "🐣", name: "hatching chick" },
      { emoji: "🐥", name: "front-facing baby chick" },
      { emoji: "🦆", name: "duck" },
      { emoji: "🦅", name: "eagle" },
      { emoji: "🦉", name: "owl" },
      { emoji: "🦇", name: "bat" },
    ],
  },
  {
    label: "Food & Drink",
    emojis: [
      { emoji: "🍎", name: "red apple" },
      { emoji: "🍏", name: "green apple" },
      { emoji: "🍊", name: "tangerine" },
      { emoji: "🍋", name: "lemon" },
      { emoji: "🍌", name: "banana" },
      { emoji: "🍉", name: "watermelon" },
      { emoji: "🍇", name: "grapes" },
      { emoji: "🍓", name: "strawberry" },
      { emoji: "🫐", name: "blueberries" },
      { emoji: "🍈", name: "melon" },
      { emoji: "🍒", name: "cherries" },
      { emoji: "🍑", name: "peach" },
      { emoji: "🥭", name: "mango" },
      { emoji: "🍍", name: "pineapple" },
      { emoji: "🥥", name: "coconut" },
      { emoji: "🥝", name: "kiwi fruit" },
      { emoji: "🍅", name: "tomato" },
      { emoji: "🍆", name: "eggplant" },
      { emoji: "🥑", name: "avocado" },
      { emoji: "🥦", name: "broccoli" },
      { emoji: "🥬", name: "leafy greens" },
      { emoji: "🥒", name: "cucumber" },
      { emoji: "🌶️", name: "hot pepper" },
      { emoji: "🫑", name: "bell pepper" },
      { emoji: "🌽", name: "ear of corn" },
      { emoji: "🥕", name: "carrot" },
      { emoji: "🫒", name: "olive" },
      { emoji: "🧄", name: "garlic" },
      { emoji: "🧅", name: "onion" },
      { emoji: "🥔", name: "potato" },
    ],
  },
];

const emojiGroups: EmojiGroup[] = emojiCategories.map((category) => ({
  value: category.label,
  label: category.label,
  items: category.emojis.map((emoji) => ({
    ...emoji,
    value: emoji.name.toLowerCase(),
  })),
}));
