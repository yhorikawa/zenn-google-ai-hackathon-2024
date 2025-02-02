import { fetch } from "./fetch.js";
import { insert } from "./insert.js";
import { parse } from "./parse.js";

export type ProjectTopixType = {
  title: string;
  content: string;
};

export const projectTopix = async (): Promise<ProjectTopixType> => {
  console.log("---Project Topix---");
  const fetchData = await fetch();
  const parsedData = parse(fetchData);
  insert(parsedData);
  return parsedData;
};
