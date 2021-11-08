import { readable } from "svelte/store"
import type { Loadable, ResumeData } from "./global"
import type { Subscriber } from "svelte/store"
import stringsData from "../public/data/strings-en_US.json"

const fetcher = async <T>(dataPath: string): Promise<T> => {
  return fetch(dataPath).then((res) => res.json())
}

const getResumeData = (set: Subscriber<Loadable<ResumeData>>): void => {
  fetcher<ResumeData>("data/content-en_US.json").then((res) => {
    set({
      isLoading: false,
      data: res,
    })
  })
}

export const content = readable<Loadable<ResumeData>>(
  {
    isLoading: true,
    data: {},
  },
  (set) => {
    getResumeData(set)
    // return an unsubscribe method that does nothing
    return () => {}
  }
)
export const strings = readable<{ [key: string]: string }>(stringsData)
