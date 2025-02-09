import { createVertex } from "@ai-sdk/google-vertex";
import { generateText } from "ai";

export const gemini = async (prompt: string) => {
  // biome-ignore lint/complexity/useLiteralKeys: .env
  const appCredentials = Bun.env["GOOGLE_APPLICATION_CREDENTIALS"]
    ? // biome-ignore lint/complexity/useLiteralKeys: .env
      JSON.parse(Bun.env["GOOGLE_APPLICATION_CREDENTIALS"])
    : undefined;
  const vertex = createVertex({
    project: "sodium-platform-447711-n6",
    location: "asia-northeast1",
    googleAuthOptions: {
      credentials: appCredentials,
    },
  });

  const { text } = await generateText({
    model: vertex("gemini-1.5-pro"),
    messages: [
      {
        role: "user",
        content: [
          {
            type: "text",
            text: prompt,
          },
        ],
      },
    ],
  });
  return text;
};
