import { collection, where, query } from "firebase/firestore"
import { useFirestore, useFirestoreCollectionData, useUser } from "reactfire"
import { Box, Stack, Divider } from "@mui/material"
import { Bid as BidType } from "storage/quest"

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
        <Stack>
          <Stack
            py={1}
            px={2}
            alignItems="center"
            justifyContent="space-between"
            direction="row"
            key={idx}
          >
            <Box>
              <Box>{title}</Box>
              <Box>@{bid?.userId}</Box>
            </Box>
            <Box>
              <Box>Estimated completion: {bid?.timeEstimate}</Box>
            </Box>
          </Stack>
          <Divider orientation="horizontal" flexItem />
        </Stack>
      ))}
    </Stack>
  )
}
