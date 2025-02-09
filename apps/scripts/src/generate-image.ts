import { createVertex } from "@ai-sdk/google-vertex";
import { Storage } from "@google-cloud/storage";
import {
  type Experimental_GeneratedImage as GeneratedImage,
  experimental_generateImage as generateImage,
} from "ai";

export const getGenerateImage = async (prompt: string) => {
  const vertex = createVertex({
    project: "sodium-platform-447711-n6",
    location: "us-central1",
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
  const storage = new Storage();
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
