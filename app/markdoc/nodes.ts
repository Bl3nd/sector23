import type { Node } from "@markdoc/markdoc";

import { nodes as defaultNodes, Tag, type Config } from "@markdoc/markdoc";
import { load } from "js-yaml";

import { DocsLayout } from "../components/docs-layout";

const nodes = {
  document: {
    ...defaultNodes.document,
    render: DocsLayout,
    transform(node: Node, config: Config) {
      return new Tag(
        "Document",
        { frontmatter: load(node.attributes.frontmatter) },
        node.transformChildren(config),
      );
    },
  },
};

export default nodes;
