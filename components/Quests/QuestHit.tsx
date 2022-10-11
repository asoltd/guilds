import { Grid, Card, Box, Stack, Link as MuiLink } from "@mui/material"
import Link from "next/link"
import { Bids } from "../Bids/Bids"
import { Tag } from "./Tag"
import { Tag as TagType } from "storage/quest"
import { Quest } from "storage/quest"
import LinesElipsis from "react-lines-ellipsis"
import { StorageImage } from "reactfire"

interface QuestHitProps {
  hit: Quest
}

export function QuestHit({ hit }: QuestHitProps) {
  return (
    <Grid item xs={6}>
      <Card variant="outlined" sx={{ p: "1rem" }}>
        <Stack spacing={2}>
          <StorageImage storagePath={`quests/questsResized/${hit.image}`} />
          <Box>Title: {hit?.title}</Box>
          <Box>
            <LinesElipsis
              text={"Description: " + hit.description}
              maxLine="2"
              ellipsis="..."
              trimRight
              basedOn="words"
            />
            <Link
              href={{
                pathname: "/quest",
                query: { questId: hit.id },
              }}
            >
              <MuiLink>see more</MuiLink>
            </Link>
          </Box>
          <Box>Reward: {hit?.reward}</Box>
          <Stack direction="row" spacing={1}>
            <Box>Tags:</Box>
            {hit?.tags.map((tag: TagType, idx) => (
              <Tag key={idx} value={tag} />
            ))}
          </Stack>
          <Bids path={`quests/${hit.id}/bids`} />
        </Stack>
      </Card>
    </Grid>
  )
}
