import app from "./index";

describe("app", async () => {
  it("GET /", async () => {
    const ENV = {
      VAR: "var",
    };
    const res = await app.request("/", {}, ENV);
    expect(res.status).toBe(200);
  });
});
