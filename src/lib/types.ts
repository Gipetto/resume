export type Company = {
  name: string
  hiringManager: string
  address1: string
  address2?: string
  city: string
  state: string
  zipCode: string
}

export type Companies = {
  [k: string]: Company
}

export type Strings = {
  [key: string]: string
}
