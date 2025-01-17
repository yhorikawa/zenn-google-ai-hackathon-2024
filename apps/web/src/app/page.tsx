import { client } from "@/lib/client";
import { Button } from "flowbite-react";
import { SITE_TITLE } from "../constants/site";

const Page = async () => {
  const res = await client().index.$get();
  const data = await res.text();

  return (
    <>
      <div className="flex justify-center shadow bg-slate-200 items-center mt-12 py-8 rounded">
        <h1 className="text-7xl font-bold text-on-surface-primary">
          {SITE_TITLE}
        </h1>
        <p>{data}</p>
      </div>
      <Button>Click me</Button>
    </>
  );
};

export default Page;
