import preprocess from "svelte-preprocess"

export default function createPreprocessors(sourceMap) {
  return preprocess({
    sourceMap
  })
}
