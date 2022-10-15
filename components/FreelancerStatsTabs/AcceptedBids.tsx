import { collection, where, query } from "firebase/firestore"
import { useFirestore, useFirestoreCollectionData, useUser } from "reactfire"
import { Box, Stack, Divider } from "@mui/material"
import { Bid as BidType } from "storage/quest"

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
