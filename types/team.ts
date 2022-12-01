import { URL, UUID } from "./common"
import { Hero } from "./hero"

export enum RoleTitle {
  Designer = "Designer",
  ProductDesigner = "Product Designer",
  SoftwareDevelopment = "Software Development",
  Presentor = "Presentor",
}

export enum Industry {
  Fintech = "Fintech",
  Technology = "Technology",
  Accounting = "Accounting",
  Construction = "Construction",
}

export interface Team {
  id: UUID
  creatorId: UUID
  title: string
  description: string
  highlight: string
  industry: Industry
  image?: URL
  timeEstimate: string
  bidders: UUID[]
  members: UUID[]
  createdAt: Date
}

export interface Role {
  id: UUID
  title: RoleTitle | string
  description: string
  status: string
  createdAt: Date
  image?: URL
  memberId?: UUID
}

export interface TeamMember extends Hero {
  role: UUID
}

export interface Bid {
  id: UUID
  bidderId: UUID
  amount: number
  timeEstimate: string
  createdAt: Date
  updatedAt?: Date
  status?: string
}
