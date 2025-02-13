<script lang="ts">
  import "./app.scss"
  import { content } from "./store.svelte"
  import Header from "./components/Header.svelte"
  import History from "./components/History.svelte"
  import Buzzwords from "./components/Buzzwords.svelte"
  import Footer from "./components/Footer.svelte"
  import { theme } from "./store.svelte"
  import SkipLink from "./components/SkipLink.svelte"

  $effect(() => {
    document.body.classList.remove("light", "dark")
    document.body.classList.add(theme.value === "dark" ? "dark" : "light")
  })
</script>

{#if content.value.isLoading === false && content.value.data}
  <SkipLink />
  <Header
    name={content.value.data.name}
    contact={content.value.data.contact}
    isLoading={content.value.isLoading}
  />
  <section id="content" class="content">
    <History
      objective={content.value.data.objective}
      currentWork={content.value.data.currentWork}
      workHistory={content.value.data.workHistory}
      education={content.value.data.education}
    />
  </section>
  <aside>
    <Buzzwords
      buzzwordGroups={content.value.data.buzzwords}
      links={content.value.data.links}
    />
  </aside>
{:else if content.value.isLoading === false && content.value.error}
  <p>{content.value.error}</p>
{/if}
<Footer />
