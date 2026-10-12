import { ComponentDemo } from "./tags/component-demo";

const tags = {
  "component-demo": {
    selfClosing: true,
    attributes: {
      component: { type: "string" },
      showViewport: { type: "boolean", default: false },
    },
    render: ComponentDemo,
  },
};

export default tags;
