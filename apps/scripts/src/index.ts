import { parseArgs } from "node:util";
import { z } from "zod";

import { convertContent } from "./covert-content.js";
import { generateTitle } from "./generate-title.js";
import { getAdage } from "./get-adage.js";
import { getEditorial } from "./get-editorial.js";
import { getProfile } from "./get-profile.js";
import { getProjectTopix } from "./get-project-topix.js";
import { insert } from "./insert.js";

const main = async (args: { date: Date }) => {
  const projectTopix = await getProjectTopix();
  const adage = await getAdage();
  const profile = await getProfile();
  const editorial = await getEditorial(projectTopix);
  const convertedContent = convertContent(
    projectTopix,
    editorial,
    adage,
    profile,
  );
  const title = await generateTitle(convertedContent);

  insert(title, convertedContent, args.date);
};

const getArguments = () => {
  const { values } = parseArgs({
    args: Bun.argv,
    options: {
      date: {
        type: "string",
      },
    },
    strict: true,
    allowPositionals: true,
  });
  return validateArguments(values);
};

const validateArguments = (values: {
  date?: string;
}) => {
  const argsSchema = z.object({
    date: z.date().default(new Date()),
  });
  return argsSchema.parse(values);
};

main(getArguments());
