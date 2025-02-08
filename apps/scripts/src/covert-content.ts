import type { ContentType } from "./types.js";

export const convertContent = (
  content: ContentType[],
  ...contents: ContentType[][]
) => {
  const convertedContent = contents.reduce((acc, currentContent) => {
    acc.push(...currentContent);
    return acc;
  }, content);
  return convertedContent;
};
