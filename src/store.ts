import { readable } from "svelte/store"
import type { Loadable, ResumeData } from "./global"
import type { Subscriber } from "svelte/store"
import stringsData from "../public/data/strings-en_US.json"

const jsonFetcher = async <T>(dataPath: string): Promise<T> => {
  return fetch(dataPath).then((res) => res.json())
}

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
    
    // return an unsubscribe method that does nothing
    return () => {}
  }
)
export const strings = readable<{ [key: string]: string }>(stringsData)
