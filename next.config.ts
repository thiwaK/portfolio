import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // enables static HTML export
  distDir: 'docs', // optional: custom build folder
};

export default nextConfig;
