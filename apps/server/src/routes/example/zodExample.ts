import { type RouteHandler, createRoute } from "@hono/zod-openapi";
import type { Env } from "hono/types";
import { ExampleRequest, ExampleResponse } from "../../models/exampleApi";

export const exampleRoute = createRoute({
  path: "/zod-example",
  method: "post",
  description: "Example route",
  request: {
    body: {
      content: {
        "application/json": {
          schema: ExampleRequest,
        },
      },
    },
  },
  responses: {
    200: {
      description: "OK",
      content: {
        "application/json": {
          schema: ExampleResponse,
        },
      },
    },
  },
});

export const exampleHandler: RouteHandler<typeof exampleRoute, Env> = async (
  c,
) => {
  const req = await c.req.json();
  return c.json({
    message: "example response",
    user: req.user,
  });
};
