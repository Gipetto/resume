import { on } from "svelte/events"
import type { ResumeData, Theme } from "../types/global"
import { browser } from "$app/environment"

/**
 * Resume Data
 * @TODO - convert to Context
 */
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
 * Company Data for Cover Letter
 */

type Company = {
  name: string
  hiringManager: string
  address1: string
  address2?: string
  city: string
  state: string
  zipCode: string
}

type Companies = {
  [k: string]: Company
}

import companiesData from "$lib/data/companies.json"
class CompanyStore {
  data = $state<Companies>()

  constructor(companies: Companies) {
    this.data = companies
  }

  get<T extends keyof Companies>(key: T) {
    return this.data?.[key]
  }
}

const companies = new CompanyStore(companiesData)

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
  companies,
  theme
}
export type {
  Company
}