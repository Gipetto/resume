import { on } from "svelte/events"
import type { Loadable, ResumeData, Theme } from "./types/global"

const jsonFetcher = async <T>(dataPath: string): Promise<T> => {
  return fetch(dataPath).then((res) => res.json())
}

/**
 * Resume Data
 */
const createResumeStore = () => {
  const content = $state<Loadable<ResumeData>>({
    isLoading: true,
    data: undefined
  })

  jsonFetcher<ResumeData>("data/content-en_US.json").then((res) => {
    content.isLoading = false
    content.data = res
  })
  .catch((err) => {
    content.isLoading = false
    content.data = undefined
    content.error = "There was an error loading the resume content. Check the console for more information."
    console.log(err)
  })

  return {
    get value() {
      return content
    }
  }
}

export let content = createResumeStore()

/**
 * Color Theme
 */
const storedTheme = localStorage.getItem("theme") as Theme
const browserThemePreference = window.matchMedia("(prefers-color-scheme: dark)")
const startingTheme = storedTheme || (browserThemePreference.matches ? "dark" : "light")

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

export let theme = createThemeStore(storedTheme || startingTheme)

// Handle the browser preferences changing
on(browserThemePreference, "change", (e) => {
  /**
   * The media query above is specifically for dark mode, 
   * so `e.matches` here is "dark mode === true"
   */
  theme.value = e.matches ? "dark" : "light"
})