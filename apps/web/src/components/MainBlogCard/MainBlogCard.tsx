import { dateFormatFull } from "@/util/date";

type BlogCardProps = {
  href: string;
  imgSrc: string;
  title: string;
  date: Date;
};

export const MainBlogCard = ({ href, imgSrc, title, date }: BlogCardProps) => {
  return (
    <li className="col-span-full mb-6">
      <a href={href} className="">
        <div className="">
          <img
            src={imgSrc || "/placeholder.svg"}
            alt={title}
            className="w-full"
          />
        </div>
        <div className="flex flex-col justify-center mt-2">
          <h2 className="text-2xl md:text-4xl font-bold leading-normal">
            {title}
          </h2>
          <div className="mt-2">
            <time
              dateTime={dateFormatFull(date)}
              className="text-muted-foreground opacity-60"
            >
              {dateFormatFull(date)}
            </time>
          </div>
        </div>
      </a>
    </li>
  );
};
