import { createApp } from "./factory";

const app = createApp();

app.get("/", (c) => {
  return c.json({
    message: `It works`,
  });
});

export default app;
