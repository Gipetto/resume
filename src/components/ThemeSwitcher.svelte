<script lang="ts">
  import Icon from "./Icon.svelte"
  import { theme } from "../store"
  import type { Theme } from "../global"

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
  <Icon name="sun" />
</button>
{:else}
<button on:click={() => setTheme("light")} aria-label="Switch to Light Theme">
  <Icon name="moon" />
</button>
{/if}

<style>
  button {
    border: none;
    background: transparent;
    cursor: pointer;
  }
</style>