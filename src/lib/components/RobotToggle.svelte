<script lang="ts">
  import Icon from "./Icon.svelte"
  import { robot, type RobotState } from "$lib/store.svelte"

  const setRobotState = (value: RobotState) => {
    robot.value = value
  }
</script>

{#if robot.value === "closed"}
<button onclick={() => setRobotState("open")} aria-label="Open Robot Data">
  <Icon name="robot" width={20} height={20} align="bottom" />
</button>
{:else}
<button onclick={() => setRobotState("closed")} aria-label="Close Robot Data">
  <Icon name="robot_filled" width={20} height={20} align="bottom" />
</button>
{/if}

<style lang="scss">
  button {
    border: none;
    background: transparent;
    cursor: pointer;
    position: relative;
    padding: 0;
  }
</style>
