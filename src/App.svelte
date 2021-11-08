<script lang="ts">
import { content } from "./store"
import Header from "./components/Header.svelte"
import History from "./components/History.svelte"
import Buzzwords from "./components/Buzzwords.svelte"
import Footer from "./components/Footer.svelte"

const unusbscribe = content.subscribe(() => {})
</script>

<Header 
	name={$content.data.name} 
	contact={$content.data.contact}
	isLoading={$content.isLoading}
/>
{#if $content.isLoading == false}
<section class="content">
	<History 
		objective={$content.data.objective}
		currentWork={$content.data.currentWork}
		workHistory={$content.data.workHistory}
		education={$content.data.education}
	/>
</section>
<aside>
	<Buzzwords 
		buzzwordGroups={$content.data.buzzwords} 
		links={$content.data.links} 
	/>
</aside>
{/if}
<Footer/>
