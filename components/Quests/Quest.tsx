import {
  useFirestore,
  useFirestoreDocData,
  useStorage,
  useStorageDownloadURL,
  useFirestoreCollectionData,
} from "reactfire"
import { doc } from "firebase/firestore"
import { useRouter } from "next/router"
import { Box, Button, Stack, Typography, Card, Chip } from "@mui/material"
import { ref } from "firebase/storage"
import { Tag } from "components/Quests/Tag"
import { Tag as TagType } from "storage/quest"
import { useState } from "react"
import { AddBidModal } from "components/Bids/AddBidModal"
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

  const biddersRef = collection(firestore, `quests/${quest?.id}/bids`)
  const biddersQuery = query(biddersRef, orderBy("amount", "asc"), limit(1))
  const { data: bids } = useFirestoreCollectionData(biddersQuery)

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
            {bids?.[0]?.amount && (
              <Box>
                <Chip
                  variant="outlined"
                  label={"Top Bid- £" + bids?.[0]?.amount}
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
            <Stack direction="row" spacing={1}>
              {quest?.tags.map((tag: TagType, idx) => (
                <Tag key={idx} value={tag} />
              ))}
            </Stack>
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
