<script lang="ts">
  export let text: string[]
  export let className: string = ""
</script>

{#each text as line}
  <p class={className}>{@html line}</p>
{/each}
