<script lang="ts">
  import type { Job } from "../types/global"
  import Position from "../components/Position.svelte"

  export let job: Job
</script>

<dt>
  {job.company}, {job.location}
</dt>
{#each job.positions as position (position.title)}
  {#if position.from}
    <dd>
      <Position {position} />
    </dd>
  {/if}
{/each}

<style lang="scss">
  @import "../style/mixins";

  dt {
    margin-top: 1.5em;
    font-size: 1.5rem;
    line-height: 1.1;
    font-weight: normal;
    font-family: var(--header-font);
    font-variant-ligatures: normal;

    @include media(md-screen, print) {
      font-size: 1.6rem;
    }
  }

  dd {
    margin-left: 1.25em;

    @include media(sm-screen) {
      margin-left: 0;
    }
  }
</style>