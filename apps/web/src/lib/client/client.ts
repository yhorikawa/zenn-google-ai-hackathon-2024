import { hc } from "hono/client";
import type { AppType } from "server";
import { BACKEND_URL, isBuildMode } from "../../constants/env";

const cache = (cache: RequestInit["cache"]) => {
  if (!isBuildMode) return "no-store";
  return cache ? cache : "force-cache";
};

export const client = (init?: RequestInit) =>
  hc<AppType>(BACKEND_URL, {
    init: {
      ...init,
      cache: cache(init?.cache),
    },
  });
