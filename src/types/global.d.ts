/// <reference types="svelte" />

type Theme = "light" | "dark"

type Maybe<T> = T | null

type Loadable<T> = {
  isLoading: boolean
  data: T | undefined
  error?: string
}

export type Name = {
  firstName: string
  lastName: string
  nickName?: Maybe<string>
  title?: Maybe<string>
  tagline?: Maybe<string>
}

export type ContactMethods = {
  address?: {
    streetAddress?: Maybe<string>
    locality: string
    region: string
    postalCode: string
    countryName: string
  }
  methods?: {
    email?: Maybe<string>
    telFormatted?: Maybe<string>
    telE164?: Maybe<string>
    url?: Maybe<string>
  }
}

type Buzzword = {
  name: string
  text: string
}

type BuzzwordGroup = Buzzword[]

type Link = {
  icon: IconName
  href: string
  text: string
}

type Patent = {
  type: string
  number: string
  title: string
  issued: string
  description: string[]
}

type Job = {
  company: string
  location?: Maybe<string>
  url?: string
  positions: Position[]
  patents: Patent[]
  hidden?: true | false
}

type StartEndDate = {
  month?: Maybe<number>,
  year: Maybe<number>
}

type Position = {
  from?: StartEndDate
  to?: StartEndDate
  title: string
  description: string[]
}

type BookSmarts = {
  description: string
  date: StartEndDate
  institution?: Maybe<string>
}

type Objective = Maybe<string[]>

export type ResumeData = {
  name: Name
  objective?: Objective
  contact?: ContactMethods
  buzzwords?: BuzzwordGroup[]
  links?: Link[]
  currentWork?: Job[]
  workHistory?: Job[]
  education?: BookSmarts[]
}
