<script lang="ts">
  import { content } from "$lib/store.svelte"
  import History from "$lib/components/History.svelte"
  import Buzzwords from "$lib/components/Buzzwords.svelte"
  import SideProject from "$lib/components/SideProject.svelte"
</script>

{#if content.data}
  <section id="content" class="content">
    <History />
  </section>
  <aside>
    <SideProject />
    <Buzzwords />
  </aside>
{:else}
  <p>Error loading Resume Data!!!</p>
{/if}
