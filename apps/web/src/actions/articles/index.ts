"use server";

import { prisma } from "@repo/database";

const MAX_COUNT_ARTICLES = 10;

export const getArticlesWithoutContents = async (cursor?: string) => {
  let query = {
    take: MAX_COUNT_ARTICLES,
  };
  if (cursor != null) {
    // 普通にquery['cursor'] = { id: cursor } とすると、型エラーで色々めんどくさかったのでこうする
    // queryに、findManyのargの型を付けたら解決するが、ジェネリクスな型を使っているためどうやら難しそう
    query = Object.assign(query, {
      cursor: { id: cursor },
      where: {
        id: { not: cursor }, // cursorのデータも取得するので、取ってこないようにする
      },
    });
  }
  const articles = await prisma.article.findMany(query);
  return articles.reverse();
};
