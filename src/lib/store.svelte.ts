import { on } from "svelte/events"
import type { ResumeData, Theme } from "../types/global"
import { browser } from "$app/environment"

/**
 * Resume Data
 * @TODO - convert to Context
 */
const resumeData = await loadYaml<ResumeData>("/src/lib/data/content-en_US.yaml")
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

const content = new ResumeStore(resumeData as ResumeData)

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

const companiesData = await loadYaml<Companies>("/src/lib/data/companies.yaml")
import { loadYaml } from "./utils/yaml"
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
    set value(value: Theme) {
      if (document.startViewTransition) {
        document.startViewTransition(() => {
          theme = value
        })
      } else {
        theme = value
      }
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

/**
 * Robot Footer State
 */
type RobotState = "open" | "closed"
const startingRobotState: RobotState = "closed"

const createRobotState = (initialValue: RobotState) => {
  let robotState = $state(initialValue)

  return {
    get value() {
      return robotState
    },
    set value(value: RobotState) {
      robotState = value
    }
  }
}

const robot = createRobotState(startingRobotState)


export {
  content,
  companies,
  theme,
  robot
}
export type {
  Company,
  RobotState
}
