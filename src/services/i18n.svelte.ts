import stringsData from "../data/strings-en_US.json"

const uiStrings: {[key: string]: string} = stringsData

const _ = (key: string, _default: string = ""): string => {
  // return uiStrings.hasOwnProperty(key) ? uiStrings[key] : _default
  return Object.prototype.hasOwnProperty.call(uiStrings, key) ? uiStrings[key] : _default
}

export default _
