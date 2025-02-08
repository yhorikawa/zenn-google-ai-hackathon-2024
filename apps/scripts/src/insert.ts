import { prisma } from "@repo/database";
import type { ContentType } from "./types.js";

export const insert = async (contents: ContentType[]) => {
  console.log("insert", contents);
  await prisma.article.create({
    data: {
      title: "xxxxx1",
      date: "1997-01-02",
      contents: contents.map((item) => {
        return {
          title: item.title,
          content: item.content,
          image: item.image || "",
          links: item.links || [],
        };
      }),
    },
  });
};
