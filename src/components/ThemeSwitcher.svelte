<script lang="ts">
  import Icon from "./Icon.svelte"
  import { theme } from "../store.svelte"
  import type { Theme } from "../types/global"

  const setTheme = (value: Theme): undefined => {
    theme.value = value
  }
</script>

{#if theme.value === "light"}
<button onclick={() => setTheme("dark")} aria-label="Switch to Dark Theme">
  <Icon name="sun" width={20} height={20} />
</button>
{:else}
<button onclick={() => setTheme("light")} aria-label="Switch to Light Theme">
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