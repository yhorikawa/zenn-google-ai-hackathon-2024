import { dateFormatShort } from "@/util/date";

type BlogCardProps = {
  href: string;
  imgSrc: string;
  title: string;
  date: Date;
};

export const SubBlogCard = ({ href, imgSrc, title, date }: BlogCardProps) => {
  return (
    <li className="break-inside-avoid border-t-2 outline-variant group">
      <a href={href} className="flex py-4">
        <div className="w-[100px] flex-shrink-0">
          <img
            src={imgSrc || "/placeholder.svg"}
            alt={title}
            className="object-cover aspect-square"
            width={100}
            height={100}
          />
        </div>
        <div className="pl-4">
          <h2 className="text-base lg:text-lg font-bold mb-2 line-clamp-3 group-hover:text-primary transition-colors">
            {title}
          </h2>
          <time
            dateTime={dateFormatShort(date)}
            className="text-muted-foreground text-sm"
          >
            {dateFormatShort(date)}
          </time>
        </div>
      </a>
    </li>
  );
};
