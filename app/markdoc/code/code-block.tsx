import type { ReactNode } from "react";

import { highlight, parseCodeLanguage } from "./highlight";

const CHROME = "overflow-hidden rounded-md border border-border";

export function CodeBlock({
  code,
  lang,
}: {
  code: string;
  lang?: string;
}): ReactNode {
  const language = parseCodeLanguage(lang);

  if (language === undefined) {
    return (
      <div data-slot="code-block" className={CHROME}>
        <pre className="twinkleplop">
          <code>{code}</code>
        </pre>
      </div>
    );
  }

  return (
    <div
      data-slot="code-block"
      className={CHROME}
      dangerouslySetInnerHTML={{ __html: highlight(code, language) }}
    />
  );
}
