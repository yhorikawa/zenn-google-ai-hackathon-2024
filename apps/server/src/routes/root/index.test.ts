import { rootRoute } from "./index";

describe("rootRoute", () => {
  it("should return robots.txt content", async () => {
    const response = await rootRoute.request("/robots.txt", {});

    expect(response.status).toBe(200);
    expect(response.headers.get("content-type")).toMatch(/text\/plain/);
    expect(await response.text()).toBe("User-agent: *\nDisallow: /");
  });
});
