<script lang="ts">
  /* eslint-disable svelte/no-at-html-tags */
  const { 
    text,
    className = ""
  }: {
    text: string[]
    className?: string
  } = $props()
</script>

{#each text as line}
  <p class={className}>{@html line}</p>
{/each}
