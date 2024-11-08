<script lang="ts">
  import { type Snippet } from "svelte"

  const { 
    children, 
    class: className, 
    of 
  }: {
    children: Snippet
    of: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
    class: string
  } = $props()
</script>

<svelte:element this={of} class={className}>
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
    &:before {
      position: absolute;
      font-weight: 400;
      content: "#";
      left: -1.1rem;
      color: lightgray;
    }
  }
</style>