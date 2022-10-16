import { Tag as TagEnum } from "storage/quest"
import { Chip } from "@mui/material"

interface TagProps {
  value: TagEnum
}

export function Tag({ value }: TagProps): JSX.Element {
  return <Chip label={value} />
}
