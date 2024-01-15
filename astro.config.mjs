import { defineConfig } from "astro/config"
import solidJs from "@astrojs/solid-js"
import tailwind from "@astrojs/tailwind"
import vercel from "@astrojs/vercel/serverless"
import compress from "astro-compress"

// https://astro.build/config
export default defineConfig({
  integrations: [
    solidJs(),
    tailwind(),
    compress({
      JavaScript: true,
      CSS: true,
      HTML: true,
      Image: true,
      SVG: true,
    }),
  ],
  output: "server",
  adapter: vercel(),
})
