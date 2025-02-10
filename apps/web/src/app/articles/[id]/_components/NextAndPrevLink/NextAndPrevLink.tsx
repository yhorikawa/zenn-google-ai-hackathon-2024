import { Link } from "@/components/base-ui/Link";
import { prisma } from "@repo/database";

export const NextAndPrevArticleLink = async ({ date }: { date: Date }) => {
  const nextLink = await prisma.article.findFirst({
    where: {
      date: {
        lt: new Date(date),
      },
    },
  });

  const prevLink = await prisma.article.findFirst({
    where: {
      date: {
        gt: new Date(date),
      },
    },
  });

  return (
    <div className="flex justify-between">
      {nextLink ? (
        <Link
          className="p-3 border rounded-sm border-outline-variant flex gap-x-1"
          href={`/articles/${nextLink.id}`}
        >
          <span>←</span>
          <span>前の記事へ</span>
        </Link>
      ) : (
        // FIXME: すみません、CSSサボりました
        <p> </p>
      )}
      {prevLink ? (
        <Link
          className="p-3 border rounded-sm border-outline-variant flex gap-x-1"
          href={`/articles/${prevLink.id}`}
        >
          <span> 次の記事へ</span>
          <span>→</span>
        </Link>
      ) : null}
    </div>
  );
};
