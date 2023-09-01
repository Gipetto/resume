<script lang="ts">
  import type { BookSmarts, Job, Objective } from "../global"
  import JobDefinition from "./JobDefinition.svelte"
  import Text from "../components/Text.svelte"
  import Date from "../components/Date.svelte"
  import _ from "../services/i18n"

  export let objective: Objective | undefined
  export let currentWork: Job | undefined
  export let workHistory: Job[] | undefined
  export let education: BookSmarts[] | undefined
</script>

{#if objective}
  <section class="me">
    <h2>{_("title.me", "About Me")}</h2>
    <div>
      <Text text={objective} />
    </div>
  </section>
{/if}
{#if currentWork}
  <section class="current">
    <h2>{_("title.current-work", "Current Work")}</h2>
    <dl>
      <JobDefinition job={currentWork} />
    </dl>
  </section>
{/if}
{#if workHistory}
  <section class="history">
    <h2>{_("title.work-history", "Work History")}</h2>
    <dl>
      {#each workHistory as job (job.company)}
        <JobDefinition {job} />
      {/each}
    </dl>
  </section>
{/if}
{#if education}
  <section class="education">
    <h2>{_("title.education", "Education")}</h2>
    <ul>
      {#each education as stint (stint.description)}
        <li>
          {stint.description}, <Date date={stint.date} /><br />
          <span>{stint.institution}</span>
        </li>
      {/each}
    </ul>
  </section>
{/if}

<style lang="scss">
  @import "../style/mixins";

  section:not(:first-of-type) {
    margin: 3em 0;
  }

  .me {
    h2 {
      margin-bottom: 1em;

      @include media(md-screen, print) {
        margin-bottom: 0.5em;
      }
    }

    div {
      font-size: 1.2em;
      line-height: 1.3;
    }
  }
  .education {
    ul {
      padding-left: 1em;

      li {
        line-height: 1.3;
        span {
          font-weight: normal;
          font-family: var(--body-font-italic);
        }
      }
    }
  }
</style>
