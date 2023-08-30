<script lang="ts">
  import type { BuzzwordGroup, Link } from "../global"
  import Icon from "./Icon.svelte"
  import _ from "../services/i18n"
  export let buzzwordGroups: BuzzwordGroup[] = []
  export let links: Link[] = []

  const docRoot = document.documentElement

  const handleMousemove = (e: MouseEvent) => {
    docRoot.style.setProperty("--mouse-x", e.clientX.toString())
    docRoot.style.setProperty("--mouse-y", e.clientY.toString())
  }
</script>

<svelte:body on:mousemove={handleMousemove} />

<h2>{_("title.buzzwords", "Buzzwords")}</h2>
{#each buzzwordGroups as buzzwords}
  <ul class="bubbles">
    {#each buzzwords as item (item.name)}
      <li class="bubblewrap">
        {item.name}
        <span class="bubble f-bi">{@html item.text}</span>
      </li>
    {/each}
  </ul>
{/each}
<ul>
  {#each links as link (link.href)}
    <li>
      <a
        class="icon {link.icon}"
        rel="noopener noreferrer"
        target="_blank"
        href={link.href}
      >
        <Icon name={link.icon} />
        {link.text}
      </a>
    </li>
  {/each}
</ul>

<style lang="scss">
  @import "../style/bubbles.scss";
</style>