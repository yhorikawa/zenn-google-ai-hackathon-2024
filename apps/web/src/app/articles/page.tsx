import { getArticlesWithoutContents } from "@/actions/articles";
import { ArticleList } from "@/components/ArticleList";
import { Header } from "@/components/layouts/Header";
import { prisma } from "@repo/database";

export const dynamic = "force-dynamic";

const Page = async () => {
  const articlesCount = await prisma.article.count();
  const initialArticles = await getArticlesWithoutContents();

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <ArticleList
          initialArticles={initialArticles}
          articlesCount={articlesCount}
        />
      </main>
    </>
  );
};

export default Page;
