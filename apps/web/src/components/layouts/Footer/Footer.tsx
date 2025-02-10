import { Link } from "@/components/base-ui/Link/Link";
import { SITE_TITLE } from "@/constants/site";

export const Footer = () => {
  return (
    <footer className="grid grid-cols-[1fr_auto_1fr] items-center py-2 border-t-2 outline-variant container mx-auto px-4 lg:px-16 mt-6">
      <div className="col-start-1">
        <Link
          href="/articles"
          className="text-xs md:text-sm underline inline-block"
        >
          Top Page
        </Link>
      </div>
      <div className="text-xs md:text-sm col-start-2 justify-self-center">
        <span>{SITE_TITLE}</span>
      </div>
    </footer>
  );
};
