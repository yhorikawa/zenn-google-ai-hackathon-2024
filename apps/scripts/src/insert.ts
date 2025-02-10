import { prisma } from "@repo/database";
import type { ContentType } from "./types.js";

export const insert = async (
  title: string,
  contents: ContentType[],
  date: Date,
) => {
  console.log("insert", contents);
  try {
    await prisma.article.create({
      data: {
        title: title.replace(/#|\*/g, ""),
        date,
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
