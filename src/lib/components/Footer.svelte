<script lang="ts">
  import _ from "../services/i18n.svelte"
  import ForTheRobots from "./ForTheRobots.svelte"
  import RobotToggle from "./RobotToggle.svelte"
  import ThemeSwitcher from "./ThemeSwitcher.svelte"
  import { robot } from "$lib/store.svelte"

</script>

<footer>
  <div>
    <span>
      &copy; {_("footer.copyright", "Me!")}
    </span>
    &nbsp;|&nbsp;
    <span class="theme-button">
      <ThemeSwitcher />
    </span>
    <span class="printed-from">
      &nbsp;|&nbsp;
      Printed from <a href="https://gipetto.github.io/resume">https://gipetto.github.io/resume</a>
    </span>
    <span class="robot-button">
      <RobotToggle />
    </span>
  </div>
    <section id="robot-data" class="robot-content" hidden={robot.value === "closed"}>
      <ForTheRobots />
    </section>
</footer>
