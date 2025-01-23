import config from "./config";
import { geminiModel } from "./llm/gemini";
import { vertexAiModel } from "./llm/vertexAi";
import { CreateArticle } from "./tools/createArticle";
import { DataPicker } from "./tools/dataPicker";
import type { Config } from "./types";

async function main(env: NodeJS.ProcessEnv, config: Config) {
  const generativeModel = vertexAiModel(
    config.vertexAiConfig.vertexInit,
    config.vertexAiConfig.modelParams,
  );
  const gemini = geminiModel(
    config.geminiConfig.apiKey,
    config.geminiConfig.modelParams,
  );

  const data = await new DataPicker(generativeModel).run();
  console.log(data);

  const article = await new CreateArticle(gemini).run(
    data?.candidates
      ?.map(({ content: { parts, role } }) => `${role}:${parts}`)
      .join("\n\n") ?? "",
  );
  console.log(article);
}

await main(process.env, config);
