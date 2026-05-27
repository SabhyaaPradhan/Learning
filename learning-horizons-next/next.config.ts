import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    unoptimized: true, // Using local public images
  },
  experimental: {},
};

export default nextConfig;
