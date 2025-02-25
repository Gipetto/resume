<script lang="ts">
  import type { LayoutProps } from "../../cover-letter/$types"

  let { children }: LayoutProps = $props()
</script>

<div class="grid-single">
  {@render children?.()}
</div>
