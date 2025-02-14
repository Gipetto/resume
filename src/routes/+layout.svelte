<script lang="ts">
  import Footer from "$lib/components/Footer.svelte"
  import Header from "$lib/components/Header.svelte"
  import SkipLink from "$lib/components/SkipLink.svelte"
  import "../app.scss"
  import type { LayoutProps } from "./$types"
  import { theme } from "$lib/store.svelte"

  let { children }: LayoutProps = $props()

  $effect(() => {
    document.body.classList.remove("light", "dark")
    document.body.classList.add(theme.value === "dark" ? "dark" : "light")
  })
</script>

<main>
  <SkipLink />
  <Header />
  {@render children()}
  <Footer />
</main>
