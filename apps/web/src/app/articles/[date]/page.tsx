import { Header } from "@/components/layouts/Header/";
import { prisma } from "@repo/database";
import { notFound } from "next/navigation";

export const Page = async () => {
  const data = await prisma.article.findFirst({
    where: {
      date: "1997-01-02",
    },
  });
  if (!data) notFound();

  return (
    <>
      <Header />

      <main className="grid gap-y-6 mx-12">
        <h1 className="font-bold text-2xl">title: {data.title}</h1>
        <p className="font-light text-sm">date: {data.date}</p>
        {data.contents.map(({ title, content, image }) => {
          return (
            <div
              className="shadow-lg bg-white p-4 grid gap-y-4 rounded"
              key={title}
            >
              <h2 className="font-bold text-xl">title:{title}</h2>
              <p>content:{content}</p>
              <p>image url:{image ? image : "なし"}</p>
            </div>
          );
        })}
      </main>
    </>
  );
};

export default Page;
