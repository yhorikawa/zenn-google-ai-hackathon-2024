import {
  ANSWER_PROMPT,
  SEARCH_PROMPT,
  TITLE_PROMPT,
} from "../constants/prompt.js";
import {
  GoogleSearchClient,
  type SearchResponse,
} from "../lib/agentBuilder.js";
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

export const fetch = async (times: number, contents: ContentType[], ...additionalPrompt: string[]): Promise<ContentType[]> => {
  console.log("Project Topix");

  const prompt = additionalPrompt.length
    ? `
${SEARCH_PROMPT}
- 過去に抽出内容と重複しないよう、新規性のある情報を中心にする

【過去に抽出された事業トピックス】
${additionalPrompt.join("\n")}
`
    : SEARCH_PROMPT;

  console.log(prompt);
  const searchResults: SearchResponse = await searchClient.search(prompt);

  // const answerResults: Result[] = searchResults.results.map((result) => ({
  //   document: {
  //     id: result.document.id,
  //   },
  //   snippet: result.document.derivedStructData.snippets[0]
  //     ? result.document.derivedStructData.snippets[0].snippet
  //     : "No Snippppet Available",
  // }));

  const generatedAnswer = await searchClient.getGeneratedAnswer(
    prompt,
    ANSWER_PROMPT,
    searchResults.queryId,
    searchResults.session,
  );

  const generatedTitle = await searchClient.getGeneratedAnswer(
    prompt,
    TITLE_PROMPT,
    searchResults.queryId,
    searchResults.session,
  );

  // const result = {
  //   searchResults: answerResults,
  //   generatedAnswer: generatedAnswer.answer.answerText,
  // };

  const results = [{
    title: generatedTitle.answer.answerText,
    content: generatedAnswer.answer.answerText,
  }, ...contents];

  return times > 1 ? await fetch(times - 1, results, results.map(({content}) => content).join('\n')) : results
};
