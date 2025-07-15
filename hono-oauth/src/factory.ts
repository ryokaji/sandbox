import { Hono } from "hono";
// import { env } from "hono/adapter";

type Env = {
  Variables: {
    var: string;
  };
  Bindings: {
    VAR: string;
  };
};

export const createApp = () => {
  const app = new Hono<Env>();
  app.use("*", async (c, next) => {
    // const { VAR } = env(c);
    // c.set("var", VAR);

    await next();
  });
  return app;
};

export default createApp;
