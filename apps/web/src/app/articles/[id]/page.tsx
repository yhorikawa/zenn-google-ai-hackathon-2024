import { FirstParagraph } from "@/components/FirstParagraph";
import { TopicTitle } from "@/components/TopicTitle";
import { Header } from "@/components/layouts/Header/";
import { dateFormatFull } from "@/util/date";
import { prisma } from "@repo/database";
import Image from "next/image";
import { notFound } from "next/navigation";

export const Page = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const article = await prisma.article.findFirst({
    where: {
      id,
    },
  });
  if (!article) notFound();

  return (
    <>
      <Header />

      <main className="grid gap-y-6 mx-12">
        <p className="font-light text-sm">{dateFormatFull(article.date)}</p>
        <div className="grid gap-y-12">
          {article.contents.map(({ title, content, image }) => {
            return (
              <div className="grid gap-y-6" key={title}>
                <TopicTitle title={title} />
                {image && (
                  <Image
                    src={image}
                    alt={title || "画像"}
                    height="448"
                    width="896"
                  />
                )}
                <FirstParagraph text={content} />
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
};

export default Page;
