<script lang="ts">
  import _ from "../services/i18n"
  import ThemeSwitcher from "./ThemeSwitcher.svelte"
</script>

<footer>
  <p>
    &copy; {new Date().getFullYear()} {_("footer.copyright", "Me!")}
    {" "}|{" "}
    <ThemeSwitcher />
  </p>
</footer>
