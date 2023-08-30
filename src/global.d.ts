/// <reference types="svelte" />

type Maybe<T> = T | null

type Loadable<T> = {
  isLoading: boolean
  data: T
}

export type Name = {
  firstName: string
  lastName: string
  nickName?: Maybe<string>
  title?: Maybe<string>
}

export type ContactMethods = {
  address: {
    streetAddress: string
    locality: string
    region: string
    postalCode: string
    countryName: string
  }
  methods: {
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
  icon: string
  href: string
  text: string
}

type Job = {
  company: string
  location?: Maybe<string>
  positions: Position[]
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
  name?: Name
  objective?: Objective
  contact?: ContactMethods
  buzzwords?: BuzzwordGroup[]
  links?: Link[]
  currentWork?: Job
  workHistory?: Job[]
  education?: BookSmarts[]
}
