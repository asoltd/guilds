import { URL, UUID } from "../common"

export enum Role {
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
  roles: Role[]
  industry: Industry
  image?: URL
  timeEstimate: string
  createdAt: Date
}
