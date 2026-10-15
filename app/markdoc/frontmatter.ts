import { load } from "js-yaml";

export interface DocFrontmatter {
  readonly nextjs: {
    readonly metadata: {
      readonly title: string;
      readonly description?: string;
    };
  };
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim() !== "";
}

// oxlint-disable-next-line max-statements
export function parseDocFrontmatter(
  yamlSource: string | undefined,
): DocFrontmatter {
  const raw: unknown = yamlSource ? load(yamlSource) : undefined;

  if (!isRecord(raw)) {
    throw new Error(
      "Docs frontmatter must be a YAML object with a `nextjs.metadata` block.",
    );
  }
  if ("title" in raw) {
    throw new Error(
      "Top-level `title` is not allowed. Use `nextjs.metadata.title`.",
    );
  }
  const extraKeys = Object.keys(raw).filter((key) => key !== "nextjs");
  // oxlint-disable-next-line no-magic-numbers
  if (extraKeys.length > 0) {
    throw new Error(
      `Unknown frontmatter key ${extraKeys.map((key) => `\`${key}\``).join(", ")}. Only \`nextjs\` is allowed.`,
    );
  }

  const { nextjs } = raw;
  if (!isRecord(nextjs) || !isRecord(nextjs.metadata)) {
    throw new Error("Docs frontmatter needs a `nextjs.metadata` object.");
  }

  const { title, description } = nextjs.metadata;
  if (!isNonEmptyString(title)) {
    throw new Error("`nextjs.metadata.title` must be a non-empty string.");
  }
  if (description !== undefined && !isNonEmptyString(description)) {
    throw new Error(
      "`nextjs.metadata.description` must be a non-empty string when present.",
    );
  }

  // The loader exports this same object as the page's Next.js metadata, so pass it through unchanged.
  return raw as unknown as DocFrontmatter;
}
