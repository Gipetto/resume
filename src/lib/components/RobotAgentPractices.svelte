<script lang="ts">
  import { content } from "$lib/store.svelte"

  const practices = content.get("agentPractices")
</script>

{#if practices}
  <table id="agent-working-practices" class="agent-practices-table">
    <caption>Agent Working Practices</caption>
    <thead>
      <tr>
        <th>Practice</th>
        <th>Detail</th>
      </tr>
    </thead>
    <tbody>
      {#each practices as practice (practice.title)}
        <tr>
          <td>{practice.title}</td>
          <td>{practice.detail}</td>
        </tr>
      {/each}
    </tbody>
  </table>
{/if}

<style lang="scss">
  .agent-practices-table {
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
