import type { GenerativeModel } from "@google-cloud/vertexai";
import type { vertexAiPrompt } from "../types";

export class DataPicker {
  #vertexAI: GenerativeModel;

  constructor(vertexAI: GenerativeModel) {
    this.#vertexAI = vertexAI;
  }

  generatePrompt(): vertexAiPrompt {
    let prompt = "";
    prompt += `today: ${new Date().toDateString()}`;
    return prompt;
  }

  async run() {
    const prompt = this.generatePrompt();
    const result = await this.#vertexAI.generateContent(prompt);
    // TODO: 何が返ってくるか確認し、加工する必要があるなら加工する
    return result.response;
  }
}
