<script lang="ts">
  import _ from "$lib/services/i18n.svelte"
  import { content } from "$lib/store.svelte"
  import RobotAiTools from "$lib/components/RobotAiTools.svelte"
  import RobotAgentPractices from "$lib/components/RobotAgentPractices.svelte"

  const data = content.get("robotData")
  const everydayTools = content.get("everydayTools")

  function slugify(title: string): string {
    return title
      .toLowerCase()
      .replace(/&/g, "and")
      .replace(/\//g, " ")
      .replace(/[^a-z0-9 -]/g, "")
      .replace(/\s+/g, "-")
      .replace(/^-+|-+$/g, "")
  }

  function isYearColumn(dataKey: string) {
    return dataKey === "start" || dataKey === "end"
  }

  function isProficiencyColumn(dataKey: string) {
    return dataKey === "proficiency"
  }
  function natSort(a: string, b: string) {
    return a.localeCompare(b, undefined, { numeric: true })
  }
</script>

{#if data}
  <h2>{_("title.robotData", "For The Robots")}</h2>
  {#if everydayTools}
    <table id={slugify(everydayTools.title)}>
      <caption>{everydayTools.title}</caption>
      <tbody>
        <tr>
          <td>{everydayTools.items.sort(natSort).join(", ")}</td>
        </tr>
      </tbody>
    </table>
  {/if}
  {#each data as section (section.title)}
    <table id={slugify(section.title)}>
      <caption>{section.title}</caption>
      <thead>
        <tr>
          {#each section.headers as header (`header-${header.dataKey}`)}
            <th class:year-col={isYearColumn(header.dataKey)} class:proficiency-col={isProficiencyColumn(header.dataKey)}>{header.title}</th>
          {/each}
        </tr>
      </thead>
      <tbody>
      {#each section.items as item (item.title)}
        <tr>
          {#each section.headers as header (`row-${header.dataKey}`)}
          <td class:year-col={isYearColumn(header.dataKey)} class:proficiency-col={isProficiencyColumn(header.dataKey)}>{item[header.dataKey]}</td>
          {/each}
        </tr>
      {/each}
      </tbody>
    </table>
  {/each}
  <RobotAiTools />
  <RobotAgentPractices />
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

      .year-col {
        max-width: 8ch;
        text-align: right;
      }

      .proficiency-col {
        max-width: 10ch;
      }
    }
  }
</style>
