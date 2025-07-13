import { Hono } from "hono";

type Env = {
  Variables: {
    NAME: string;
  };
  Bindings: {
    NAME: string;
  };
};

export const createApp = () => {
  const app = new Hono<Env>();
  app.use("*", async (c, next) => {
    await next();
  });
  return app;
};

export default createApp;
