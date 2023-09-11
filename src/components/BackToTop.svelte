<script lang="ts">
  import Icon from "./Icon.svelte"
</script>

<p><a class="back-to-top" href="#main" on:click|preventDefault|stopPropagation={() => { 
  window.scrollTo(0, 0) 
}}><Icon name="returnArrow" width={18} height={18} />Back to top</a></p>

<style lang="css">
  .back-to-top {
    position: absolute;
    left: -9999px;
    top: auto;
    width: 1px;
    height: 1px;
    overflow: hidden;
  }
</style>