import {
  type GenerativeModel,
  type ModelParams,
  VertexAI,
  type VertexInit,
} from "@google-cloud/vertexai";

export function vertexAiModel(
  vertexInit: VertexInit,
  modelParams: ModelParams,
): GenerativeModel {
  const vertexAI = new VertexAI(vertexInit);
  return vertexAI.getGenerativeModel(modelParams);
}
