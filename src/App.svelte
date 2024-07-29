<script lang="ts">
  import { content } from "./store"
  import Header from "./components/Header.svelte"
  import History from "./components/History.svelte"
  import Buzzwords from "./components/Buzzwords.svelte"
  import Footer from "./components/Footer.svelte"
  import { theme } from "./store"
  import SkipLink from "./components/SkipLink.svelte"

  let selectedTheme;

  theme.subscribe((value) => {
    selectedTheme = value
    document.body.classList.remove("light", "dark")
    document.body.classList.add(selectedTheme === "dark" ? "dark" : "light")
  })
</script>

{#if $content.isLoading == false && $content.data}
  <SkipLink />
  <Header
    name={$content.data.name}
    contact={$content.data.contact}
    isLoading={$content.isLoading}
  />
  <section id="content" class="content">
    <History
      objective={$content.data.objective}
      currentWork={$content.data.currentWork}
      workHistory={$content.data.workHistory}
      education={$content.data.education}
    />
  </section>
  <aside>
    <Buzzwords
      buzzwordGroups={$content.data.buzzwords}
      links={$content.data.links}
    />
  </aside>
{:else if $content.isLoading == false && $content.error}
  <p>{$content.error}</p>
{/if}
<Footer />

<style global lang="scss">
  @import "./style/layout";
  @import "./style/utility";
  @import "./style/theme";
  @import "./style/print";

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
    @include media(md-screen, print) {
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
