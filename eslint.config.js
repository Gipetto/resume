import eslintPluginSvelte from "eslint-plugin-svelte"
import svelteParser from "svelte-eslint-parser"
import tsParser from "@typescript-eslint/parser"
import js from "@eslint/js"
import tsEslint from "typescript-eslint"
import globals from "globals"

export default [
  js.configs.recommended,
  ...tsEslint.configs.strict,
  ...eslintPluginSvelte.configs["flat/recommended"],
  {
    ignores: [
      "dist/",
      "build/",
      "postcss.config.cjs",
      ".svelte-kit",
    ]
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser
      }
    },
    rules: {
      "indent": [
        "error",
        2
      ],
      "eqeqeq": [
        2,
        "smart"
      ],
      "linebreak-style": [
        2,
        "unix"
      ],
      "quotes": [
        2,
        "double"
      ],
      "semi": [
        2,
        "never"
      ],
      "strict": [
        2,
        "never"
      ],
      "no-console": [
        "error",
        { allow: ["info"] }
      ]
    }
  },
  {
    files: [
      "*.svelte",
      "**/*.svelte",
      "**/*.svelte.ts"
    ],
    languageOptions: {
      parser: svelteParser,
      parserOptions: {
        parser: tsParser
      },
    }
  }
]