import { Header } from "@/components/layouts/Header/";
import { prisma } from "@repo/database";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

type PageParams = {
  date: string;
};

export default async function Page({ params }: { params: PageParams }) {
  const { date } = params;

  const article = await prisma.article.findFirst({
    where: { date: date },
    include: {
      contents: {
        include: {
          links: true,
        },
      },
    },
  });

  if (!article) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1>{article.title}</h1>
        <p>{article.date}</p>
        <img src={article.thumbnail ?? "/default-thumbnail.jpg"} alt="" />
        <div>
          {article.contents.map((content) => (
            <div key={content.id}>
              <h2>{content.title}</h2>
              <p>{content.content}</p>
              <img src={content.image} alt="" />
              <ul>
                {content.links.map((link) => (
                  <li key={link.id}>
                    <a href={link.url}>{link.url}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
