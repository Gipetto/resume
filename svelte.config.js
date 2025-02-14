import { vitePreprocess } from "@sveltejs/vite-plugin-svelte"
import adapter from "@sveltejs/adapter-static"

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [
    vitePreprocess()
  ],
  kit: {
    adapter: adapter({
      pages: "build",
      assets: "build",
      fallback: "404.html",
      // eslint-disable-next-line no-undef
      precompress: process.env.NODE_ENV === "production",
      strict: true
    }),
    paths: {
      // eslint-disable-next-line no-undef
      base: process.env.NODE_ENV === "development" ? "" : "/resume"
    },
    alias: {
      $types: "src/types"
    }
  }
}

export default config