<script lang="ts">
  import type { Job } from "../types/global"
  import _ from "../services/i18n"
  import Position from "../components/Position.svelte"
  import BulletedHeading from "./BulletedHeading.svelte"
  import Patent from "./Patent.svelte"
  import Icon from "./Icon.svelte"

  const { job }: {
    job: Job
  } = $props()
</script>

<dt>
  <span>{job.company}, {job.location}</span>{#if job.url}
  <a class="icon" href="{job.url}" title="{job.company}" target="_blank"><span class="sr-only" hidden>{job.company} website</span><Icon name="link" title={job.company} /></a>{/if}
</dt>
{#each job.positions as position (position.title)}
  {#if position.from}
    <dd>
      <Position {position} />
    </dd>
  {/if}
{/each}
{#if job.patents}
  <dd class="patents">
    <BulletedHeading of="h3" class="mb-0">{_("title.patents", "Patents")}</BulletedHeading>
    <ul>
      {#each job.patents as patent (patent.number)}
        <li>
          <Patent {patent} />
        </li> 
      {/each}
    </ul>
  </dd>
{/if}
<style lang="scss">
  @use "../style/mixins";

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

    @include mixins.media(md-screen) {
      font-size: 1.6em;
    }

    a {
      text-decoration: none;
      padding-left: 0.5em;
    }
  }

  dd {
    margin-left: 1.25em;

    @include mixins.media(sm-screen) {
      margin-left: 0;
    }

    &.patents {
      ul {
        list-style: disc outside;
      }
    }
  }
</style>