<script lang="ts">
  import type { BookSmarts, Job, Objective } from "../global"
  import JobDefinition from "./JobDefinition.svelte"
  import Text from "../components/Text.svelte"
  import Date from "../components/Date.svelte"
  import _ from "../services/i18n"

  export let objective: Objective
  export let currentWork: Job
  export let workHistory: Job[]
  export let education: BookSmarts[]

  const headerObjective = objective as string[]
</script>

<section class="me">
  <h2>{_("title.me", "About Me")}</h2>
  <div>
    <Text text={headerObjective} />
  </div>
</section>
<section class="current">
  <h2>{_("title.current-work", "Current Work")}</h2>
  <dl>
    <JobDefinition job={currentWork} />
  </dl>
</section>
<section class="history">
  <h2>{_("title.work-history", "Work History")}</h2>
  <dl>
    {#each workHistory as job (job.company)}
      <JobDefinition {job} />
    {/each}
  </dl>
</section>
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
