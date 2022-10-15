import { Stack } from "@mui/material"
import { collection, where, query } from "firebase/firestore"
import { useFirestore, useFirestoreCollectionData, useUser } from "reactfire"
import { Bid as BidType } from "storage/quest"
import { AcceptedBid } from "./AcceptedBid"

interface AcceptedBidsProps {
  path: string
  title: string
}

export function AcceptedBids({ path, title }: AcceptedBidsProps): JSX.Element {
  const firestore = useFirestore()
  const { data: user } = useUser()
  const bidsRef = collection(firestore, `quests/${path}/bids`)
  const userBidsQuery = query(bidsRef, where("userId", "==", user?.uid || ""))
  const acceptedBidsQuery = query(
    userBidsQuery,
    where("status", "==", "accepted")
  )
  const { status: acceptedBidsStatus, data: acceptedBids } =
    useFirestoreCollectionData(acceptedBidsQuery)

  return (
    <Stack>
      {acceptedBids?.map((bid: BidType, idx) => (
        <AcceptedBid path={path} title={title} bid={bid} key={idx} />
      ))}
    </Stack>
  )
}
