import type { ReactNode } from "react";

import { CodeBlock } from "./code-block";
import { CodeFold } from "./code-fold";
import { loadDemoSource, toCopyPasteSource } from "./demo-source";
import { planCodeFold, stripFinalNewline } from "./fold";

export function DemoCode({ demoKey }: { demoKey: string }): ReactNode {
  const code = stripFinalNewline(toCopyPasteSource(loadDemoSource(demoKey)));
  const plan = planCodeFold(code);
  const block = <CodeBlock code={code} lang="tsx" />;

  if (plan.kind === "whole") {
    return block;
  }

  return (
    <CodeFold
      code={code}
      visibleLines={plan.visibleLines}
      totalLines={plan.totalLines}
    >
      {block}
    </CodeFold>
  );
}
