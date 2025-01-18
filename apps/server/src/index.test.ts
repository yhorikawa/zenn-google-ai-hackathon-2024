import app from "./index";

describe("index", () => {
  it("Should return 404 response", async () => {
    const res = await app.request("/", {});

    expect(res.status).toBe(404);
  });
});
