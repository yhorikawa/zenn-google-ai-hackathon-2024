import { FirstParagraph } from "@/components/FirstParagraph";
import { TopicTitle } from "@/components/TopicTitle";
import { dateFormatFull } from "@/util/date";
import { prisma } from "@repo/database";
import Image from "next/image";
import { notFound } from "next/navigation";
import { NextAndPrevArticleLink } from "./_components/NextAndPrevLink/NextAndPrevLink";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const article = await prisma.article.findFirst({
    where: {
      id,
    },
  });
  if (!article) notFound();

  return (
    <main className="grid gap-y-6 px-4 pb-4 lg:px-16 lg:pb-16 justify-items-center">
      <p className="font-light text-sm mt-6 text-center">
        {dateFormatFull(article.date)}
      </p>
      <div className="grid gap-y-12">
        {article.contents.map(({ title, content, image }) => {
          return (
            <div className="grid gap-y-6" key={title}>
              <TopicTitle title={title} />
              {image && (
                <Image
                  src={image || "/placeholder.svg"}
                  alt={title || "画像"}
                  className="w-full"
                  height="448"
                  width="896"
                />
              )}
              <FirstParagraph text={content} />
            </div>
          );
        })}
      </div>
      <NextAndPrevArticleLink date={article.date} />
    </main>
  );
};

export default Page;
