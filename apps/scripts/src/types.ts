import type {
  VertexInit,
  ModelParams as vertexAiModelParams,
  GenerateContentRequest as vertexaiGenerateContentRequest,
} from "@google-cloud/vertexai";
import type {
  Part,
  GenerateContentRequest as geminiGenerateContentRequest,
  ModelParams as generativeAiModelParams,
} from "@google/generative-ai";

export type geminiPrompt =
  | geminiGenerateContentRequest
  | string
  | Array<string | Part>;
export type vertexAiPrompt = vertexaiGenerateContentRequest | string;

export interface Config {
  geminiConfig: GeminiConfig;
  vertexAiConfig: VertexAiConfig;
}

export interface GeminiConfig {
  apiKey: string;
  modelParams: generativeAiModelParams;
}

export interface VertexAiConfig {
  vertexInit: VertexInit;
  modelParams: vertexAiModelParams;
}
