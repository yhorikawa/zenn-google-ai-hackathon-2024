import { getArticlesWithoutContents } from "@/actions/articles";
import { ArticleList } from "@/components/ArticleList";
import { prisma } from "@repo/database";

const Page = async () => {
  const articlesCount = await prisma.article.count();
  const initialArticles = await getArticlesWithoutContents();

  return (
    <main className="container mx-auto px-4 py-8">
      <ArticleList
        initialArticles={initialArticles}
        articlesCount={articlesCount}
      />
    </main>
  );
};

export default Page;
