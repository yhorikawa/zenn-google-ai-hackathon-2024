import type { GenerativeModel } from "@google/generative-ai";
import type { geminiPrompt } from "../types";

export class CreateArticle {
  #gemini: GenerativeModel;

  constructor(gemini: GenerativeModel) {
    this.#gemini = gemini;
  }

  generatePrompt(data: string): geminiPrompt {
    let prompt = "";
    prompt += `today: ${new Date().toDateString()}\n`;
    prompt += `data: ${data}`;
    return prompt;
  }

  async run(data: string) {
    const prompt = this.generatePrompt(data);
    const result = await this.#gemini.generateContent(prompt);
    // TODO: 何が返ってくるか確認し、加工する必要があるなら加工する
    return result.response;
  }
}
