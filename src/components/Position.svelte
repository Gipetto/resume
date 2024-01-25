<script lang="ts">
  import type { Position } from "../types/global"
  import Text from "./Text.svelte"
  import Date from "./Date.svelte"

  export let position: Position
  let empty = position.description.length < 1
</script>


<h3>
  {position.title}
</h3>
<h4><Date date={position.from} /> – {#if position.to}<Date date={position.to} />{:else}present{/if}</h4>
{#if !empty}
  <div>
    <Text text={position.description} />
  </div>
{/if}

<style lang="scss">
  h3, h4 {
    font-family: var(--header-font);
    font-variant-ligatures: normal;
    margin-bottom: 0;
  }

  h3 {
    position: relative;
    &:before {
      position: absolute;
      font-weight: 400;
      content: "\22C4";
      left: -1rem;
    }
  }

  h4 {
    font-style: italic;
    font-weight: normal;
    margin-top: 0;
    line-height: 1em;
  }
</style>