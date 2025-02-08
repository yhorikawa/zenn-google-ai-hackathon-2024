import { FirstParagraph } from "@/components/FirstParagraph";
import { TopicTitle } from "@/components/TopicTitle";
import { Header } from "@/components/layouts/Header/";
import { prisma } from "@repo/database";
import Image from "next/image";
import { notFound } from "next/navigation";
import SampleImage from "public/sample.webp";

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
        <p className="font-light text-sm">date: {data.date}</p>
        <div className="grid gap-y-12">
          {data.contents.map(({ title, content, image }) => {
            return (
              <div className="grid gap-y-6" key={title}>
                <TopicTitle title={title} />
                <Image
                  src={image || SampleImage}
                  alt={title || "画像"}
                  height="448"
                  width="896"
                />
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
