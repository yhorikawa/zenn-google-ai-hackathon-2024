import { fetch } from "./fetch/fetch-project-topix.js";
import { parse } from "./parse/ parse-project-topix.js";
import type { ContentType } from "./types.js";

export const getProjectTopix = async (): Promise<ContentType[]> => {
  console.log("---Project Topix---");
  const fetchData = await fetch();
  const fetchData2 = await fetch(fetchData.content);
  const fetchData3 = await fetch(fetchData.content, fetchData2.content);
  const parsedData = parse([fetchData, fetchData2, fetchData3]);
  console.log("-------");
  console.log(parsedData);
  return parsedData;
};
