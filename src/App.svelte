<script lang="ts">
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

{#if content.value.isLoading == false && content.value.data}
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
{:else if content.value.isLoading == false && content.value.error}
  <p>{content.value.error}</p>
{/if}
<Footer />

<style global lang="scss">
  @use "./style/layout";
  @use "./style/utility";
  @use "./style/theme";
  @use "./style/print";
  @use "./style/mixins";

  :root {
    --font-size: 17px;
    --line-height: 1.85rem;
    --header-font: system-ui, sans-serif;
    --body-font: Charter, 'Bitstream Charter', 'Sitka Text', Cambria, serif;
  }

  ::selection {
    background: var(--color-orange);
    color: #fff;
    text-shadow: 1px 1px 3px var(--color-dark-orange);
  }

  * {
    text-rendering: optimizeLegibility;
    font-variant-ligatures: common-ligatures;
    font-variant-numeric: oldstyle-nums stacked-fractions;
    text-underline-offset: 0.13em;
    text-decoration-skip-ink: auto;
  }

  body {
    font-size: var(--font-size);
    line-height: var(--line-height);
    font-family: var(--body-font);
    color: var(--text-color);
    background-color: var(--background-color);
    transition: background-color 0.125s;
  }

  a {
    cursor: pointer;
    color: var(--link-color);
    text-underline-offset: 0.13em;

    &:hover {
      text-underline-offset: 0.3em;
    }
    &:visited {
      color: var(--link-color-visited);
    }
  }

  h1,
  h2,
  h3,
  h4 {
    font-family: var(--header-font);
    font-variant-ligatures: common-ligatures;
    font-weight: 900;
  }

  p {
    margin-block: 0.75em;
  }

  .content {
    @include mixins.media(md-screen, print) {
      margin: 5em 0 0 0;
    }

    ul {
      padding-left: 1.5em;

      li {
        line-height: 1.3;
      }
    }
  }

  aside {
    ul {
      list-style: none inside;
      padding: 0;

      li {
        padding: 0.25em 0;
      }
    }
  }

  svg.icon {
    margin-right: 10px;
    vertical-align: baseline;
  }

  :global(.sr-only) {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }
</style>
