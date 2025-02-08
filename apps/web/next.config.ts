import path from "node:path";
import { fileURLToPath } from "node:url";
import type { NextConfig } from "next/types";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const nextConfig: NextConfig = {
  reactStrictMode: true,
  transpilePackages: [],
  output: "standalone",
  outputFileTracingRoot: path.join(__dirname, "../../"),
  experimental: {
    serverActions: {
      allowedOrigins: [
        "*", // 本当はorigin制限する必要がある
      ],
    },
  },
};

export default nextConfig;
