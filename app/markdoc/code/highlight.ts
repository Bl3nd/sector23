import "server-only";
import { language as bashLanguage } from "@twinkleplop/bash";
import { language as tsxLanguage } from "@twinkleplop/tsx";

export type CodeLanguage = "tsx" | "bash";

const LANGUAGE_ALIASES = new Map<string, CodeLanguage>([
  ["tsx", "tsx"],
  ["ts", "tsx"],
  ["typescript", "tsx"],
  ["jsx", "tsx"],
  ["js", "tsx"],
  ["javascript", "tsx"],
  ["bash", "bash"],
  ["sh", "bash"],
  ["shell", "bash"],
  ["zsh", "bash"],
  ["console", "bash"],
]);

const highlighters: Record<CodeLanguage, (code: string) => string> = {
  tsx: tsxLanguage(),
  bash: bashLanguage(),
};

export function parseCodeLanguage(
  info: string | undefined,
): CodeLanguage | undefined {
  const [token] = (info ?? "").trim().split(/\s+/);

  return LANGUAGE_ALIASES.get(token?.toLowerCase() ?? "");
}

export function highlight(code: string, lang: CodeLanguage): string {
  return highlighters[lang](code);
}
