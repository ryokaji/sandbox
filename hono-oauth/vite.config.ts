import devServer from "@hono/vite-dev-server";
import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    // Configuration for a server-side app.
    build: {
      ssr: true,
      target: "node22",
      rollupOptions: {
        input: "src/index.ts",
      },
    },
    plugins: [
      devServer({
        entry: "src/index.ts",
        // The env vars are available via `c.env` in the development mode
        // and provided as specified type we defined.
        env: {
          MODE: mode,
          VAR: "var",
        },
      }),
    ],
    test: {
      globals: true,
      env: env,
    },
  };
});
