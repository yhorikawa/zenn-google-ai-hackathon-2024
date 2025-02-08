import { NEWSTITLE_PROMPT } from "./constants/prompt.js";
import { gemini } from "./lib/gemini.js";
import type { ContentType } from "./types.js";

export const generateTitle = async (contents: ContentType[]) => {
  const headingList = contents.map(({ title }) => title).join("\n");
  const title = await gemini(`
  ${NEWSTITLE_PROMPT}
  ${headingList}
  `);
  return title;
};
