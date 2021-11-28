<script type="ts">
export let text: string[]
export let className: string = ""
//const lines = text.split("\\n").map((t: string): string => t.trim())
</script>

{#each text as line}
<p class="{className}">{@html line}</p>
{/each}