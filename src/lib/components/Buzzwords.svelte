<script lang="ts">

  import { content } from "$lib/store.svelte"
  import Icon from "./Icon.svelte"
  import _ from "../services/i18n.svelte"
  import { onMount } from "svelte"

  const buzzwordGroups = content.get("buzzwords")
  const links = content.get("links")

  let docRoot: HTMLElement

  onMount(() => {
    docRoot = document.documentElement
  })

  const handleMousemove = (e: MouseEvent) => {
    docRoot.style.setProperty("--mouse-x", e.clientX.toString())
    docRoot.style.setProperty("--mouse-y", e.clientY.toString())
  }
</script>

<svelte:body onmousemove={handleMousemove} />

{#if buzzwordGroups}
  <h2>{_("title.buzzwords", "Buzzwords")}</h2>
  {#each buzzwordGroups as buzzwords, i (`buzz-group-${i}`)}
    <ul class="skills">
      {#each buzzwords as item (item.name)}
        <li class="inner">
          <span>{item.name}</span>
          <span class="desc">{item.text}</span>
        </li>
      {/each}
    </ul>
  {/each}
{/if}
{#if links}
  <ul class="links">
    {#each links as link (link.href)}
      <li>
        <span class="icon {link.icon}"><Icon name={link.icon} /></span>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href={link.href}
        >{link.text}</a>
      </li>
    {/each}
  </ul>
{/if}

<style lang="scss">
  @use "../../style/mixins.scss";

  .skills {
    border-bottom: 1px dotted gray;
    li:last-of-type {
      margin-bottom: 1em;
    }

    .inner {
      span:first-of-type {
        font-family: var(--header-font);
        font-weight: bold;
      }
    }
  }

  .links {
    line-height: var(--line-height-small);

    li {
      margin-bottom: 0.25em;

      .icon {
        margin-right: 0.25em;
        vertical-align: middle;
      }
    }
  }
</style>
