<script lang="ts">
  import type { StartEndDate } from "$types/global"

  const { date }: {
     date: StartEndDate
  } = $props()

  const hasMonth = $derived(date.month && date.month > 0 && date.month <= 12)
  const _formatter = new Intl.DateTimeFormat("en", { month: "short"})
  const _date = $derived(new Date(
    date.year ?? 0,
    date.month && hasMonth ? date.month - 1 : 1
  ))

  const year = $derived(_date.getFullYear())
  const month = $derived(_formatter.format(_date))
</script>

{#if hasMonth}{month}&nbsp;{/if}{year}
