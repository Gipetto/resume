<script lang="ts">
  import { content } from "$lib/store.svelte"
  import History from "$lib/components/History.svelte"
  import Buzzwords from "$lib/components/Buzzwords.svelte"
  import ForTheRobots from "$lib/components/ForTheRobots.svelte"
</script>

{#if content.data}
  <section id="content" class="content">
    <History />
  </section>
  <aside>
    <Buzzwords />
  </aside>
  <section id="robot-data" class="robot-content">
    <ForTheRobots />
  </section>
{:else}
  <p>Error loading Resume Data!!!</p>
{/if}
