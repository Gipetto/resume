import { defineConfig } from "vite"
import { sveltekit } from "@sveltejs/kit/vite"
import yaml from "@rollup/plugin-yaml"

const production = process.env.NODE_ENV === "production"

export default defineConfig({
  build: {
    manifest: true,
    cssCodeSplit: false,
    sourcemap: true,
    minify: production,
    cssMinify: production
  },
  plugins: [
    sveltekit(),
    yaml()
  ],
})
