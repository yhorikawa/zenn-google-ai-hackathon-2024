import { Hono } from "hono";

const app = new Hono();

const routes = app.get("/", (c) => {
  return c.text("Hello Hono!");
});

export default app;
export type AppType = typeof routes;
