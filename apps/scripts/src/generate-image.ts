import { createVertex } from "@ai-sdk/google-vertex";
import { Storage } from "@google-cloud/storage";
import {
  type Experimental_GeneratedImage as GeneratedImage,
  experimental_generateImage as generateImage,
} from "ai";

export const getGenerateImage = async (prompt: string) => {
  // biome-ignore lint/complexity/useLiteralKeys: .env
  const appCredentials = Bun.env["GOOGLE_APPLICATION_CREDENTIALS"]
    ? // biome-ignore lint/complexity/useLiteralKeys: <explanation>
      JSON.parse(Bun.env["GOOGLE_APPLICATION_CREDENTIALS"])
    : undefined;
  const vertex = createVertex({
    project: "sodium-platform-447711-n6",
    location: "us-central1",
    googleAuthOptions: {
      credentials: {
        client_email: appCredentials.client_email,
        private_key: appCredentials.private_key,
      },
    },
  });
  const { image } = await generateImage({
    model: vertex.image("imagen-3.0-generate-002"),
    prompt,
    aspectRatio: "16:9",
    providerOptions: {
      vertex: {
        // https://cloud.google.com/vertex-ai/generative-ai/docs/model-reference/imagen-api#parameter_list
        addWatermark: false,
      },
    },
  });

  const imagePath = await uploadImage(image);
  return imagePath;
};

const uploadImage = async (image: GeneratedImage) => {
  // biome-ignore lint/complexity/useLiteralKeys: <explanation>
  const appCredentials = Bun.env["GOOGLE_APPLICATION_CREDENTIALS"]
    ? // biome-ignore lint/complexity/useLiteralKeys: .env
      JSON.parse(Bun.env["GOOGLE_APPLICATION_CREDENTIALS"])
    : undefined;
  const storage = new Storage({
    credentials: appCredentials,
  });
  const bucketName = "zenn-ai-hackathon-2024-web-assets";
  const bucket = storage.bucket(bucketName);
  const uuid = crypto.randomUUID();
  const filename = `images/${uuid}.png`;
  const file = bucket.file(filename);
  const buffer = Buffer.from(image.base64, "base64");
  const options = {
    metadata: {
      contentType: "image/png",
    },
  };
  await file.save(buffer, options);
  const publicUrl = `https://storage.googleapis.com/${bucket.name}/${filename}`;
  return publicUrl;
};
