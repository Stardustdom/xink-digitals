import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Lets a production build live beside the dev server's .next folder (NEXT_DIST_DIR=.next-prod).
  distDir: process.env.NEXT_DIST_DIR || ".next",
  async rewrites() {
    return [
      {
        source: "/robot.txt",
        destination: "/robots.txt",
      },
    ];
  },
};

export default nextConfig;
