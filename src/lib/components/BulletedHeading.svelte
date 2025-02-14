<script lang="ts">
  import { type Snippet } from "svelte"

  const { 
    children, 
    class: className, 
    of,
    type
  }: {
    children: Snippet
    of: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
    class: string
    type?: "hash" | "section" | "para" | undefined
  } = $props()
</script>

<svelte:element this={of} class={`${className} ${type}`}>
  {@render children()}
</svelte:element>

<style lang="scss">
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    position: relative;

    &:not(.undefined) { /* lol */
      --content: "\00a0";
      &:before {
        position: absolute;
        font-weight: 400;
        content: var(--content);
        left: -1.1rem;
        color: lightgray;
      }

      &.hash {
        --content: "#";
      }

      &.section {
        --content: "\00A7";
      }

      &.para {
        --content: "\00B6";
      }
    }
  }
</style>