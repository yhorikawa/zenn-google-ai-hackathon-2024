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
        backgroundColor: "#0ff",
        backgroundSize: "100% 100%",
        height: "100%",
        width: "100%",
        display: "flex",
        textAlign: "left",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          backgroundSize: "100% 100%",
          height: "90%",
          width: "95%",
          display: "flex",
          textAlign: "left",
          alignItems: "flex-start",
          justifyContent: "center",
          flexDirection: "column",
          flexWrap: "nowrap",
        }}
      >
        <div
          style={{
            width: "100%",
            fontSize: 60,
            fontStyle: "normal",
            fontWeight: "bold",
            color: "#000",
            padding: "0 120px",
            lineHeight: 1.3,
            borderRadius: "15px",
            marginBottom: "30px",
            wordWrap: "break-word",
          }}
        >
          {text}
        </div>
        <div
          style={{
            width: "100%",
            fontSize: 40,
            fontStyle: "normal",
            fontWeight: "bold",
            color: "#000",
            padding: "0 120px",
            lineHeight: 1.3,
          }}
        >
          おじさんがいました
        </div>
      </div>
    </div>
  );

  return {
    element,
    options,
  };
}

export default DefaultImage;
