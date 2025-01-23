import type { Config, GeminiConfig, VertexAiConfig } from "./types";
const geminiConfig: GeminiConfig = {
  apiKey: "my-api-key",
  modelParams: { model: "gemini-pro" },
};

const vertexAiConfig: VertexAiConfig = {
  vertexInit: { project: "my-project-id", location: "us-central1" },
  modelParams: { model: "text-ai" },
};

const config: Config = {
  geminiConfig,
  vertexAiConfig,
};

export default config;
