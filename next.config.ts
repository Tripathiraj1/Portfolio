import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

// GitHub Pages serves project sites from /<repo-name>.
// The deploy workflow sets NEXT_PUBLIC_BASE_PATH automatically; local prod builds default to /Portfolio.
const basePath = isProd ? (process.env.NEXT_PUBLIC_BASE_PATH ?? "/Portfolio") : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
