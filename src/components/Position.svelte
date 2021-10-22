<script lang="ts">
import type { Position } from "../global"
import Text from "../components/Text.svelte"

export let position: Position
</script>

{#if position.from}
<dd>
  <h3>
    {position.title}&nbsp; 
    <span>({position.from}–{#if position.to}{position.to}{:else}present{/if})</span>
  </h3>
  <Text text={position.description} />
</dd>
{/if}