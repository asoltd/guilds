import { UUID } from './../common';
import { URL } from "../common"

export enum Tag {
  Design = "design",
  Management = "management",
  Research = "research",
  Presentation = "presentation",
  SoftwareDevelopment = "softwareDevelopment",
  CustomerSuccess = "customerSuccess",
  Leadership = "leadership",
}

export interface Team {
  image: URL
  name: {
    first: string,
    second: string,
    last: string
  }
  title: string
  description: string
  tags: Tag[]
  _id?: UUID
}
