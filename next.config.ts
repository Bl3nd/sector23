import type { NextConfig } from "next";

import withMarkdoc from "@markdoc/next.js";
import path from "node:path";

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

// The bundled option types omit appDir and nextjsExports, which the loader reads.
const markdocOptions = {
  schemaPath: "./app/markdoc",
  dir: process.cwd(),
  // Turbopack forwards only these plugin options, so the loader's page exports need appDir here.
  appDir: path.join(process.cwd(), "app"),
  nextjsExports: ["metadata"],
};

export default withMarkdoc(markdocOptions)(nextConfig);
