import { Box, Stack, Typography } from "@mui/material"
import { collection, query, where } from "firebase/firestore"
import { useFirestore, useFirestoreCollectionData, useUser } from "reactfire"
import { Bid } from "storage/quest"

interface AllBidsProps {
  path: string
}

export function AllBids({ path }): JSX.Element {
  const firestore = useFirestore()
  const { status, data: user } = useUser()
  const bidsRef = collection(firestore, "quests", `${path}`, "bids")
  const userBidsQuery = query(bidsRef, where("userId", "==", user?.uid || ""))
  const acceptedBidsQuery = query(
    userBidsQuery,
    where("status", "==", "accepted")
  )
  const { status: acceptedBidsStatus, data: acceptedBids } =
    useFirestoreCollectionData(acceptedBidsQuery)
  const pendingBidsQuery = query(
    userBidsQuery,
    where("status", "==", "pending")
  )
  const { status: pendigBidsStatus, data: pendingBids } =
    useFirestoreCollectionData(pendingBidsQuery)
  return (
    <Box>
      {acceptedBidsStatus && (
        <>
          {acceptedBidsStatus === "loading" ? (
            <Typography>loading bids</Typography>
          ) : (
            <>
              {acceptedBids ? (
                acceptedBids.map((bid: Bid, idx) => (
                  <Stack key={idx}>
                    <Typography>{bid?.amount}</Typography>
                  </Stack>
                ))
              ) : (
                <Typography>no bids</Typography>
              )}
            </>
          )}
        </>
      )}
    </Box>
  )
}

// export function FreelancerBids({ path }): JSX.Element {
//   const firestore = useFirestore()
//   const { status, data: user } = useUser()
//   const bidsRef = collection(firestore, "quests", `${path}`, "bids")
//   const bidsQuery = query(bidsRef, where("userId", "==", user?.uid || ""))
//   const { status: bidsStatus, data: bids } =
//     useFirestoreCollectionData(bidsQuery)
//   return (
//     <Box>
//       {bidsStatus && (
//         <>
//           {bidsStatus === "loading" ? (
//             <Typography>loading bids</Typography>
//           ) : (
//             <>
//               {bids ? (
//                 bids.map((bid: Bid, idx) => (
//                   <BidComponent key={idx} value={bid} />
//                 ))
//               ) : (
//                 <Typography>no bids</Typography>
//               )}
//             </>
//           )}
//         </>
//       )}
//     </Box>
//   )
// }

/* <>
        {questsStatus && (
          <>
            {questsStatus === "loading" ? (
              <Typography>loading quests</Typography>
            ) : (
              <>
                {quests ? (
                  quests?.map((quest: Quest, idx) => (
                    <Card variant="outlined" key={idx}>
                      <div>{quest?.title}</div>
                      <div>{quest?.description}</div>
                      <div>{quest?.reward}</div>
                      <div>{quest?.tags}</div>
                      <div>{quest?.userId}</div>
                    </Card>
                  ))
                ) : (
                  <Typography>no quests</Typography>
                )}
              </>
            )}
          </>
        )}
      </> */
