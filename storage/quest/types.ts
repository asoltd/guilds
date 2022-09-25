import { URL, UUID } from "../common"

export enum Tag {
  Design = "design",
  Management = "management",
  Research = "research",
  Presentation = "presentation",
  SoftwareDevelopment = "softwareDevelopment",
  CustomerSuccess = "customerSuccess",
  Leadership = "leadership",
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
}

export interface Bid {
  id: UUID
  questId: UUID
  userId: UUID
  amount: number
  timeEstimate: string
  createdAt: Date
  updatedAt?: Date
  status?: string
}
