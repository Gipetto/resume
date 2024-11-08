<script lang="ts">
  /* eslint-disable svelte/no-at-html-tags */
  import * as icons from "../icons.json"
  import type { IconData } from "../types/icons"

  type IconName = keyof typeof icons
  
  const { 
    name,
    width = 16,
    height = 16,
    title = undefined
  }: {
    name: IconName
    width?: number
    height?: number
    title?: string | undefined
  } = $props()

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

<style lang="scss">
  :global(.dark svg) {
    fill: white;
  }
</style>