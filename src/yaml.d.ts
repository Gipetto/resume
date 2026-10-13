declare module "$lib/data/content-en_US.yaml" {
  import type { ResumeData } from "../types/global"
  const d: ResumeData
  export default d
}

declare module "$lib/data/companies.yaml" {
  import type { Companies } from "./types"
  const d: Companies
  export default d
}

declare module "$lib/data/strings-en_US.yaml" {
  import type { Strings } from "./types"
  const d: Strings
  export default d
}
