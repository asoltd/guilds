import { Quest, Bid } from "../quest"
import { URL, Email, ISODateString } from "../common"

export interface Hero {
  profilePicture: URL
  email: Email // only readable by signed in users
  name: Name
  location: Location

  bio?: string
  twitter?: URL
  linkedin?: URL
  website?: URL
  bids?: Bid[]
  quests?: Quest[] // only readable by signed in users
  portfolio?: URL[]
  experience?: Experience[]
  rating?: number
}

export type Location = {
  city: string
  country: string
}

export type Experience = {
  position: string
  company: string
  startDate: ISODateString
  endDate: ISODateString
}

export type Name = {
  first: string
  second: string
  last: string
}
