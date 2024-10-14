<script lang="ts">
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
