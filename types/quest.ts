import { URL, UUID } from "./common"

export enum Tag {
  Design = "Design",
  Management = "Management",
  Research = "Research",
  Presentation = "Presentation",
  SoftwareDevelopment = "Software Development",
  CustomerSuccess = "Customer Success",
  Leadership = "Leadership",
}

export interface Quest {
  id: UUID
  creatorId: UUID
  reward: string
  title: string
  description: string
  tags: Tag[]
  image?: URL
  bidders?: UUID[]
  status: string
  createdAt: Date
  summary: string
  level: number
}

export interface Bid {
  id: UUID
  bidderId: UUID
  amount: string
  timeEstimate: string
  createdAt: Date
  updatedAt?: Date
  status?: string
}
