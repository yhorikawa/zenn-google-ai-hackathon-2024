import type { ImageResponseOptions } from "next/server";
import type { JSX } from "react";

type ImageResponse = {
  element: JSX.Element;
  options: ImageResponseOptions;
};

async function DefaultImage({
  text,
}: { text: string }): Promise<ImageResponse> {
  const options: ImageResponseOptions = {
    width: 1200,
    height: 630,
  };

  const element = (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img
        src="https://storage.googleapis.com/zenn-ai-hackathon-2024-web-assets/images/proverb-bg.png"
        alt={text}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
      <p
        style={{
          position: "absolute",
          top: "14%",
          fontSize: "60px",
          fontWeight: "bold",
        }}
      >
        今週の格言
      </p>
      <p
        style={{
          position: "absolute",
          top: "43%",
          width: "70%",
          wordWrap: "break-word",
          fontSize: "48px",
          textAlign: "center",
        }}
      >
        {text}
      </p>
    </div>
  );

  return {
    element,
    options,
  };
}

export default DefaultImage;
