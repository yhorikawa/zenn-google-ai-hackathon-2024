import type { ImageResponseOptions } from "next/server";
import type { JSX } from "react";

type ImageResponse = {
  element: JSX.Element;
  options: ImageResponseOptions;
};

export async function fetchFont(): Promise<ArrayBuffer | null> {
  const googleFontsUrl =
    "https://fonts.googleapis.com/css2?family=Shippori+Mincho:wght@700&display=swap";

  const data = await fetch(googleFontsUrl, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_8; de-at) AppleWebKit/533.21.1 (KHTML, like Gecko) Version/5.0.5 Safari/533.21.1",
    },
    cache: "force-cache",
  });

  const css = await data.text();

  const resource = css.match(
    /src: url\((.+)\) format\('(opentype|truetype)'\)/,
  );

  if (!resource) return null;
  if (!resource[1]) return null;
  const res = await fetch(resource[1]);
  return res.arrayBuffer();
}

async function DefaultImage({
  text,
}: { text: string }): Promise<ImageResponse> {
  const fontData = await fetchFont();

  const options: ImageResponseOptions = {
    width: 1200,
    height: 630,
    fonts: [
      {
        name: "Shippori Mincho",
        data: fontData || new ArrayBuffer(0),
        weight: 700,
      },
    ],
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
        fontFamily: "Shippori Mincho",
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
          fontFamily: "Shippori Mincho",
        }}
      >
        今週の格言
      </p>
      <p
        style={{
          width: "70%",
          wordWrap: "break-word",
          fontSize: "48px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          top: "40%",
          textAlign: "center",
          fontFamily: "Shippori Mincho",
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
