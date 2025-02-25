<script lang="ts" module>
  /* eslint-disable svelte/no-at-html-tags */
  import { marked } from "marked"
  import type { Tokens, TokenizerAndRendererExtension } from "marked"
  export { md }

  type Replacements = {
    [k: string]: string | undefined
  }

  const renderMarkdown = (input: string, replacements: Replacements) => {
    const matchTerms = Object.keys(replacements)
    const variables: TokenizerAndRendererExtension = {
      name: "variables",
      level: "inline",
      start(src: string) {
        // eslint-disable-next-line no-useless-escape
        return src.match(/^\[([^\[\]]+)\]/)?.index
      },
      tokenizer(src: string) {
        // eslint-disable-next-line no-useless-escape
        const match = src.match(/^\[([^\[\]]+)\]/)
        const name = match?.[1].trim()
        
        if (match && name && matchTerms.includes(name)) {
          const token = {
            type: "variables",
            raw: match[0],
            text: replacements[match[1].trim()],
            tokens: []
          }
          this.lexer.inline(token.text ?? "", token.tokens)
          return token
        }
      },
      renderer(token: Tokens.Generic) {
        return this.parser.parseInline(token.tokens || [])
      }
    }
    marked.use({ extensions: [variables]})

    return marked(input, {
      breaks: true,
    })
  }
</script>

{#snippet md(input: string, replacements: Replacements)}
  <section>
    {@html renderMarkdown(input, replacements)}
  </section>
{/snippet}