<script lang="ts">
  export let patent
</script>

<h4>{patent.type} {patent.number} - <span>{patent.title}</span></h4>
<p>{patent.description}</p>

<style lang="scss">
  h4 {
    line-height: 1.25rem;
    font-weight: 700;
    margin-block: 0.5em;

    span {
      font-weight: 400;
    }
  }
</style>