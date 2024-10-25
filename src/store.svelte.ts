import { readable, writable } from "svelte/store"
import { on } from "svelte/events"
import type { Loadable, ResumeData, Theme } from "./types/global"
import type { Subscriber } from "svelte/store"
import stringsData from "./data/strings-en_US.json"

const jsonFetcher = async <T>(dataPath: string): Promise<T> => {
  return fetch(dataPath).then((res) => res.json())
}

/**
 * Resume Data
 */
const getResumeData = (set: Subscriber<Loadable<ResumeData>>): void => {
  jsonFetcher<ResumeData>("data/content-en_US.json").then((res) => {
    set({
      isLoading: false,
      data: res,
    })
  })
  .catch((err) => {
    set({
      isLoading: false,
      data: undefined,
      error: "There was an error loading the resume content. Check the console for more information."
    })
    console.error(err)
  })
}

export const content = readable<Loadable<ResumeData>>(
  {
    isLoading: true,
    data: undefined,
  },
  (set) => {
    getResumeData(set)    
    return () => {}
  }
)
export const strings = readable<{ [key: string]: string }>(stringsData)

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