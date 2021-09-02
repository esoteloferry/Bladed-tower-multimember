import { svelte } from "@sveltejs/vite-plugin-svelte";
import preprocess from "svelte-preprocess";
import { defineConfig } from "vite";

export default defineConfig(({ command, mode }) => {
  const isProduction = mode === "production";
  return {
    plugins: [
      svelte({
        preprocess: preprocess(),
      }),
    ],
    build: {
      minify: isProduction,
    },
  };
});
