<script lang="ts">
  import type { Position } from "../global"
  import Text from "./Text.svelte"
  import Date from "./Date.svelte"

  export let position: Position
  let empty = position.description.length < 1
</script>


<h3>
  {position.title}
</h3>
<h4><Date date={position.from} />–{#if position.to}<Date date={position.to} />{:else}present{/if}</h4>
{#if !empty}
  <div>
    <Text text={position.description} />
  </div>
{/if}

<style lang="scss">
  h3, h4 {
    font-variant-ligatures: normal;
    font-weight: normal;
    margin-bottom: 0;
  }

  h3 {
    font-family: var(--header-font-bold-italic);
  }

  h4 {
    font-family: var(--header-font-italic);
    margin-top: 0;
  }

  div {
    font-size: 1.2rem;
  }
</style>