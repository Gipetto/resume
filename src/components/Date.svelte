<script lang="ts">
  import type { StartEndDate } from "../global"

  export let date: StartEndDate

  const hasMonth = date.month && date.month > 0 && date.month <= 12
  const _formatter = new Intl.DateTimeFormat("en", { month: "short"})
  const _date = new Date(
    date.year as number,
    (date.month && hasMonth ? date.month - 1 : 1) as number
  )

  const year = _date.getFullYear()
  const month = _formatter.format(_date)
</script>

{#if hasMonth}{month}, {/if}{year}