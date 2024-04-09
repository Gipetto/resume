<script lang="ts">
  import type { Job } from "../types/global"
  import Position from "../components/Position.svelte"

  export let job: Job
</script>

<dt>
  <span>{job.company}, {job.location}</span>{#if job.url}
  <a href="{job.url}" title={job.company}><span class="sr-only" hidden>{job.company} website</span></a>{/if}
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
    font-size: 1.25em;
    font-family: var(--header-font);
    font-variant-ligatures: normal;
    font-weight: 900;

    &>span:first-child {
      text-decoration: underline;
      text-decoration-thickness: 1px;
    }

    @include media(md-screen) {
      font-size: 1.6em;
    }

    a {
      text-decoration: none;
      
      &::before {
        content: "WWW";
        font-weight: 300;
        font-size: 0.4em;
        border: 1px solid var(--link-color);
        border-radius: 5px;
        padding: 2px 4px;
        margin-left: 1em;
      }

      &:hover::before {
        outline: 1px solid var(--link-color);
      }
    }
  }

  dd {
    margin-left: 1.25em;

    @include media(sm-screen) {
      margin-left: 0;
    }
  }
</style>