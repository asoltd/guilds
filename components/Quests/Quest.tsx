import { useFirestore, useFirestoreDocData } from "reactfire"
import { doc } from "firebase/firestore"
import { useRouter } from "next/router"
import { Box, Button, Stack, Typography, Card } from "@mui/material"
import { Tag } from "components/Quests/Tag"
import { Tag as TagType } from "storage/quest"
import { useState } from "react"
import { AddBidModal } from "components/Bids/AddBidModal"

export function Quest(): JSX.Element {
  const [modalOpen, setModalOpen] = useState(false)

  const router = useRouter()
  const { questId } = router.query
  const firestore = useFirestore()
  const questRef = doc(firestore, `quests/${questId}`)
  const { status: questStatus, data: quest } = useFirestoreDocData(questRef)

  return (
    <Card sx={{ mt: 4, p: 4 }}>
      {questStatus === "loading" ? (
        <Box>loading</Box>
      ) : (
        <Stack spacing={2}>
          <Typography variant="h3">Quest: {quest?.title}</Typography>
          <Box>Description: {quest?.description}</Box>
          <Box>Reward: {quest?.reward}</Box>
          <Stack direction="row" spacing={1}>
            <Box>Tags:</Box>
            {quest?.tags.map((tag: TagType, idx) => (
              <Tag key={idx} value={tag} />
            ))}
          </Stack>
          <Button
            variant="contained"
            sx={{ width: "20%" }}
            onClick={() => setModalOpen(true)}
          >
            add bid
          </Button>
          <AddBidModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
        </Stack>
      )}
    </Card>
  )
}
