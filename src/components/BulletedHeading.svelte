<script lang="ts">
  export let of: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
  let className = ""
  export { className as class }
</script>

<svelte:element this={of} class={className}><slot/></svelte:element>

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