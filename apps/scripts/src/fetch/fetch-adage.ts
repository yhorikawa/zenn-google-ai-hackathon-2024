import {
  ADAGE_PROMPT,
  ADAGE_SEARCH_PROMPT,
  TITLE_PROMPT,
} from "../constants/prompt.js";
import {
  GoogleSearchClient,
  type SearchResponse,
} from "../lib/agentBuilder.js";
import { gemini } from "../lib/gemini.js";
import type { ContentType } from "../types.js";

const searchClient = new GoogleSearchClient({
  // biome-ignore lint/complexity/useLiteralKeys: .env
  projectId: Bun.env["AGENT_BUILDER_PROJECT_ID"] || "",
  // biome-ignore lint/complexity/useLiteralKeys: .env
  location: Bun.env["AGENT_BUILDER_LOCATION"] || "global",
  // biome-ignore lint/complexity/useLiteralKeys: .env
  collectionId: Bun.env["AGENT_BUILDER_COLLECTION_ID"] || "",
  // biome-ignore lint/complexity/useLiteralKeys: .env
  engineId: Bun.env["AGENT_BUILDER_ENGINE_ID"] || "",
});

// type Result = {
//   document: {
//     id: string;
//   };
//   snippet?: string;
// };

export const fetch = async (): Promise<ContentType[]> => {
  console.log("Adage");

  const searchResults: SearchResponse =
    await searchClient.search(ADAGE_SEARCH_PROMPT);

  // const answerResults: Result[] = searchResults.results.map((result) => ({
  //   document: {
  //     id: result.document.id,
  //   },
  //   snippet: result.document.derivedStructData.snippets[0]
  //     ? result.document.derivedStructData.snippets[0].snippet
  //     : "No Snippppet Available",
  // }));

  const generatedAnswer = await searchClient.getGeneratedAnswer(
    ADAGE_SEARCH_PROMPT,
    ADAGE_PROMPT,
    searchResults.queryId,
    searchResults.session,
  );

  const generatedTitle = await gemini(`
  ${TITLE_PROMPT}
  ${generatedAnswer.answer.answerText}
  `);

  const results = [
    {
      title: generatedTitle,
      content: generatedAnswer.answer.answerText,
    },
  ];

  return results;
};
