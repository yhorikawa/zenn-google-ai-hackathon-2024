import { fetch } from "./fetch/fetch-adage.js";
import { parse } from "./parse.js";
import type { ContentType } from "./types.js";

export const getAdage = async (): Promise<ContentType[]> => {
  console.log("--- Adage ---");
  const fetchData = await fetch();
  return parse(fetchData);
};
