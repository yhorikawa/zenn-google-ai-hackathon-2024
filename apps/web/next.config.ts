import path from "node:path";
import { fileURLToPath } from "node:url";
import type { NextConfig } from "next/types";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "storage.googleapis.com",
        port: "",
      },
    ],
  },
  reactStrictMode: true,
  transpilePackages: [],
  output: "standalone",
  outputFileTracingRoot: path.join(__dirname, "../../"),
  experimental: {
    serverActions: {
      allowedOrigins: [
        "localhost:3001",
        "*", // 本当はorigin制限したほうがいい
      ],
    },
  },
};

export default nextConfig;
