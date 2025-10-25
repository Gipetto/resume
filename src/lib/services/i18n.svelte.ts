interface Strings {
  [key: string]: string
}

// @ts-ignore yaml import
import strings from "$lib/data/strings-en_US.yaml"
const uiStrings: Strings = strings

const _ = (key: string, _default: string = ""): string => {
  return Object.prototype.hasOwnProperty.call(uiStrings, key) ? 
    uiStrings[key] : 
    _default
}

export default _
