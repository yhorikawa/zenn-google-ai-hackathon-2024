import { z } from "@hono/zod-openapi";

export const exampleSchema = z
  .object({
    id: z
      .number()
      .int()
      .openapi({ description: "The ID of the user", example: 1 }),
    user_name: z
      .string()
      .openapi({ description: "The name of the user", example: "John Doe" }),
  })
  .openapi("exampleSchema");
