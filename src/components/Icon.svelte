<script lang="ts">
  import * as icons from "../icons.json"

  type IconName = keyof typeof icons
  
  export let name: IconName
  
  const icon = icons[name]
</script>

<svg
  class="icon"
  role="img"
  width="16"
  height="16"
  viewBox="0 0 {icon.viewBox.w} {icon.viewBox.h}"
  xmlns="http://www.w3.org/2000/svg"
  ><title>{@html icon.title}</title><g>{@html icon.svg}</g></svg
>

<style lang="scss" global>
  svg {
    filter: brightness(0) saturate(100%);
  }
  .dark svg {
    filter: invert(100%);
  }
</style>