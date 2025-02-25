<script lang="ts">
  import { base } from "$app/paths"
  import { page } from "$app/state"
  import logo from "../logos/sp.svg?raw"

  const company = page.params.company

  const buildPath = (path: string) => {
    let _path = `${path}`.replace(/^\//, "")

    if (company) {
      _path = `${company}${path}`
    }

    return `${base}/${_path}`
  }

  const links = [
    {
      href: buildPath("/"),
      text: "Resume"
    },
    {
      href: buildPath("/cover-letter"),
      text: "Cover Letter"
    }
  ]

  let active = $derived(links.reduce((acc, item) => { return item.href === page.url.pathname ? item.href : acc }, ""))

  const logoEncoded = `data:image/svg+xml,${encodeURIComponent(logo)}`
</script>

<nav class="flex flex-row justify-content-center">
  <ul class="flex flex-row justify-content-center flex-wrap-wrap">
    <li>
      <a class="logo" href={links[0].href}>
        <img src={logoEncoded} role="presentation" alt="" width={24} height={24} />
      </a>
    </li>
    {#each links as link}
      <li class="flex-grow-1" class:active={active === link.href} >
        <a href="{link.href}">{link.text}</a>
      </li>
    {/each}
  </ul>
</nav>

<style lang="scss">
  nav {
    isolation: isolate;
    border-bottom: 1px dotted gray;
    margin-bottom: 3rem;
    width: 100vw;
    background-color: var(--background-color);
    position: fixed;
    z-index: 999;

    ul {
      list-style-type: none;
      margin: 0;
      padding: 0;

      li {
        border-right: 1px dotted gray;
        padding: 0.5rem 2rem;

        a {
          white-space: nowrap;
        }

        &.active {
          font-style: italic;
          font-weight: bold;
        }

        .logo {
          display: flex;
          justify-content: baseline;
          align-items: center;
          width: 100%;
          height: 100%;
        }
      }
    }
  }
</style>