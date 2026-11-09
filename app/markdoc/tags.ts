import { ComponentDemo } from "./tags/component-demo";
import { Section } from "./tags/section";

const tags = {
  "component-demo": {
    selfClosing: true,
    attributes: {
      component: { type: "string" },
      showViewport: { type: "boolean", default: false },
    },
    render: ComponentDemo,
  },
  section: {
    render: Section,
  },
};

export default tags;
