import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";


export default defineConfig({
  integrations: [tailwind(), react()],
  site: "http://192.168.x.x:4321",
  base: "/",
  output: "static",
  outDir: "./dist",
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  server: {
    host: "0.0.0.0",
    port: 4321
  }
});