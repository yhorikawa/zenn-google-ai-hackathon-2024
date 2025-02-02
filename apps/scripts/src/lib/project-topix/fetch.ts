import { ANSWER_PROMPT, SEARCH_PROMPT } from "../../constants/prompt.js";
import {
  GoogleSearchClient,
  type SearchResponse,
} from "../../lib/agentBuilder.js";
import type { ProjectTopixType } from "./projectTopix.js";

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

type Result = {
  document: {
    id: string;
  };
  snippet?: string;
};

export const fetch = async (): Promise<ProjectTopixType> => {
  console.log("Project Topix");
  const searchResults: SearchResponse =
    await searchClient.search(SEARCH_PROMPT);

  const answerResults: Result[] = searchResults.results.map((result) => ({
    document: {
      id: result.document.id,
    },
    snippet: result.document.derivedStructData.snippets[0]
      ? result.document.derivedStructData.snippets[0].snippet
      : "No Snippppet Available",
  }));

  const generatedAnswer = await searchClient.getGeneratedAnswer(
    SEARCH_PROMPT,
    ANSWER_PROMPT,
    searchResults.queryId,
    searchResults.session,
  );

  // const result = {
  //   searchResults: answerResults,
  //   generatedAnswer: generatedAnswer.answer.answerText,
  // };
  // console.log(result)
  return {
    // FIXME: 分けてfetchして返す
    title: "title",
    content: generatedAnswer.answer.answerText,
  };
};
