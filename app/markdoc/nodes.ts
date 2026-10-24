import type { Node, RenderableTreeNode } from "@markdoc/markdoc";

import { nodes as defaultNodes, Tag, type Config } from "@markdoc/markdoc";

import { CodeBlock } from "./code/code-block";
import { stripFinalNewline } from "./code/fold";
import { parseDocFrontmatter } from "./frontmatter";
import { collectToc } from "./toc";
import { Code } from "./nodes/code";
import { DocsLayout } from "./nodes/docs-layout";
import { Heading } from "./nodes/heading";
import { Link } from "./nodes/link";
import { Paragraph } from "./nodes/paragraph";

function generateHeadingID(
  children: RenderableTreeNode[],
  attributes: Record<string, unknown>,
) {
  if (attributes.id && typeof attributes.id === "string") {
    return attributes.id;
  }

  return children
    .filter((child) => typeof child === "string")
    .join(" ")
    .replace(/[?]/, "")
    .replace(/\s+/g, "-")
    .toLowerCase();
}

const nodes = {
  document: {
    ...defaultNodes.document,
    render: DocsLayout,
    transform(node: Node, config: Config) {
      const { title, description } = parseDocFrontmatter(
        node.attributes.frontmatter,
      ).nextjs.metadata;
      const children = node.transformChildren(config);
      return new Tag(
        this.render.toString(),
        { title, description, toc: collectToc(children, config) },
        children,
      );
    },
  },
  paragraph: {
    ...defaultNodes.paragraph,
    render: Paragraph,
  },
  fence: {
    ...defaultNodes.fence,
    render: CodeBlock,
    transform(node: Node) {
      return new Tag(
        this.render.toString(),
        {
          code: stripFinalNewline(String(node.attributes.content)),
          lang: node.attributes.language,
        },
        [],
      );
    },
  },
  heading: {
    render: Heading,
    children: ["inline"],
    attributes: {
      id: { type: String },
      level: { type: Number, required: true, default: 1 },
      className: { type: String },
    },
    transform(node: Node, config: Config) {
      const attributes = node.transformAttributes(config);
      const children = node.transformChildren(config);
      const id = generateHeadingID(children, attributes);
      return new Tag(this.render.toString(), { ...attributes, id }, children);
    },
  },
  code: {
    render: Code,
    attributes: {
      content: { type: String, render: false, required: true },
    },
    transform(node: Node, config: Config) {
      const attributes = node.transformAttributes(config);
      return new Tag(this.render.toString(), attributes, [
        node.attributes.content,
      ]);
    },
  },
  link: {
    render: Link,
    attributes: {
      href: { type: String, required: true },
    },
    transform(node: Node, config: Config) {
      const attributes = node.transformAttributes(config);
      return new Tag(
        this.render.toString(),
        attributes,
        node.transformChildren(config),
      );
    },
  },
};

export default nodes;
