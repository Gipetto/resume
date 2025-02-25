<script lang="ts">
    import type { Patent } from "../../types/global"

  const { patent }: {
    patent: Patent
  } = $props()
</script>

<h4>{patent.type} {patent.number} - <span>{patent.title}</span></h4>
<p>{patent.description}</p>

<style lang="scss">
  h4 {
    font-weight: 700;
    margin-block: 0.5em;
    line-height: 1.5rem;

    span {
      font-weight: 400;
    }
  }

  p {
    line-height: var(--line-height);
    margin-block: 0.5em;
  }
</style>