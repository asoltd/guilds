import { Stack } from "@mui/material"
import { collection, where, query } from "firebase/firestore"
import { useFirestore, useFirestoreCollectionData, useUser } from "reactfire"
import { Bid as BidType } from "storage/quest"
import { PendingBid } from "./PendingBid"

interface PendingBidsProps {
  path: string
  title: string
}

export function PendingBids({ path, title }: PendingBidsProps): JSX.Element {
  const firestore = useFirestore()
  const { data: user } = useUser()
  const bidsRef = collection(firestore, `quests/${path}/bids`)
  const userBidsQuery = query(bidsRef, where("userId", "==", user?.uid || ""))
  const PendingBidsQuery = query(
    userBidsQuery,
    where("status", "==", "pending")
  )
  const { status: pendingBidsStatus, data: pendingBids } =
    useFirestoreCollectionData(PendingBidsQuery)

  return (
    <Stack>
      {pendingBids?.map((bid: BidType, idx) => (
        <PendingBid path={path} title={title} bid={bid} key={idx} />
      ))}
    </Stack>
  )
}
