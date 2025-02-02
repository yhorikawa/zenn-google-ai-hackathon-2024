import { match } from "ts-pattern";
import { projectTopix } from "./lib/project-topix/index.js";

type ContentType = string | undefined;

// 以下で個別に叩けます。引数無しで全て通しで叩く想定です
// bun run ./src/index contentType(project-topix)
const main = async () => {
  const contentType: ContentType = Bun.argv[2];
  match(contentType)
    .with("project-topix", projectTopix)
    .otherwise(() => {
      projectTopix();
    });
};

main();
