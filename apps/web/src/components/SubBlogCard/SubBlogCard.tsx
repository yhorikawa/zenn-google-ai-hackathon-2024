type BlogCardProps = {
  href: string;
  thumbnail: string;
  title: string;
  date: string;
};

export const SubBlogCard = ({
  href,
  thumbnail,
  title,
  date,
}: BlogCardProps) => {
  return (
    <li className="break-inside-avoid border-t-2 border-gray-200 group">
      <a href={href} className="flex py-4">
        <div className="w-[100px] flex-shrink-0">
          <img
            src={thumbnail ? `./${thumbnail}` : "/placeholder.svg"}
            alt={title}
            className="object-cover aspect-square"
            width={100}
            height={100}
          />
        </div>
        <div className="pl-4">
          <h2 className="text-lg font-bold mb-2 line-clamp-3 group-hover:text-primary transition-colors">
            {title}
          </h2>
          <time dateTime={date} className="text-muted-foreground text-sm">
            {date}
          </time>
        </div>
      </a>
    </li>
  );
};
