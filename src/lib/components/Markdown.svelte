<script lang="ts" module>
  /* eslint-disable svelte/no-at-html-tags */
  import { marked } from "marked"
  export { md }

  const renderMarkdown = (input: string) => marked(input, {
    breaks: true,
  })
</script>

{#snippet md(input: string)}
  <section>
    {@html renderMarkdown(input)}
  </section>
{/snippet}