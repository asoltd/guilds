import { URL, UUID } from "../common"

export interface Course {
  id: UUID
  xp: number
  verified: boolean
  title: string
  description: string
  image?: URL
  provider?: string
  creatorId?: string
  rating: number
  createdAt?: Date
}
