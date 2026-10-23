const FOLD_AT_LINES = 16;

const MAX_HIDDEN_LINES_STILL_OPEN = 4;

export type CodeFoldPlan =
  | { readonly kind: "whole" }
  | {
      readonly kind: "folded";
      readonly visibleLines: number;
      readonly totalLines: number;
    };

export function stripFinalNewline(code: string): string {
  return code.replace(/\n$/, "");
}

export function planCodeFold(code: string): CodeFoldPlan {
  const totalLines = code.split("\n").length;
  const hiddenLines = totalLines - FOLD_AT_LINES;

  if (hiddenLines <= MAX_HIDDEN_LINES_STILL_OPEN) {
    return { kind: "whole" };
  }

  return { kind: "folded", visibleLines: FOLD_AT_LINES, totalLines };
}
