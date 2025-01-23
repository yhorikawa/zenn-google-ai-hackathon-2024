import {
  type GenerativeModel,
  GoogleGenerativeAI,
  type ModelParams,
} from "@google/generative-ai";

export function geminiModel(
  apiKey: string,
  modelParams: ModelParams,
): GenerativeModel {
  const googleGenerativeAI = new GoogleGenerativeAI(apiKey);
  return googleGenerativeAI.getGenerativeModel(modelParams);
}
