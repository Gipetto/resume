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
  @import "./style/_headline-font";
  @import "./style/_body-font";
  @import "./style/layout";
  @import "./style/theme";

  :root {
    --header-font: pt_sansbold, sans-serif;
    --header-font-italic: pt_sansitalic, sans-serif;
    --header-font-bold-italic: pt_sansbold_italic, sans-serif;
    --header-font-black: EncodeSansBlack, sans-serif;
    --body-font: tex_gyre_termesregular, serif;
    --body-font-italic: tex_gyre_termesitalic, serif;
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
    font-size: 1.125em;
    line-height: 1.5em;
    font-family: var(--body-font);
    color: var(--text-color);
    background-color: var(--background-color);
    transition: background-color 0.125s;
  }

  i, em {
    font-style: normal;
    font-family: var(--body-font-italic);
  }

  a {
    cursor: pointer;
    color: var(--link-color);
    &:hover {
      text-decoration: none;
    }
    &:visited {
      color: var(--link-color-visited);
    }
  }

  h1,
  h2,
  h3,
  h4 {
    font-variant-ligatures: common-ligatures;
    font-weight: normal;
  }

  h2 {
    font-family: var(--header-font-black);
  }

  .content {
    @include media(md-screen, print) {
      margin: 5em 0 0 0;
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
</style>
