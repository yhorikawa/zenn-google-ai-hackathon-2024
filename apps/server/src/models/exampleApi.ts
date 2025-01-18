import { z } from "@hono/zod-openapi";
import { exampleSchema } from "./example";

export const ExampleRequest = z
  .object({
    user: exampleSchema,
  })
  .openapi("ExampleRequest");

export const ExampleResponse = z
  .object({
    message: z.string(),
    user: exampleSchema,
  })
  .openapi("ExampleResponse");
