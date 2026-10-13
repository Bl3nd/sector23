import type { NextConfig } from "next";

import withMarkdoc from "@markdoc/next.js";

const nextConfig: NextConfig = {
  /* Config options here */
  reactCompiler: true,
  turbopack: {},
  pageExtensions: ["js", "jsx", "md", "ts", "tsx"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default withMarkdoc({ schemaPath: "./app/markdoc", dir: process.cwd() })(
  nextConfig,
);
