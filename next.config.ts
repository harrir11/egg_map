import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/egg_map",
  assetPrefix: "/egg_map/",
  images: { unoptimized: true },
};
module.exports = nextConfig;
export default nextConfig;
