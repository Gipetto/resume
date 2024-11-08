import { mount } from "svelte"
import App from "./App.svelte"

const app = mount(App, {
  target: document.getElementById("main") ?? document.body,
  props: {},
})

export default app
