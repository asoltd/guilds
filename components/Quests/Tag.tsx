import { Tag as TagEnum } from "storage/quest"
import styled from "styled-components"

interface TagProps {
  value: TagEnum
}

const TagContainer = styled.div``

export function Tag({ value }: TagProps): JSX.Element {
  return <TagContainer>{value}</TagContainer>
}
