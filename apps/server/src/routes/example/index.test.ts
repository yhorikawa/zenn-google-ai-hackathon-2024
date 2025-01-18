import type { z } from "@hono/zod-openapi";
import type { exampleSchema } from "../../models/example";
import type { ExampleRequest, ExampleResponse } from "../../models/exampleApi";
import { exampleApi } from "./index";

describe("index", () => {
  it("Should return 200 response", async () => {
    const res = await exampleApi.request("/hello-world", {});

    expect(res.status).toBe(200);
    expect(await res.text()).toEqual("Hello World!");
  });
  it("Should return 200 response with personalized message", async () => {
    const res = await exampleApi.request("/hello-world/Hono", {});

    expect(res.status).toBe(200);
    expect(await res.text()).toEqual("Hello Hono!");
  });

  it("Should return 200 response with example response", async () => {
    const exampleUser: z.infer<typeof exampleSchema> = {
      id: 123,
      user_name: "Hono",
    };

    const requestBody: z.infer<typeof ExampleRequest> = {
      user: exampleUser,
    };
    const res = await exampleApi.request("/zod-example", {
      method: "POST",
      body: JSON.stringify(requestBody),
    });

    const responseBody: z.infer<typeof ExampleResponse> = {
      message: "example response",
      user: exampleUser,
    };
    expect(res.status).toBe(200);
    expect(await res.json()).toEqual(responseBody);
  });
});
