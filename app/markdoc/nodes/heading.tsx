// oxlint-disable no-magic-numbers
import { createElement } from "react";

export function Heading({
  id = "",
  level = 1,
  children,
}: {
  id?: string;
  level: number;
  children?: React.ReactNode;
}) {
  switch (level) {
    case 1: {
      return createElement(
        "h1",
        {
          id,
          className:
            "text-3xl font-bold font-serif tracking-tight text-foreground",
        },
        children,
      );
    }
    case 2: {
      return createElement(
        "h2",
        {
          id,
          className:
            "text-2xl font-serif font-semibold tracking-tight text-foreground",
        },
        children,
      );
    }
    case 3: {
      return createElement(
        "h3",
        {
          id,
          className:
            "text-xl font-serif font-medium tracking-tight text-foreground",
        },
        children,
      );
    }
  }

  return createElement(`h${level}`, { id, className: "" }, children);
}
