<script lang="ts">
  import type { Position } from "$types/global"
  import Text from "./Text.svelte"
  import Date from "./Date.svelte"
  import BulletedHeading from "./BulletedHeading.svelte"
  import { content } from "../store.svelte"

  const useBullets = content.config("history")?.bullets ?? false

  const { position }: {
    position: Position
  } = $props()

  let empty = position.description.length < 1
</script>


<BulletedHeading of="h3" class="mb-0">
  {position.title}
</BulletedHeading>
{#if position.from}
  <h4 class="mb-0">
    <Date date={position.from} /> – {#if position.to}<Date date={position.to} />{:else}present{/if}
  </h4>
{/if}
{#if !empty}
  {#if useBullets}
    <ul class="hanging">
      {#each position.description as entry }
        <li>{entry}</li>
      {/each}
    </ul>
  {:else}
    <div>
      <Text text={position.description} />
    </div>
  {/if}
{/if}

<style lang="scss">
  h4 {
    font-variant-ligatures: normal;
    font-style: italic;
    font-weight: normal;
    margin-top: 0;
    line-height: 1em;
    color: var(--text-color-dark-gray);
  }
</style>