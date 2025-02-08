import type { ContentType } from "./types.js";

export const convertContent = (...contents: ContentType[][]) => {
  return contents.flat();
};
