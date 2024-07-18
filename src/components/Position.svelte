<script lang="ts">
  import type { Position } from "../types/global"
  import Text from "./Text.svelte"
  import Date from "./Date.svelte"
    import BulletedHeading from "./BulletedHeading.svelte"

  export let position: Position
  let empty = position.description.length < 1
</script>


<BulletedHeading of="h3" class="mb-0">
  {position.title}
</BulletedHeading>
<h4 class="mb-0">
  <Date date={position.from} /> – {#if position.to}<Date date={position.to} />{:else}present{/if}
</h4>
{#if !empty}
  <div>
    <Text text={position.description} />
  </div>
{/if}

<style lang="scss">
  h4 {
    font-variant-ligatures: normal;
    font-style: italic;
    font-weight: normal;
    margin-top: 0;
    line-height: 1em;
  }
</style>