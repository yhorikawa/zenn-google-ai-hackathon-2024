import { Hono } from "hono";

export const rootRoute = new Hono().get("/robots.txt", (c) => {
  c.header("Content-Type", "text/plain");
  return c.text("User-agent: *\nDisallow: /");
});
