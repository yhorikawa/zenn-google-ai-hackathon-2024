import { MainBlogCard } from "@/components/MainBlogCard/";
import { SubBlogCard } from "@/components/SubBlogCard/";
import { LoadMoreButton } from "@/components/base-ui/LoadMoreButton";
import { Header } from "@/components/layouts/Header/";
import type { Article } from "@/types/type";
import type { NextPage } from "next";

const articles: Article[] = [
  {
    id: 1,
    title:
      "Sugoi Software、リリース直前に重大バグ発覚も迅速対応！来週のリリースは予定通り",
    date: "2025-02-10",
    imageUrl: "./sample.webp",
  },
  {
    id: 2,
    title:
      "Sugoi Software、リリース直前に重大バグ発覚も迅速対応！来週のリリースは予定通り",
    date: "2025-02-10",
    imageUrl: "./sample.webp",
  },
  {
    id: 3,
    title:
      "Sugoi Software、リリース直前に重大バグ発覚も迅速対応！来週のリリースは予定通り",
    date: "2025-02-10",
    imageUrl: "./sample.webp",
  },
  {
    id: 4,
    title:
      "Sugoi Software、リリース直前に重大バグ発覚も迅速対応！来週のリリースは予定通り",
    date: "2025-02-10",
    imageUrl: "./sample.webp",
  },
  {
    id: 5,
    title:
      "Sugoi Software、リリース直前に重大バグ発覚も迅速対応！来週のリリースは予定通り",
    date: "2025-02-10",
    imageUrl: "./sample.webp",
  },
  {
    id: 6,
    title:
      "Sugoi Software、リリース直前に重大バグ発覚も迅速対応！来週のリリースは予定通り",
    date: "2025-02-10",
    imageUrl: "./sample.webp",
  },
  {
    id: 7,
    title:
      "Sugoi Software、リリース直前に重大バグ発覚も迅速対応！来週のリリースは予定通り",
    date: "2025-02-10",
    imageUrl: "./sample.webp",
  },
  {
    id: 8,
    title:
      "Sugoi Software、リリース直前に重大バグ発覚も迅速対応！来週のリリースは予定通り",
    date: "2025-02-10",
    imageUrl: "./sample.webp",
  },
  {
    id: 9,
    title:
      "Sugoi Software、リリース直前に重大バグ発覚も迅速対応！来週のリリースは予定通り",
    date: "2025-02-10",
    imageUrl: "./sample.webp",
  },
  {
    id: 10,
    title:
      "Sugoi Software、リリース直前に重大バグ発覚も迅速対応！来週のリリースは予定通り",
    date: "2025-02-10",
    imageUrl: "./sample.webp",
  },
  {
    id: 11,
    title:
      "Sugoi Software、リリース直前に重大バグ発覚も迅速対応！来週のリリースは予定通り",
    date: "2025-02-10",
    imageUrl: "./sample.webp",
  },
  {
    id: 12,
    title:
      "Sugoi Software、リリース直前に重大バグ発覚も迅速対応！来週のリリースは予定通り",
    date: "2025-02-10",
    imageUrl: "./sample.webp",
  },
];

const Page: NextPage = async () => {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <ul className="grid grid-cols-1 md:grid-cols-2 column-x-4">
          {articles.map((article, index) =>
            index === 0 ? (
              <MainBlogCard
                key={article.id}
                href={`/articles/${article.id}`}
                imgSrc={article.imageUrl}
                title={article.title}
                date={article.date}
              />
            ) : (
              <SubBlogCard
                key={article.id}
                href={`/articles/${article.id}`}
                imgSrc={article.imageUrl}
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
