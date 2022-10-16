import {
  useFirestore,
  useFirestoreDocData,
  useStorage,
  useStorageDownloadURL,
  useFirestoreCollectionData,
} from "reactfire"
import { doc } from "firebase/firestore"
import { useRouter } from "next/router"
import { Box, Button, Stack, Typography, Grid, Chip } from "@mui/material"
import { ref } from "firebase/storage"
import { Tag } from "components/QuestTag"
import { Tag as TagType } from "storage/quest"
import { useState } from "react"
import { AddBidModal } from "components/AddBidModal"
import Image from "next/image"
import LinesEllipsis from "react-lines-ellipsis"
import { collection, query, orderBy, limit } from "firebase/firestore"

export function Quest(): JSX.Element {
  const [modalOpen, setModalOpen] = useState(false)
  const router = useRouter()
  const { questId } = router.query
  const firestore = useFirestore()
  const storage = useStorage()

  const questRef = doc(firestore, `quests/${questId}`)
  const { status: questStatus, data: quest } = useFirestoreDocData(questRef)
  const imageRef = ref(storage, `quests/${quest?.image}`)
  const { data: imageURL } = useStorageDownloadURL(imageRef)
  const bidsRef = collection(firestore, `quests/${questId}/bids`)
  const topBidsQuery = query(bidsRef, orderBy("amount", "asc"), limit(1))
  const { data: topBids } = useFirestoreCollectionData(topBidsQuery)
  const topBid = topBids?.[0]

  return (
    <Box>
      {questStatus === "loading" ? (
        <Box>loading</Box>
      ) : (
        <Stack direction="row" p={"3rem"}>
          <Stack
            spacing={4}
            width="50%"
            justifyContent={"flex-end"}
            pr={"1rem"}
          >
            {topBid && (
              <Box>
                <Chip
                  variant="outlined"
                  label={"Top Bid- £" + topBid?.amount}
                />
              </Box>
            )}
            <Typography variant="h2">{quest?.title}</Typography>
            <Typography variant="body1">
              <LinesEllipsis
                text={quest?.description}
                maxLine="3"
                ellipsis="..."
                trimRight
                basedOn="words"
              />
            </Typography>
            <Grid container spacing={1}>
              {quest?.tags?.map((tag: TagType, idx) => (
                <Grid item key={idx}>
                  <Tag value={tag} />
                </Grid>
              ))}
            </Grid>
            <Button
              variant="contained"
              sx={{ width: "30%" }}
              onClick={() => setModalOpen(true)}
            >
              Make a new bid
            </Button>
            <AddBidModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
          </Stack>
          <Image
            loader={() => imageURL}
            src={imageURL}
            width={560}
            height={640}
            objectFit="cover"
          />
        </Stack>
      )}
    </Box>
  )
}
