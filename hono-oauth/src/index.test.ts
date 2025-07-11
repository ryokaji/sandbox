import app from "./index";

describe("app", async () => {
  it("GET /", async () => {
    const res = await app.request("/", {});
    expect(res.status).toBe(200);
  });
});
