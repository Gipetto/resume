<script lang="ts">
  import type { BookSmarts, Job, Objective } from "../types/global"
  import _ from "../services/i18n.svelte"
  import JobDefinition from "./JobDefinition.svelte"
  import Text from "./Text.svelte"
  import Date from "./Date.svelte"
  import BackToTop from "./BackToTop.svelte"

  const { 
    objective, 
    currentWork, 
    workHistory, 
    education 
  }: {
    objective: Objective | undefined
    currentWork: Job[] | undefined
    workHistory: Job[] | undefined
    education: BookSmarts[] | undefined
  } = $props()
</script>

{#if objective}
  <section class="me">
    <div>
      <Text text={objective} />
    </div>
  </section>
{/if}
{#if currentWork}
  <section class="current">
    <h2>{_("title.current-work", "Current Work")}</h2>
    <dl>
      {#each currentWork as currentJob (currentJob.company)}
        <JobDefinition job={currentJob} />
      {/each}
    </dl>
  </section>
{/if}
{#if workHistory}
  <section class="history">
    <h2>{_("title.work-history", "Work History")}</h2>
    <dl>
      {#each workHistory as job (job.company)}
        {#if !job.hidden}
        <JobDefinition {job} />
        {/if}
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
          <b>{stint.description}</b>, <Date date={stint.date} /><br />
          <i>{stint.institution}</i>
        </li>
      {/each}
    </ul>
  </section>
{/if}

<BackToTop />

<style lang="scss">
  @use "../style/mixins";

  section:not(:first-of-type) {
    margin: 3em 0;
  }

  // .me {
  //   h2 {
  //     margin-bottom: 1em;

  //     @include mixins.media(md-screen, print) {
  //       margin-bottom: 0.5em;
  //     }
  //   }
  // }
</style>
