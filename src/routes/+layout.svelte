<script lang="ts">
  import "../app.scss"
  import { asset } from "$app/paths"
  import type { LayoutProps } from "./$types"
  import Footer from "$lib/components/Footer.svelte"
  import Header from "$lib/components/Header.svelte"
  import SkipLink from "$lib/components/SkipLink.svelte"
  import Nav from "$lib/components/Nav.svelte"
  import { content, theme } from "$lib/store.svelte"
  import { personJsonLd } from "$lib/schema"

  let { children }: LayoutProps = $props()

  const ldJson = $derived(personJsonLd(content.data))

  $effect(() => {
    // document.startViewTransition(async () => {
    document.body.classList.remove("light", "dark")
    document.body.classList.add(theme.value === "dark" ? "dark" : "light")
    // })
  })
</script>

<svelte:head>
  <link rel="manifest" href={asset("manifest.webmanifest")}>
  <link rel="icon" href={asset("favicon.ico")} sizes="32x32">
  <link rel="icon" href={asset("favicon.svg")} type="image/svg+xml">
  <link rel="apple-touch-icon" href={asset("icons/apple-touch-icon.png")}>
  {#if ldJson}
    <!-- eslint-disable-next-line no-useless-escape, svelte/no-at-html-tags -->
    {@html `<script type="application/ld+json">${ldJson}<\/script>`}
  {/if}
</svelte:head>

<SkipLink />
<Nav />
<div class="content">
  <main class="preserve-scrollbar-space">
    <Header />
    {@render children()}
  </main>
</div>
<Footer />
