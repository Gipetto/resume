<script lang="ts">
  import * as icons from "../icons.json"
  import type { IconData } from "../types/icons"

  type IconName = keyof typeof icons
  
  export let name: IconName
  export let width: number = 16
  export let height: number = 16
  export let title: string | undefined = undefined

  const typedIcons: IconData = icons
  const icon = typedIcons[name]
</script>

<svg
  class="icon"
  role="img"
  width={width}
  height={height}
  viewBox="0 0 {icon.viewBox.w} {icon.viewBox.h}"
  fill={icon.fill ?? "none"}
  xmlns="http://www.w3.org/2000/svg"
  ><title>{@html title || icon.title}</title><g>{@html icon.svg}</g></svg
>

<style lang="scss" global>
  .dark svg {
    fill: white;
  }
</style>