<script type="ts">
import type { BookSmarts, Job } from "../global"
import JobDefinition from "./JobDefinition.svelte"
import Text from "../components/Text.svelte"
import _ from "../services/i18n"

export let objective: string[]
export let currentWork: Job
export let workHistory: Job[]
export let education: BookSmarts[]
</script>

<section class="me">
  <h2>{_("title.me", "About Me")}</h2>
  <Text text={objective} />
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
    {#each workHistory as job}
    <JobDefinition {job} />
    {/each}
  </dl>
</section>
<section class="education">
  <h2>{_("title.education", "Education")}</h2>
  <ul>
    {#each education as stint}
    <li>
      {stint.description}, {stint.date}<br>
      <span>{stint.institution}</span>
    </li>
    {/each}
  </ul>
</section>