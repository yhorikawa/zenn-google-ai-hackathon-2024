import { MainBlogCard } from "@/components/MainBlogCard/";
import { SubBlogCard } from "@/components/SubBlogCard/";
import { LoadMoreButton } from "@/components/base-ui/LoadMoreButton";
import { Header } from "@/components/layouts/Header/";
import { prisma } from "@repo/database";

const Page = async () => {
  const articles = await prisma.article.findMany();

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <ul className="grid grid-cols-1 md:grid-cols-2 column-x-4">
          {articles.map((article, index) =>
            index === 0 ? (
              <MainBlogCard
                key={article.id}
                href={`/articles/${article.date}`}
                thumbnail={article.thumbnail ?? "/default-thumbnail.jpg"}
                title={article.title}
                date={article.date}
              />
            ) : (
              <SubBlogCard
                key={article.id}
                href={`/articles/${article.date}`}
                thumbnail={article.thumbnail ?? "default-thumbnail.jpg"}
                title={article.title}
                date={article.date}
              />
            ),
          )}
        </ul>
        <div className="text-center">
          <LoadMoreButton />
        </div>
      </main>
    </>
  );
};

export default Page;
