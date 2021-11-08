<script lang="ts">
import type { ContactMethods, Name } from "../global"

export let name: Name
export let contact: ContactMethods
export let isLoading: boolean
</script>

{#if !isLoading}
<header>
  <div class="vcard">
    <h1 class="fn">
      <span class="given-name">{name.firstName}</span>
      {#if name.nickName}
      <span class="quote">“</span><span class="nickname">{name.nickName}</span><span class="quote">”</span>
      {/if}
      <span class="family-name">{name.lastName}</span>
    </h1>
    {#if name.title}
    <h2 class="title">{name.title}</h2>
    {/if}
    <div class="contact">
      <p class="adr">
        <span class="street-address">{contact.address.streetAddress}</span><br>
        <span class="locality">{contact.address.locality}</span>, <span class="region">{contact.address.region}</span><br>
        <span class="postal-code">{contact.address.postalCode}</span>, <span class="country-name">{contact.address.countryName}</span>
      </p>
      <div class="methods">
        {#if contact.methods.telE164}
        <p>
          <a class="tel" href="tel:{contact.methods.telE164}">{contact.methods.telFormatted}</a>
        </p>
        {/if}
        {#if contact.methods.url}
        <p>
          <a class="url org" rel="noopener noreferrer" target="_blank" href={contact.methods.url}>
            {contact.methods.url}
          </a>
        </p>
        {/if}
        {#if contact.methods.email}
        <p>
          <a class="email" href="mailto:{contact.methods.email}">{contact.methods.email}</a>
        </p>
        {/if}
      </div>
    </div>
  </div>
</header>
{/if}