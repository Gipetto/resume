<script lang="ts">
  import { resolve } from "$app/paths"
  import { content } from "$lib/store.svelte"

  const name = content.get("name")
  const contact = content.get("contact")
</script>

<header>
  <div class="vcard">
    <h1>
      <span class="given-name">{name?.firstName}</span>
      {#if name?.nickName}
        <span class="quote">“</span><span class="nickname"
          >{name?.nickName}</span
        ><span class="quote">”</span>
      {/if}
      <span class="family-name">{name?.lastName}</span>
    </h1>
    {#if name?.tagline}
      <h2 class="tagline" data-tagline={name?.tagline}>{name?.tagline}</h2>
    {/if}
    {#if name?.title}
      <h2 class="title">{name?.title}</h2>
    {/if}
    {#if contact}
      <div class="contact">
        {#if contact.address}
          <p class="adr">
            {#if contact.address.streetAddress}
              <span class="street-address"
                >{contact.address.streetAddress}</span
              ><br />
            {/if}
            {#if contact.address.locality && contact.address.region}
              <span>
                <span class="locality">{contact.address.locality}</span>,
                <span class="region">{contact.address.region}</span>
              </span><br />
            {/if}
            {#if contact.address.postalCode && contact.address.countryName}
              <span>
                <span class="postal-code">{contact.address.postalCode}</span>,
                <span class="country-name">{contact.address.countryName}</span>
              </span>
            {/if}
          </p>
        {/if}
        {#if contact.methods}
          <div class="contact-methods">
            {#if contact.methods.telE164}
              <p>
                <a class="tel" href="tel:{contact.methods.telE164}"
                  >{contact.methods.telFormatted}</a
                >
              </p>
            {/if}
            {#if contact.methods.urls}
              <ul class="urls">
                {#each contact.methods.urls as url (url)}
                  <li>
                    <a
                      class="url org"
                      rel="noopener noreferrer"
                      target="_blank"
                      href={url}
                    >
                      {url}
                    </a>
                  </li>
                {/each}
              </ul>
            {/if}
            {#if contact.methods.email}
              <p>
                <a class="email" href="mailto:{contact.methods.email}"
                  >{contact.methods.email}</a
                >
              </p>
            {/if}
          </div>
        {/if}
      </div>
    {/if}
  </div>
</header>

<style lang="scss">
  @use "../../style/mixins";

  header {
    width: min(1000px, 100% - 5rem);
    margin-inline: auto;
    text-align: center;

    h1,
    h2 {
      margin: 0;
      padding: 0;
      line-height: 1.1;
    }

    .adr {
      line-height: var(--line-height-med);
    }

    .tagline {
      color: var(--color-orange);
      font-size: 3.4em;
      text-shadow: 1px 1px 0 black;
    }

    h1 {
      font-size: 1.85rem;
    }

    h2.title {
      font-size: 2rem;
      margin: 0.5em 0;

      @include mixins.media(md-screen) {
        font-size: 2rem;
      }
    }

    .quote {
      color: var(--color-orange);
    }

    .vcard {
      .contact-methods {
        p {
          margin-top: 0;
          margin-bottom: 0;
        }
      }
    }

    .urls {
      margin-inline: auto;
      padding: 0;
      list-style: none;
      display: flex;
      flex-direction: row;
      justify-content: center;
      gap: 1rem;

      @include mixins.media(md-screen) {
        flex-direction: column;
        gap: 0;
      }
    }
  }
</style>
