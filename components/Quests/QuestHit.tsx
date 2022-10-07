import { Tag } from "./Tag"
import { Box, Button, Card, Stack } from "@mui/material"
import { Tag as TagType } from "storage/quest"
import { Bids } from "../Bids/Bids"
import Link from "next/link"

export function QuestHit({ hit }) {
  return (
    <Card variant="outlined" sx={{ p: "1rem", height: "25rem" }}>
      <Stack spacing={2}>
        <Box>Title: {hit?.title}</Box>
        <Box>Description: {hit?.description}</Box>
        <Box>Reward: {hit?.reward}</Box>
        <Stack direction="row" spacing={1}>
          <Box>Tags:</Box>
          {hit?.tags.map((tag: TagType, idx) => (
            <Tag key={idx} value={tag} />
          ))}
        </Stack>
        <Bids path={`quests/${hit.id}/bids`} />
        <Link
          href={{
            pathname: "/quest",
            query: { questId: hit.id },
          }}
        >
          <Button variant="contained">see quest</Button>
        </Link>
      </Stack>
    </Card>
  )
}
