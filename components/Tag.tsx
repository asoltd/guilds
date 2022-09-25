import { Tag as TagEnum } from "storage/quest"
import styled from "styled-components"

interface TagProps {
  value: TagEnum
}

const TagContainer = styled.div``

export const Tag = ({ value }: TagProps) => {
  return <TagContainer>{value}</TagContainer>
}
