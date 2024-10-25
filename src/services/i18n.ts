import { strings } from "../store.svelte"
import { get } from "svelte/store"

const uiStrings = get(strings)

const _ = (key: string, _default: string = ""): string => {
  return uiStrings.hasOwnProperty(key) ? uiStrings[key] : _default
}

export default _
