import { loadYaml } from "$lib/utils/yaml"

interface Strings {
  [key: string]: string
}

const uiStrings = await loadYaml<Strings>("/src/lib/data/strings-en_US.yaml")

const _ = (key: string, _default: string = ""): string => {
  return Object.prototype.hasOwnProperty.call(uiStrings, key) ? 
    uiStrings[key] : 
    _default
}

export default _
