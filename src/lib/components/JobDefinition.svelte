<script lang="ts">
  import type { Job } from "$types/global"
  import _ from "../services/i18n.svelte"
  import Position from "../components/Position.svelte"
  import BulletedHeading from "./BulletedHeading.svelte"
  import Patent from "./Patent.svelte"
  import Icon from "./Icon.svelte"
  import { resolve } from "$app/paths"

  const { job }: {
    job: Job
  } = $props()
</script>

{#if !job.hidden}
  <dt>
    <span class="company">{job.company}{#if job.location}, {job.location}{/if}</span>{#if job.remote}<span class="remote"> (Remote)</span>{/if}{#if job.url}
    <a class="icon" href="{resolve(job.url)}" title="{job.company}" target="_blank"><span class="sr-only" hidden>{job.company} website</span><Icon name="link" title={job.company} /></a>{/if}
  </dt>
  {#each job.positions as position, key (`position-${key}`)}
    {#if position.description}
      <dd>
        <Position {position} />
      </dd>
    {/if}
  {/each}
  {#if job.patents}
    <dd class="patents">
      <BulletedHeading of="h3" class="mb-0">{_("title.patents", "Patents")}</BulletedHeading>
      <ul class="hanging">
        {#each job.patents as patent (patent.number)}
          <li>
            <Patent {patent} />
          </li>
        {/each}
      </ul>
    </dd>
  {/if}
{/if}

<style lang="scss">
  @use "../../style/mixins";

  dt {
    margin-top: 1.5em;
    font-size: 1.35rem;
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

    .remote {
      font-weight: normal;
      font-size: 1rem;
      padding-left: 0.5em;
      color: gray;
    }
  }

  dd {
    margin-left: 1.25em;

    @include mixins.media(sm-screen) {
      margin-left: 0;
    }
  }
</style>
