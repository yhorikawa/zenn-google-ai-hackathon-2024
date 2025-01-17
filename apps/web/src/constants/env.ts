//INFO: 環境変数があればここに作って読み込んでください
export const isBuildMode = process.env.NODE_ENV === "production";

export const BASE_URL = "https://xxxx.com";
export const APPLICATION_URL =
  process.env.NEXT_PUBLIC_APPLICATION_URL ?? "http://localhost:3001";
export const BACKEND_URL =
  process.env.NEXT_PUBLIC_BACKEND_URL ?? "http://localhost:3000";
