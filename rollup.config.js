import svelte from "rollup-plugin-svelte"
import commonjs from "@rollup/plugin-commonjs"
import resolve from "@rollup/plugin-node-resolve"
import livereload from "rollup-plugin-livereload"
import { terser } from "rollup-plugin-terser"
import typescript from "@rollup/plugin-typescript"
import css from "rollup-plugin-css-only"
import replace from "@rollup/plugin-replace"
import json from "@rollup/plugin-json"
import scss from "rollup-plugin-scss"
const createPreprocessors = require("./svelte.config").createPreprocessors
const path = require("path")
const fs = require("fs")

const production = !process.env.ROLLUP_WATCH

function serve() {
  let server

  function toExit() {
    if (server) server.kill(0)
  }

  return {
    writeBundle() {
      if (server) return
      server = require("child_process").spawn(
        "npm",
        ["run", "start", "--", "--dev", "--host"],
        {
          stdio: ["ignore", "inherit", "inherit"],
          shell: true,
        }
      )

      process.on("SIGTERM", toExit)
      process.on("exit", toExit)
    },
  }
}

export default {
  input: "src/main.ts",
  output: {
    sourcemap: !production,
    format: "iife",
    name: "app",
    file: "public/build/bundle.js",
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
        dev: !production,
      },
    }),
    // we'll extract any component CSS out into
    // a separate file - better for performance
    css({ output: "bundle.css" }),
    scss({
      output: "public/build/global.css",
      sourceMap: true,
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

    // In dev mode, call `npm run start` once
    // the bundle has been generated
    !production && serve(),

    // Watch the `public` directory and refresh the
    // browser on changes when not in production
    !production &&
      livereload({
        watch: "public",
      }),

    // If we're building for production (npm run build
    // instead of npm run dev), minify
    production &&
      terser({
        output: {
          comments: false,
        },
      }),
    !production && {
      name: "stupid-watcher",
      async buildStart() {
        const scssDir = path.resolve(__dirname, "src", "style")
        fs.readdir(scssDir, (err, files) => {
          files.forEach((file) => {
            this.addWatchFile(path.resolve(scssDir, file))
          })
        })
        const dataDir = path.resolve(__dirname, "public", "data")
        fs.readdir(dataDir, (err, files) => {
          files.forEach((file) => {
            this.addWatchFile(path.resolve(dataDir, file))
          })
        })
      },
    },
  ],
  watch: {
    clearScreen: false,
  },
}
