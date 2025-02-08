import { prisma } from "@repo/database";
import type { ContentType } from "./types.js";

export const insert = async (title: string, contents: ContentType[]) => {
  console.log("insert", contents);
  try {
    await prisma.article.create({
      data: {
        title,
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
  } catch (e) {
    console.error(e);
  }
};
