import { Grid, Box, Stack, Typography } from "@mui/material"
import Link from "next/link"
import { Tag } from "./Tag"
import { Tag as TagType } from "storage/quest"
import { Quest } from "storage/quest"
import LinesElipsis from "react-lines-ellipsis"
import {
  StorageImage,
  useFirestore,
  useFirestoreCollectionData,
} from "reactfire"
import { collection, limit, orderBy, query } from "firebase/firestore"

interface QuestHitProps {
  hit: Quest
}

export function QuestHit({ hit }: QuestHitProps) {
  const firestore = useFirestore()
  const biddersRef = collection(firestore, `quests/${hit.id}/bids`)
  const biddersQuery = query(biddersRef, orderBy("amount", "asc"), limit(1))
  const { data: bids } = useFirestoreCollectionData(biddersQuery)

  const convertImageName = () => {
    const [imageName, imageExtension] = hit.image.split(".")
    return imageName + "_420x240." + imageExtension
  }

  return (
    <Grid item xs={6} p={"2rem"}>
      <Link
        href={{
          pathname: "/quest",
          query: { questId: hit.id },
        }}
      >
        <Box width={"28rem"}>
          <Stack spacing={2}>
            <StorageImage
              storagePath={`quests/questsResized/${convertImageName()}`}
            />
            {bids?.[0]?.amount && (
              <Typography variant="body1">
                {"Lowest price - £" + bids?.[0]?.amount}
              </Typography>
            )}
            <Typography variant="h6">{hit?.title}</Typography>
            <Typography variant="body1">
              <LinesElipsis
                text={"Description: " + hit.description}
                maxLine="2"
                ellipsis="..."
                trimRight
                basedOn="words"
              />
            </Typography>
            <Grid container spacing={1}>
              <>
                {hit?.tags.map((tag: TagType, idx) => (
                  <Grid item key={idx}>
                    <Tag value={tag} />
                  </Grid>
                ))}
              </>
            </Grid>
          </Stack>
        </Box>
      </Link>
    </Grid>
  )
}
