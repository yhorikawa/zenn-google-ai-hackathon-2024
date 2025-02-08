import { fetch } from "./fetch/fetch-project-topix.js";
import { parse } from "./ parse.js";
import type { ContentType } from "./types.js";

const TIMES = 3;

export const getProjectTopix = async (): Promise<ContentType[]> => {
  console.log("---Project Topix---");

  const fetchData = await fetch(TIMES, []);
  return parse(fetchData);
};
