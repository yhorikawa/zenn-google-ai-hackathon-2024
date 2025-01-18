import app from "./index";

describe("index", () => {
  it("Should return 404 response", async () => {
    const res = await app.request("/", {});

    expect(res.status).toBe(404);
  });

  it("should return robots.txt content", async () => {
    const response = await app.request("/robots.txt", {});

    expect(response.status).toBe(200);
    expect(response.headers.get("content-type")).toMatch(/text\/plain/);
    expect(await response.text()).toBe("User-agent: *\nDisallow: /");
  });
});
