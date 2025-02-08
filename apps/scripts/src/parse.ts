import type { ContentType } from "./types.js";

export const parse = (content: ContentType[]) => {
  return content.map(({ title, content }) => ({
    title,
    content,
    image: "",
    links: [],
  }));
};
