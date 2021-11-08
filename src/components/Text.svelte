<script type="ts">
export let text: string[]
//const lines = text.split("\\n").map((t: string): string => t.trim())
</script>

{#each text as line}
<p>{@html line}</p>
{/each}