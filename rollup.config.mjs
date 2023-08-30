import svelte from "rollup-plugin-svelte"
import commonjs from "@rollup/plugin-commonjs"
import resolve from "@rollup/plugin-node-resolve"
import livereload from "rollup-plugin-livereload"
import serve from 'rollup-plugin-serve'
import terser from "@rollup/plugin-terser"
import typescript from "@rollup/plugin-typescript"
import replace from "@rollup/plugin-replace"
import json from "@rollup/plugin-json"
import createPreprocessors from "./svelte.config.mjs"
import postcss from "rollup-plugin-postcss"
import cssnano from "cssnano"
import autoprefixer from "autoprefixer"

const production = !process.env.ROLLUP_WATCH

export default {
  input: "src/main.ts",
  output: {
    sourcemap: !production,
    format: "iife",
    name: "app",
    dir: "public/build",
    assetFileNames: "[name][extname]"
  },
  plugins: [
    json({
      preferConst: true,
    }),
    replace({
      "process.env.NODE_ENV": JSON.stringify(
        production ? "production" : "development"
      ),
      preventAssignment: true,
    }),
    svelte({
      // see svelte.config.js at the project root for svelte
      preprocess: createPreprocessors(!production),
      compilerOptions: {
        // enable run-time checks when not in production
        dev: !production
      },
      emitCss: true
    }),
    postcss({
      extract: true,
      sourceMap: true,
      minimize: production,
      plugins: [
        autoprefixer()
      ]
    }),
    // If you have external dependencies installed from
    // npm, you'll most likely need these plugins. In
    // some cases you'll need additional configuration -
    // consult the documentation for details:
    // https://github.com/rollup/plugins/tree/master/packages/commonjs
    resolve({
      browser: true,
      dedupe: ["svelte"],
    }),
    commonjs(),
    typescript({
      sourceMap: !production,
      inlineSources: !production,
      resolveJsonModule: true,
    }),

    // Watch the `public` directory and refresh the
    // browser on changes when not in production
    !production && serve({
      open: false,
      contentBase: "public",
      port: 5000,
      verbose: true
    }),
    !production &&
      livereload({
        applyCSSLive: false,
        applyImgLive: false,
        watch: [
          "public/build"
        ],
        delay: 500,
        exts: [ 'js', 'css' ]
      }),

    // If we're building for production (npm run build
    // instead of npm run dev), minify
    production &&
      terser({
        output: {
          comments: false,
        },
      })
  ],
  watch: {
    clearScreen: false,
  },
}
