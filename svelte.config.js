import { vitePreprocess } from "@sveltejs/vite-plugin-svelte"
import adapter from "@sveltejs/adapter-static"

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [
    vitePreprocess()
  ],
  kit: {
    adapter: adapter({
      fallback: "404.html",
      precompress: process.env.NODE_ENV === "production",
      strict: true
    }),
    paths: {
      base: process.env.NODE_ENV === "development" ? "" : "/resume"
    },
    alias: {
      $types: "src/types"
    }
  }
}

export default config