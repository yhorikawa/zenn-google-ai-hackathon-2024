import { Hono } from "hono";

export const exampleRoute = new Hono()
  .get("/hello-world", (c) => {
    return c.text("Hello World!");
  })
  .get("/hello-world/:name", (c) => {
    return c.text(`Hello ${c.req.param("name")}!`);
  });
