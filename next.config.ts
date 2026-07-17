import type { NextConfig } from "next";

module.exports = {
  images: {
    remotePatterns: [new URL('https://img.daisyui.com/**')],
  },
}

const nextConfig: NextConfig = {
  // output: 'export'
};

export default nextConfig;
