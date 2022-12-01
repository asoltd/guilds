import Link from "next/link"
import styled from "@emotion/styled"
import Image from "next/image"
import { Grid, Box, Stack, Typography } from "@mui/material"
import { QuestTag } from "../QuestTag"
import { Tag } from "types/quest"
import { Quest } from "types/quest"
import LinesElipsis from "react-lines-ellipsis"
import {
  StorageImage,
  useFirestore,
  useFirestoreCollectionData,
} from "reactfire"
import { collection, limit, orderBy, query } from "firebase/firestore"

const QuestThumbnail = styled(StorageImage)({
  objectFit: "cover",
  height: 240,
})

interface LatestQuestProps {
  quest: Quest
}

export function LatestQuest({ quest }: LatestQuestProps) {
  const firestore = useFirestore()
  const bidsRef = collection(firestore, `quests/${quest?.id}/bids`)
  const topBidsQuery = query(bidsRef, orderBy("amount", "asc"), limit(1))
  const { data: topBids } = useFirestoreCollectionData(topBidsQuery)
  const topBid = topBids?.[0]

  const convertImageName = () => {
    const [imageName, imageExtension] = quest.image.split(".")
    return imageName + "_420x240." + imageExtension
  }

  return (
    <Grid item xs={6}>
      <Box>
        <Stack spacing={1}>
          <QuestThumbnail
            storagePath={`quests/questsResized/${convertImageName()}`}
          />
          {topBid && (
            <Typography
              variant="body2"
              sx={{ fontWeight: 600, color: "primary.main" }}
            >
              {"Lowest price - " + topBid?.amount}
            </Typography>
          )}
          <Stack direction="row" justifyContent="space-between">
            <Typography variant="h6">{quest?.title}</Typography>
            <Link
              href={{
                pathname: "/quest",
                query: { questId: quest.id },
              }}
            >
              <Image
                src="/arrow-right-up.svg"
                alt="arrow-right-up"
                width={15}
                height={15}
              />
            </Link>
          </Stack>
          <Typography variant="body1">
            <LinesElipsis
              text={quest.description}
              maxLine="2"
              ellipsis="..."
              trimRight
              basedOn="words"
            />
          </Typography>
          <Grid container spacing={1}>
            <>
              {quest?.tags.map((tag: Tag, idx) => (
                <Grid item key={idx}>
                  <QuestTag value={tag} />
                </Grid>
              ))}
            </>
          </Grid>
        </Stack>
      </Box>
    </Grid>
  )
}
