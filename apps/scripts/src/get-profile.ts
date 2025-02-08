import { fetch } from "./fetch/fetch-profile.js";
import { parse } from "./ parse.js";
import type { ContentType } from "./types.js";

export const getProfile = async (): Promise<ContentType[]> => {
  console.log("--- Profiile ---");
  const fetchData = await fetch();
  return parse(fetchData);
};
