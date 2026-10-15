import type { Node } from "@markdoc/markdoc";

import { nodes as defaultNodes, Tag, type Config } from "@markdoc/markdoc";

import { parseDocFrontmatter } from "./frontmatter";
import { DocsLayout } from "./nodes/docs-layout";
import { Paragraph } from "./nodes/paragraph";

const nodes = {
  document: {
    ...defaultNodes.document,
    render: DocsLayout,
    transform(node: Node, config: Config) {
      const { title } = parseDocFrontmatter(node.attributes.frontmatter).nextjs
        .metadata;
      return new Tag(
        this.render.toString(),
        { title },
        node.transformChildren(config),
      );
    },
  },
  paragraph: {
    ...defaultNodes.paragraph,
    render: Paragraph,
  },
};

export default nodes;
