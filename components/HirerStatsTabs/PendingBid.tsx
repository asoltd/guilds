import { Box, Button, Stack, Card } from "@mui/material"
import { doc, updateDoc } from "firebase/firestore"
import { useFirestore } from "reactfire"
import { Bid, Quest } from "storage/quest"

interface PendingBidProps {
  bid: Bid
  quest: Quest
}

export function PendingBid({ bid, quest }: PendingBidProps) {
  const firestore = useFirestore()
  const bidRef = doc(firestore, `quests/${quest?.id}/bids/${bid?.id}`)

  const handleBidAccept = async () => {
    await updateDoc(bidRef, { status: "accepted" })
  }

  const handleBidReject = async () => {
    await updateDoc(bidRef, { status: "rejected" })
  }

  return (
    <Card sx={{ p: 2 }}>
      <Stack
        direction={"row"}
        spacing={4}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Box>{quest?.title}</Box>
        <Stack direction={"row"} spacing={4}>
          <Button variant="contained" onClick={() => handleBidAccept()}>
            Accept
          </Button>
          <Button variant="contained" onClick={() => handleBidReject()}>
            Reject
          </Button>
        </Stack>
        <Box>{bid?.amount}</Box>
      </Stack>
    </Card>
  )
}
