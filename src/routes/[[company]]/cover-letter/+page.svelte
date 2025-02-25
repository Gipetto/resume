<script lang="ts">
  import { md } from "$lib/components/Markdown.svelte"
  import markdown from "./content.md?raw"
  import { companies } from "$lib/store.svelte"
  import { page } from "$app/state"

  const routeParam = page.params.company as string

  const defaultCompany = companies.get("sample")
  const company = companies.get(routeParam)
  

  const variables = {
    "Hiring Manager": company?.hiringManager || defaultCompany?.hiringManager,
    "Company Name": company?.name || defaultCompany?.name,
    "Company Address": company?.address1 || defaultCompany?.address1,
    "City": company?.city || defaultCompany?.city,
    "State": company?.state || defaultCompany?.state,
    "Zip Code": company?.zipCode || defaultCompany?.zipCode,
  }
</script>

<div id="content" class="cover-letter">
  {@render md(markdown, variables)}
</div>