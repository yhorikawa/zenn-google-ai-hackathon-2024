import MainBlogCard from "@/components/MainBlogCard/MainBlogCard";
import SubBlogCard from "@/components/SubBlogCard/SubBlogCard";
import Header from "@/components/layouts/header/header";
import type { Article } from "@/types/type";

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
    id: 1,
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

const Page = async () => {
  return (
    <>
      <Header />
      <ul>
        {articles.map((article, index) =>
          index === 0 ? (
            <MainBlogCard
              key={article.id}
              href=""
              imgSrc={article.imageUrl}
              title={article.title}
              date={article.date}
            />
          ) : (
            <SubBlogCard
              key={article.id}
              href=""
              imgSrc={article.imageUrl}
              title={article.title}
              date={article.date}
            />
          ),
        )}
      </ul>
    </>
  );
};

export default Page;
