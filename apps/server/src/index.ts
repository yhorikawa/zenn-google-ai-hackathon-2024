import { swaggerUI } from "@hono/swagger-ui";
import { OpenAPIHono } from "@hono/zod-openapi";
import { exampleApi } from "./routes/example";

const app = new OpenAPIHono();

const routes = app
  .route("/example", exampleApi)
  .doc("/doc/specification", {
    openapi: "3.0.0",
    info: {
      title: "API",
      version: "1.0.0",
    },
  })
  .get(
    "/doc/swagger-ui",
    swaggerUI({
      url: "/doc/specification",
    }),
  )
  .get("/robots.txt", (c) => {
    c.header("Content-Type", "text/plain");
    return c.text("User-agent: *\nDisallow: /");
  });

export default app;
export type AppType = typeof routes;
