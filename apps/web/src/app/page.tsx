import Link from "next/link";
import { SITE_TITLE } from "../constants/site";

const Page = async () => {
  return (
    <>
      <div className="flex justify-center shadow bg-slate-200 items-center mt-12 py-8 rounded">
        <h1 className="text-7xl font-bold text-on-surface-primary">
          {SITE_TITLE}
        </h1>
        <p>hoge</p>
      </div>
      <Link href="/articles/" className="px-2 py-1 bg-cyan-600 shadow">
        Click me
      </Link>
    </>
  );
};

export default Page;
