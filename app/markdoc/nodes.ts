import type { Node } from "@markdoc/markdoc";

import { nodes as defaultNodes, Tag, type Config } from "@markdoc/markdoc";
import { load } from "js-yaml";

import { DocsLayout } from "./nodes/docs-layout";
import { Paragraph } from "./nodes/paragraph";

const nodes = {
  document: {
    ...defaultNodes.document,
    render: DocsLayout,
    transform(node: Node, config: Config) {
      return new Tag(
        this.render.toString(),
        { frontmatter: load(node.attributes.frontmatter) },
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
