import { serve } from "@hono/node-server";
import { createApp } from "./factory";

const app = createApp();

app.get("/", (c) => {
  return c.json({
    message: `It works`,
  });
});

// Assuming the app runs in a node runtime, skip the service process explicitly in a test env
if (process.env.NODE_ENV !== undefined && process.env.NODE_ENV !== "test") {
  serve(
    {
      fetch: app.fetch,
      port: 3000,
    },
    (info) => {
      console.log(`Server is running on http://localhost:${info.port}`);
    }
  );
}

export default app;
