import { defineConfig } from "vite"
import { sveltekit } from "@sveltejs/kit/vite"
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte"
import adapter from "@sveltejs/adapter-static"
import yaml from "@rollup/plugin-yaml"
import path from "node:path"

const production = process.env.NODE_ENV === "production"

export default defineConfig({
  resolve: {
    alias: {
      $lib: path.resolve(import.meta.dirname, "src/lib"),
      $types: path.resolve(import.meta.dirname, "src/types")
    }
  },
  build: {
    manifest: true,
    cssCodeSplit: false,
    sourcemap: true,
    minify: production,
    cssMinify: production
  },
  plugins: [
    sveltekit({
      preprocess: [
        vitePreprocess()
      ],
      adapter: adapter({
        pages: "build",
        assets: "build",
        fallback: "404.html",
        precompress: process.env.NODE_ENV === "production",
        strict: true
      }),
      paths: {
        base: process.env.NODE_ENV === "development" ? "" : "/resume"
      }
    }),
    yaml()
  ],
})
