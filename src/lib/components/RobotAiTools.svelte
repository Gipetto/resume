<script lang="ts">
  import { content } from "$lib/store.svelte"

  const tools = content.get("aiTools")
</script>

{#if tools}
  <table id="ai-development-tools" class="ai-tools-table">
    <caption>AI Development Tools</caption>
    <thead>
      <tr>
        <th>Tool</th>
        <th>Usage</th>
      </tr>
    </thead>
    <tbody>
      {#each tools as tool (tool.title)}
        <tr>
          <td>{tool.title}</td>
          <td>{tool.usage}</td>
        </tr>
      {/each}
    </tbody>
  </table>
{/if}

<style lang="scss">
  .ai-tools-table {
    border-collapse: collapse;
    margin-block: 2rem;
    font-family: system-ui;
    width: 100%;
    table-layout: fixed;

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
        text-align: left;
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

      th:last-child {
        width: 65%;
      }
    }
  }
</style>
