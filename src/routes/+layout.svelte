<script lang="ts">
  import "../app.scss"
  import { base } from "$app/paths"
  import type { LayoutProps } from "./$types"
  import Footer from "$lib/components/Footer.svelte"
  import Header from "$lib/components/Header.svelte"
  import SkipLink from "$lib/components/SkipLink.svelte"
  import { theme } from "$lib/store.svelte"

  let { children }: LayoutProps = $props()

  $effect(() => {
    document.body.classList.remove("light", "dark")
    document.body.classList.add(theme.value === "dark" ? "dark" : "light")
  })
</script>

<svelte:head>
  <link rel="manifest" href="{base}/manifest.webmanifest">
  <link rel="icon" href="{base}/favicon.ico" sizes="32x32">
  <link rel="icon" href="{base}/favicon.svg" type="image/svg+xml">
  <link rel="apple-touch-icon" href="{base}/icons/apple-touch-icon.png">
</svelte:head>

<main>
  <SkipLink />
  <Header />
  {@render children()}
  <Footer />
</main>
