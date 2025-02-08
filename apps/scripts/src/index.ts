import { match } from "ts-pattern";
import { convertContent } from "./covert-content.js";
import { getProjectTopix } from "./get-project-topix.js";
import { insert } from "./insert.js";

type ContentType = string | undefined;

// 以下で個別に叩けます。引数無しで全て通しで叩く想定です
// bun run ./src/index contentType(project-topix)
const main = async () => {
  const contentType: ContentType = Bun.argv[2];
  match(contentType)
    .with("project-topix", getProjectTopix)
    .otherwise(async () => {
      const projectTopix = await getProjectTopix();
      const projectTopix2 = await getProjectTopix();
      const convertedContent = convertContent(projectTopix, ...projectTopix2);
      insert(convertedContent);
    });
};

main();
