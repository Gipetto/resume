<script type="ts">
import type { Job } from "../global"
import Position from "../components/Position.svelte"

export let job: Job
</script>

<dt class="f-h">
  {job.company}, {job.location}
</dt>
{#each job.positions as position}
<Position {position} />
{/each}