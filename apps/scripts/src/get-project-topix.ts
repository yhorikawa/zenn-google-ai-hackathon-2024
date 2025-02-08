import { fetch } from "./fetch/fetch-project-topix.js";
import { parse } from "./parse/ parse-project-topix.js";
import type { ContentType } from "./types.js";

export const getProjectTopix = async (): Promise<ContentType[]> => {
  console.log("---Project Topix---");
  const fetchData = await fetch(2, []);
  return parse(fetchData);
};
