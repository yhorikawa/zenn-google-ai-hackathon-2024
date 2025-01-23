type BlogCardProps = {
  href: string;
  imgSrc: string;
  title: string;
  date: string;
};

const MainBlogCard: React.FC<BlogCardProps> = ({
  href,
  imgSrc,
  title,
  date,
}) => {
  return (
    <li>
      <a href={href}>
        <div>
          <img src={imgSrc} alt={title} />
        </div>
        <div>
          <h2>{title}</h2>
          <time dateTime={date}>{date}</time>
        </div>
      </a>
    </li>
  );
};

export default MainBlogCard;
