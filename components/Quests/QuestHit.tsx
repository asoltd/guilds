import styled from "styled-components"
import { Tag } from "./Tag"
import { Box, Button, Card } from "@mui/material"
import { Tag as TagType } from "storage/quest"
import { Bids } from "../Bids/Bids"
import Link from "next/link"

const QuestProperty = styled.div`
  margin-bottom: 1rem;
`

export function QuestHit({ hit }) {
  return (
    <Card variant="outlined" sx={{ p: "1rem" }}>
      <QuestProperty>Title: {hit?.title}</QuestProperty>
      <QuestProperty>Description: {hit?.description}</QuestProperty>
      <QuestProperty>Reward: {hit?.reward}</QuestProperty>
      <QuestProperty>Tags:</QuestProperty>
      {hit?.tags.map((tag: TagType, idx) => (
        <Tag key={idx} value={tag} />
      ))}
      <Bids path={`quests/${hit.id}/bids`} />
      <Link
        href={{
          pathname: "/quest",
          query: { questId: hit.id },
        }}
      >
        <Button variant="contained">see quest</Button>
      </Link>
    </Card>
  )
}
