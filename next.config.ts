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
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value: [
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://challenges.cloudflare.com https://va.vercel-scripts.com https://static.cloudflareinsights.com",
              "frame-src 'self' https://challenges.cloudflare.com",
              "connect-src 'self' https://challenges.cloudflare.com https://va.vercel-scripts.com https://static.cloudflareinsights.com",
            ].join("; "),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
