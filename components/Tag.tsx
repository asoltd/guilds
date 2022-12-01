import { Box } from "@mui/material"
import { Tag as TagEnum } from "types/quest"

interface TagProps {
  value: TagEnum
}

export const Tag = ({ value }: TagProps) => {
  return <Box>{value}</Box>
}
