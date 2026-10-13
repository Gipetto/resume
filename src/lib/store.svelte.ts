import { on } from "svelte/events"
import type { ResumeData, Theme } from "../types/global"
import type { Company, Companies } from "./types"
import { browser } from "$app/env"

/**
 * Resume Data
 * @TODO - convert to Context
 */
import resumeData from "$lib/data/content-en_US.yaml"
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

import companiesData from "$lib/data/companies.yaml"
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
const storedTheme = browser ? localStorage.getItem("theme") : null
const startingTheme: Theme = storedTheme === "light" || storedTheme === "dark"
  ? storedTheme
  : (browser ? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light") : "light")

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
          localStorage.setItem("theme", theme)
        })
      } else {
        theme = value
        localStorage.setItem("theme", theme)
      }
    }
  }
}

const theme = createThemeStore(startingTheme)

if (browser) {
  const browserThemePreference = window.matchMedia("(prefers-color-scheme: dark)")

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