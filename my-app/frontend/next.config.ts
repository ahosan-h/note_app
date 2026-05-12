import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  experimental: {
    serverActions: {
      allowedOrigins: [
        "573d34ff-3000.inc1.devtunnels.ms", // Add your tunnel URL here
        "573d34ff-3001.inc1.devtunnels.ms",
        "localhost:3000",
        "localhost:2017"
      ],
    },
  },
  // ADD THIS SECTION:
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
};

export default nextConfig;
