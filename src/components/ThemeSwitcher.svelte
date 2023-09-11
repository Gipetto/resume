<script lang="ts">
  import Icon from "./Icon.svelte"
  import { theme } from "../store"
  import type { Theme } from "../types/global"

  const setTheme = (value: Theme): undefined => {
    theme.set(value)
  }

  let selectedTheme: Theme;

  theme.subscribe((value) => {
    selectedTheme = value
  })
</script>

{#if selectedTheme === "light"}
<button on:click={() => setTheme("dark")} aria-label="Switch to Dark Theme">
  <Icon name="sun" width={20} height={20} />
</button>
{:else}
<button on:click={() => setTheme("light")} aria-label="Switch to Light Theme">
  <Icon name="moon" width={20} height={20} />
</button>
{/if}

<style lang="scss">
  button {
    border: none;
    background: transparent;
    cursor: pointer;
    position: relative;

    :global(svg) {
      position: relative;
      bottom: -4px;
    }
  }
</style>