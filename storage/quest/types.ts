import { URL, UUID } from "../common"

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
  userId: UUID
  reward: number
  title: string
  description: string
  tags: Tag[]
  image?: URL
  bidders?: string[]
  status: string
  createdAt: Date
}

export interface Bid {
  id: UUID
  questId: UUID
  bidderId: UUID
  amount: number
  timeEstimate: string
  createdAt: Date
  updatedAt?: Date
  status?: string
}
