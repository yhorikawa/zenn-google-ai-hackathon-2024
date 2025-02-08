import { EDITORIAL_PROMPT, TITLE_PROMPT } from "./constants/prompt.js";
import { gemini } from "./lib/gemini.js";
import { parse } from "./ parse.js";
import type { ContentType } from "./types.js";

export const getEditorial = async (
  contents: ContentType[],
): Promise<ContentType[]> => {
  console.log("--- Editorial ---");
  const content = await gemini(`
  ${EDITORIAL_PROMPT}
  ${contents.map(({ content }) => content).join("\n")}
  `);

  const title = await gemini(`
  ${TITLE_PROMPT}
  ${contents.map(({ content }) => content).join("\n")}
  `);
  return parse([{ title, content }]);
};
