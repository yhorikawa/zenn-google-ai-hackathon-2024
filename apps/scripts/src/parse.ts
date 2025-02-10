import type { ContentType } from "./types.js";

const REGEX = /#|\*/g;

export const parse = (content: ContentType[]) => {
  return content.map(({ title, content, image }) => ({
    title: title.replace(REGEX, ""),
    content: content.replace(REGEX, ""),
    image: image || "",
    links: [],
  }));
};
