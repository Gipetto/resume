<script lang="ts">
  import _ from "$lib/services/i18n.svelte"
  import { content } from "$lib/store.svelte"

  const data = content.get("robotData")
</script>

{#if data}
  <h2>{_("title.robotData", "For The Robots")}</h2>
  {#each data as section}
    <table>
      <caption>{section.title}</caption>
      <thead>
        <tr>
          {#each section.headers as header}
            <th>{header.title}</th>
          {/each}
        </tr>
      </thead>
      <tbody>
      {#each section.items as item}
        <tr>
          {#each section.headers as header}
          <td>{item[header.dataKey]}</td>
          {/each}
        </tr>
      {/each}
      </tbody>
    </table>
  {/each}
{/if}

<style lang="scss">
  table {
    margin-block: 2rem;
    font-family: system-ui;

    caption {
      font-weight: 900;
    }

    th {
      font-weight: 700;
    }

    th, td, caption {
      text-align: left;
    }

    th, td {
      padding-inline-start: 0.25rem;
      padding-inline-end: 1.5rem;
    }

    tr:hover {
      td {
        background-color: ghostwhite;
      }
    }
  }
</style>
