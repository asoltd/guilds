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
  image: URL
  reward: number
  title: string
  description: string
  tags: Tag[]
  bids?: Bid[]
}

export interface Bid {
  id: UUID
  userId: UUID
  amount: number
  timeEstimate: string
  createdAt: Date
  updatedAt?: Date
  // createdAt, updatedAt should be available from Firestore
}
