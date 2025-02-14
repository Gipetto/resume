<script lang="ts">
  import { md } from "$lib/components/Markdown.svelte"
  import content from "./content.md?raw"
</script>

{@render md(content)}