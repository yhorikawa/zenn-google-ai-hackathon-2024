import { OpenAPIHono } from "@hono/zod-openapi";
import { exampleHandler, exampleRoute } from "./zodExample";

export const exampleApi = new OpenAPIHono()
  .openapi(exampleRoute, exampleHandler)
  .get("/hello-world", (c) => {
    return c.text("Hello World!");
  })
  .get("/hello-world/:name", (c) => {
    return c.text(`Hello ${c.req.param("name")}!`);
  });
