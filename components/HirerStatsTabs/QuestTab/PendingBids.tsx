import { Stack } from "@mui/system"
import { useFirestore, useFirestoreCollectionData } from "reactfire"
import { collection, query, where } from "firebase/firestore"
import { PendingBid } from "./PendingBid"
import { Bid, Quest } from "storage/quest"

interface PendingBidProps {
  quest: Quest
}

export function PendingBids({ quest }: PendingBidProps) {
  const firestore = useFirestore()
  const bidsRef = collection(firestore, `quests/${quest?.id}/bids`)
  const pendingBidsQuery = query(bidsRef, where("status", "==", "pending"))
  const { status: pendingBidsStatus, data: pendingBids } =
    useFirestoreCollectionData(pendingBidsQuery)

  return (
    <Stack spacing={4}>
      {pendingBids?.map((bid: Bid, idx) => (
        <PendingBid key={idx} bid={bid} quest={quest} />
      ))}
    </Stack>
  )
}
