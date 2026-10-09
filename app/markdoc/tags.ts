import { ComponentDemo } from "./tags/component-demo";

const tags = {
  "component-demo": {
    selfClosing: true,
    attributes: {
      component: { type: "string" },
    },
    render: ComponentDemo,
  },
};

export default tags;
