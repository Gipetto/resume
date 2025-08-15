<script lang="ts">
  import _ from "$lib/services/i18n.svelte"
  import { content } from "$lib/store.svelte"

  const data = content.get("robotData")
</script>

{#if data}
  <h2>{_("title.robotData", "For The Robots")}</h2>
  {#each data as section (section.title)}
    <table>
      <caption>{section.title}</caption>
      <thead>
        <tr>
          {#each section.headers as header (`header-${header.dataKey}`)}
            <th>{header.title}</th>
          {/each}
        </tr>
      </thead>
      <tbody>
      {#each section.items as item (item.title)}
        <tr>
          {#each section.headers as header (`row-${header.dataKey}`)}
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
    border-collapse: collapse;
    margin-block: 2rem;
    font-family: system-ui;
    width: 100%;

    caption {
      font-weight: 900;
      text-align: left;
    }


    tr:hover {
      td {
        background-color: ghostwhite;
      }
    }

    tr {
      th, td {
        padding-inline-start: 0.25rem;
        padding-inline-end: 1rem;
        padding-block: 0.3rem;
        text-align: right;
        font-size: 0.9em;
        line-height: 1.1;
        font-variant-numeric: tabular-nums;
      }

      td {
        border: 1px dotted rgb(0 0 0 / 0.25);
      }

      th {
        font-weight: 700;
      }

      th:nth-child(1),
      td:nth-child(1) {
        text-align: left;
      }

      th:nth-child(2),
      td:nth-child(2) {
        width: 11ch;
      }

      th:nth-child(3),
      td:nth-child(3) {
        width: 11ch;
      }

      th:nth-child(4),
      td:nth-child(4) {
        width: 16ch;
      }
    }
  }
</style>
