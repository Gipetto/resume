<script lang="ts">
  import { base } from "$app/paths"
  import { page } from "$app/state"

  const links = [
    {
      href: `${base}/`,
      text: "Resume"
    },
    {
      href: `${base}/cover-letter`,
      text: "Cover Letter"
    }
  ]

  let active = $derived(links.reduce((acc, item) => { return item.href === page.url.pathname ? item.href : acc }, ""))
  $effect(() => {
    console.log(active)
  })
</script>

<nav class="flex flex-row justify-content-center">
  <ul class="flex flex-row justify-content-center flex-wrap-nowrap">
    {#each links as link}
      <li class:active={active === link.href} >
        <a href="{link.href}">{link.text}</a>
      </li>
    {/each}
  </ul>
</nav>

<style lang="scss">
  nav {
    --border-radius: 0.25rem;

    ul {
      list-style-type: none;
      margin: 0;
      padding: 0.25rem;
      gap: 0.25rem;
      background-color: darkgray;
      border-radius: var(--border-radius);

      li {
        text-align: center;
        white-space: nowrap;
        padding: 0.5rem 1rem;
        border-radius: var(--border-radius);
        flex-basis: 50%;

        &:not(.active) {
          background-color: dimgray;
          a {
            color: var(--background-color);
          }
        }

        &.active {
          background-color: var(--background-color);
          a {
            font-weight: 700;
            text-decoration: none;
          }
        }
      }
    }
  }
</style>