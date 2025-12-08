import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/resume.pdf",
        destination: "/documents/Sarah Poulin Resume.pdf",
      },
    ];
  },
};

export default nextConfig;
