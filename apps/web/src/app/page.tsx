import { SITE_TITLE } from "../constants/site";

const Page = () => {
  return (
    <div className="flex justify-center shadow bg-slate-200 items-center mt-12 py-8 rounded">
      <h1 className="text-7xl font-bold text-on-surface-primary">
        {SITE_TITLE}
      </h1>
    </div>
  );
};

export default Page;
