"use client";

import {
  Select,
  SelectIcon,
  SelectItem,
  SelectItemIndicator,
  SelectItemText,
  SelectLabel,
  SelectList,
  SelectPopup,
  SelectPortal,
  SelectPositioner,
  SelectScrollDownArrow,
  SelectScrollUpArrow,
  SelectTrigger,
  SelectValue,
} from "@/registry/sector23/ui/select";

const languages = {
  javascript: "JavaScript",
  typescript: "TypeScript",
  python: "Python",
  java: "Java",
  csharp: "C#",
  php: "PHP",
  cpp: "C++",
  rust: "Rust",
  go: "Go",
  swift: "Swift",
} as const;

type Language = keyof typeof languages;

const languageValues = Object.keys(languages) as Language[];

function renderLanguages(value: readonly Language[]) {
  if (value.length === 0) {
    return "Select languages";
  }

  const firstLanguage = languages[value[0] as Language];
  const additionalLanguages =
    value.length > 1 ? ` (+${String(value.length - 1)} more)` : "";

  return firstLanguage + additionalLanguages;
}

export function SelectMultiple() {
  return (
    <div className="flex w-xs flex-col items-start gap-1.5">
      <Select
        items={languages}
        multiple
        defaultValue={["javascript", "typescript"]}
        name="languages"
      >
        <SelectLabel>Languages</SelectLabel>
        <SelectTrigger>
          <SelectValue>{renderLanguages}</SelectValue>
          <SelectIcon />
        </SelectTrigger>
        <SelectPortal>
          <SelectPositioner alignItemWithTrigger={false}>
            <SelectPopup>
              <SelectScrollUpArrow />
              <SelectList>
                {languageValues.map((value) => (
                  <SelectItem key={value} value={value}>
                    <SelectItemText>{languages[value]}</SelectItemText>
                    <SelectItemIndicator />
                  </SelectItem>
                ))}
              </SelectList>
              <SelectScrollDownArrow />
            </SelectPopup>
          </SelectPositioner>
        </SelectPortal>
      </Select>
    </div>
  );
}
