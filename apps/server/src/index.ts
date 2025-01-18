import { Hono } from "hono";

const app = new Hono();

const routes = app
  .get("/", (c) => {
    return c.text("Hello Hono!");
  })

  .get("/hello/", (c) => {
    return c.text("Hello!");
  });

export default app;
export type AppType = typeof routes;
