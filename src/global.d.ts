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

type Position = {
  from: Maybe<number>
  to: Maybe<number>
  title: string
  description: string[]
}

type BookSmarts = {
  description: string
  date: string
  institution?: Maybe<string>
}

export type ResumeData = {
  name?: Name
  objective?: Maybe<string[]>
  contact?: ContactMethods
  buzzwords?: BuzzwordGroup[]
  links?: Link[]
  currentWork?: Job
  workHistory?: Job[]
  education?: BookSmarts[]
}
