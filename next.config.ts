import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "komatsusrkyoto.main.jp",
      },
    ],
  },
};

export default nextConfig;
