<script lang="ts">
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
            {#if contact.methods.url}
              <p>
                <a
                  class="url org"
                  rel="noopener noreferrer"
                  target="_blank"
                  href={contact.methods.url}
                >
                  {contact.methods.url}
                </a>
              </p>
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
    text-align: center;
    
    h1,
    h2 {
      margin: 0;
      padding: 0;
      line-height: 1.1;
    }

    .tagline {
      color: var(--color-orange);
      font-size: 3.4em;
      text-shadow: 1px 1px 0 black;
    }

    h2.title {
      font-size: 1.4em;
      margin-top: 0.25em;

      @include mixins.media(md-screen) {
        font-size: 2em;
      }
    }

    .quote {
      color: var(--color-orange);
    }

    // .contact {
    //   margin-left: 1.5em;
    // }

    // @include mixins.media(md-screen) {
    //   text-align: center;

    //   .contact {
    //     margin-left: 0;
    //   }
    // }

    .vcard {
      .contact-methods {
        p {
          margin-top: 0;
          margin-bottom: 0;
        }
      }
    }
  }
</style>
