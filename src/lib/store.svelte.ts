import { on } from "svelte/events"
import type { ResumeData, Theme } from "../types/global"
import { browser } from "$app/environment"

// const jsonFetcher = async <T>(dataPath: string): Promise<T> => {
//   return fetch(dataPath).then((res) => res.json())
// }

/**
 * Resume Data
 * @TODO - convert to Context
 */
// const createResumeStore = () => {
//   const content = $state<Loadable<ResumeData>>({
//     isLoading: true,
//     data: undefined
//   })

//   jsonFetcher<ResumeData>("data/content-en_US.json").then((res) => {
//     content.isLoading = false
//     content.data = res
//   })
//     .catch((err) => {
//       content.isLoading = false
//       content.data = undefined
//       content.error = "There was an error loading the resume content. Check the console for more information."
//       console.log(err)
//     })

//   return {
//     get value() {
//       return content
//     },
//     config: {
//       useBullets() {
//         return content.data?.config.history.bullets === true
//       }
//     },
//     data<T extends keyof ResumeData>(field: T) {
//       return content.data?.[field]
//     }
//   }
// }

// export const content = createResumeStore()

import resumeData from "$lib/data/content-en_US.json"
class ResumeStore {
  data = $state<ResumeData>()

  constructor(input: ResumeData) {
    this.data = input
  }

  config<T extends keyof ResumeData["config"]>(field: T) {
    return this.data?.config[field]
  }

  get<T extends keyof ResumeData>(field: T) {
    return this.data?.[field]
  }
}

const content = new ResumeStore(resumeData)

/**
 * Color Theme
 */
let startingTheme: Theme = "light"
let browserThemePreference

if (browser) {
  const storedTheme = localStorage.getItem("theme") as Theme
  browserThemePreference = window.matchMedia("(prefers-color-scheme: dark)")
  startingTheme = storedTheme || (browserThemePreference.matches ? "dark" : "light")
}

const createThemeStore = (initialValue: "light" | "dark") => {
  let theme = $state(initialValue)

  return {
    get value() {
      return theme
    },
    set value(value) {
      theme = value
      localStorage.setItem("theme", theme)
    }
  }
}

const theme = createThemeStore(startingTheme)

// Handle the browser preferences changing
if (browser && browserThemePreference) {
  on(browserThemePreference, "change", (e) => {
    /**
     * The media query above is specifically for dark mode, 
     * so `e.matches` here is "dark mode === true"
     */
    theme.value = e.matches ? "dark" : "light"
  })
}

export {
  content,
  theme
}