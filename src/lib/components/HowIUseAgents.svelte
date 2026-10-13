<script lang="ts">

  import { content } from "../store.svelte"
  import Icon from "./Icon.svelte"

  const howIUseAgents = content.get("howIUseAgents")
</script>

{#if howIUseAgents}
<div class="how-i-use-agents">
  <h2>How I Use Agents</h2>
  {#each howIUseAgents.items as item, i (`item-${i}`)}
    <p><strong>{item.title}</strong> {item.description}</p>
  {/each}
  {#if howIUseAgents.config}
    <p class="project-link">
      <!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
      <a class="icon" href="{howIUseAgents.config.url}" title="{howIUseAgents.config.text}" target="_blank">
        <span>{howIUseAgents.config.text}</span>
        <Icon name="link" title={howIUseAgents.config.text} />
      </a>
    </p>
  {/if}
</div>
{/if}

<style lang="scss">
  p strong {
    font-family: var(--header-font);
    font-weight: bold;
  }
</style>
