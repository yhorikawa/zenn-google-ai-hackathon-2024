import { exampleRoute } from "./index";

describe("index", () => {
  it("Should return 200 response", async () => {
    const res = await exampleRoute.request("/hello-world", {});

    expect(res.status).toBe(200);
    expect(await res.text()).toEqual("Hello World!");
  });
  it("Should return 200 response with personalized message", async () => {
    const res = await exampleRoute.request("/hello-world/Hono", {});

    expect(res.status).toBe(200);
    expect(await res.text()).toEqual("Hello Hono!");
  });
});
