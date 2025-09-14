<script lang="ts">

  import { content } from "../store.svelte"
  import Icon from "./Icon.svelte"

  const sideProject = content.get("sideProject")
</script>

{#if sideProject}
<div class="featured-project">
  <h2>Featured Project</h2>
  <h3>{sideProject?.name}</h3>
  <p class="project-link">
    <a class="icon" href="{sideProject.url}" title="{sideProject.name}" target="_blank">
      <span>{sideProject.url}</span>
      <Icon name="link" title={sideProject.name} />
    </a>
  </p>
  {#if sideProject.description}
    {#each sideProject.description as text, i (`desc-${i}`)}
      <p>{text}</p>
    {/each}
  {/if}
</div>
{/if}
