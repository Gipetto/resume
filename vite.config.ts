import { defineConfig } from "vite"
import { svelte } from "@sveltejs/vite-plugin-svelte"
import { sveltePreprocess} from "svelte-preprocess"

const production = process.env.NODE_ENV === "production"

export default defineConfig({
  build: {
    manifest: true,
    cssCodeSplit: false,
    sourcemap: true,
    minify: production,
    cssMinify: production
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler",
        importers: [],
        minify: false
      }
    },
  },
  plugins: [
    svelte({
      compilerOptions: {
        // enable run-time checks when not in production
        dev: !production
      },
      emitCss: true,
      preprocess: sveltePreprocess()
    })
  ]
})