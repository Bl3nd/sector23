declare module "*.md" {
  import type { ComponentType } from "react";

  const MarkdocComponent: ComponentType<{
    components?: Record<string, ComponentType>;
  }>;

  export default MarkdocComponent;
  export const markdoc: { frontmatter: Record<string, unknown> };
}

declare module "*.mdoc" {
  import type { ComponentType } from "react";

  const MarkdocComponent: ComponentType<{
    components?: Record<string, ComponentType>;
  }>;

  export default MarkdocComponent;
  export const markdoc: { frontmatter: Record<string, unknown> };
}

declare module "@markdoc/next.js/runtime" {
  import type { ComponentType } from "react";

  export function getSchema(schema: Record<string, unknown>): {
    components: Record<string, ComponentType>;
    [key: string]: unknown;
  };
  export function defaultObject(value: object): Record<string, unknown>;
}

declare module "js-yaml" {
  export function load(input: string): unknown;
}
