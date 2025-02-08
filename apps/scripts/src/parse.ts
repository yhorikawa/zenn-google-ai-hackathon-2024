import type { ContentType } from "./types.js";

export const parse = (content: ContentType[]) => {
  return content.map(({ title, content, image }) => ({
    title,
    content,
    image: image || "",
    links: [],
  }));
};
