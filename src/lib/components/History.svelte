<script lang="ts">
  import _ from "../services/i18n.svelte"
  import JobDefinition from "./JobDefinition.svelte"
  import Text from "./Text.svelte"
  import BackToTop from "./BackToTop.svelte"
  import { content } from "../store.svelte"

  const objective = content.get("objective")
  const currentWork = content.get("currentWork")?.filter((item) => !item.hidden)
  const workHistory = content.get("workHistory")
  const education = content.get("education")
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
  <hr>
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
  <hr>
  <section class="education">
    <h2>{_("title.education", "Education")}</h2>
    <ul class="hanging">
      {#each education as stint (stint.description)}
        <li>
          <b>{stint.description}</b><br />
          <i>{stint.institution}</i>
        </li>
      {/each}
    </ul>
  </section>
{/if}

<BackToTop />

<style lang="scss">
  @use "../../style/mixins";

  section:not(:first-of-type) {
    margin: 3em 0;
  }

  .education {
    ul {
      padding-left: 1.5em;
      li {
        b {
          font-family: var(--header-font);
        }
      }
    }
  }
</style>
