<script lang="ts">
  import _ from "../services/i18n"
  import ThemeSwitcher from "./ThemeSwitcher.svelte"
</script>

<footer>
  <p>
    &copy; {new Date().getFullYear()} {_("footer.copyright", "Me!")}
    <span class="theme-button">
      {" "}|{" "}
      <ThemeSwitcher />
    </span>
    <span class="printed-from">
      {" "}|{" "}
      Printed from <a href="https://gipetto.github.io/resume">https://gipetto.github.io/resume</a>
    </span>
  </p>
</footer>

<style lang="scss">
  .printed-from {
    display: none;
  }
</style>