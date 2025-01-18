import app from "./index";

describe("index", () => {
  it("Should return 200 response", async () => {
    const res = await app.request("/", {});

    expect(res.status).toBe(200);
    expect(await res.text()).toEqual("Hello Hono!");
  });
});
