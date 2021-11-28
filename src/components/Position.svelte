<script lang="ts">
import type { Position } from "../global"
import Text from "../components/Text.svelte"

export let position: Position
let empty = position.description.length < 1
</script>

{#if position.from}
<dd class="{empty ? "empty" : ""}">
  <h3 class="header f-hi">
    {position.title}&nbsp; 
    <span>({position.from}–{#if position.to}{position.to}{:else}present{/if})</span>
  </h3>
  {#if !empty}
  <Text text={position.description} />
  {/if}
</dd>
{/if}