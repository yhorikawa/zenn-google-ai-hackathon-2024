import { Hono } from "hono";
import { exampleRoute } from "./routes/example";
import { rootRoute } from "./routes/root";

const app = new Hono();

const routes = app.route("/example", exampleRoute).route("/", rootRoute);

export default app;
export type AppType = typeof routes;
