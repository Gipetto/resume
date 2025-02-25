<script lang="ts">
  import _ from "../services/i18n.svelte"
  import ThemeSwitcher from "./ThemeSwitcher.svelte"
</script>

<footer>
    <span>
      &copy; {_("footer.copyright", "Me!")}
    </span>
    <span class="theme-button">
      &nbsp;|&nbsp;
      <ThemeSwitcher />
    </span>
    <span class="printed-from">
      &nbsp;|&nbsp;
      Printed from <a href="https://gipetto.github.io/resume">https://gipetto.github.io/resume</a>
    </span>
</footer>
