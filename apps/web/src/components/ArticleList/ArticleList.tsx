"use client";

import { getArticlesWithoutContents } from "@/actions/articles";
import { MainBlogCard } from "@/components/MainBlogCard";
import { SubBlogCard } from "@/components/SubBlogCard";
import { LoadMoreButton } from "@/components/base-ui/LoadMoreButton";
import type { Article } from "@repo/database";
import { useState } from "react";

interface ArticlesListProps {
  initialArticles: Omit<Article, "contents">[];
  articlesCount: number;
}

export const ArticleList = ({
  initialArticles,
  articlesCount,
}: ArticlesListProps) => {
  const [articles, setArticles] = useState(initialArticles);
  const [loading, setLoading] = useState(false);

  const loadMoreArticles = async () => {
    if (articles.length === 0) return;
    setLoading(true);
    try {
      const lastCursor = articles.at(-1);
      // safe: articles.length === 0をしているので、nullにはならないが、ts側はわからないのでnullを外す
      // biome-ignore lint/style/noNonNullAssertion: <explanation>
      const res = await getArticlesWithoutContents(lastCursor!.id);
      setArticles((prev) => [...prev, ...res]);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ul className="grid grid-cols-1 md:grid-cols-2 column-x-4">
        {articles.map((article, index) =>
          index === 0 ? (
            <MainBlogCard
              key={article.id}
              href={`/articles/${article.id}`}
              imgSrc={"./sample.webp"}
              title={article.title}
              date={article.date}
            />
          ) : (
            <SubBlogCard
              key={article.id}
              href={`/articles/${article.id}`}
              imgSrc={"./sample.webp"}
              title={article.title}
              date={article.date}
            />
          ),
        )}
      </ul>
      {articlesCount !== articles.length && (
        <div className="text-center">
          <LoadMoreButton onClick={loadMoreArticles} disabled={loading} />
        </div>
      )}
    </>
  );
};
