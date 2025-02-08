import { VertexAI } from "@google-cloud/vertexai";

export const gemini = async (prompt: string) => {
  const vertexAI = new VertexAI({
    project: "sodium-platform-447711-n6",
    location: "asia-northeast1",
  });

  const generativeModel = vertexAI.getGenerativeModel({
    model: "gemini-1.5-flash-001",
  });

  const resp = await generativeModel.generateContent(prompt);
  const contentResponse = await resp.response;
  return contentResponse.candidates?.[0]?.content.parts[0]?.text || "";
};
