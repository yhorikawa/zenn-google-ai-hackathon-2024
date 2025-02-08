import { convertContent } from "./covert-content.js";
import { generateTitle } from "./generate-title.js";
import { getAdage } from "./get-adage.js";
import { getEditorial } from "./get-editorial.js";
import { getProfile } from "./get-profile.js";
import { getProjectTopix } from "./get-project-topix.js";
import { insert } from "./insert.js";

const main = async () => {
  const projectTopix = await getProjectTopix();
  const editorial = await getEditorial(projectTopix);
  const adage = await getAdage();
  const profile = await getProfile();
  const convertedContent = convertContent(
    projectTopix,
    editorial,
    adage,
    profile,
  );
  const title = await generateTitle(convertedContent);

  insert(title, convertedContent);
};

main();
