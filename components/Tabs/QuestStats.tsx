import { Bid, Quest } from "storage/quest/types"
import { collection, query, where } from "firebase/firestore"
import { useFirestore, useFirestoreCollectionData, useUser } from "reactfire"
import { Bid as BidComponent } from "components/Bid"
import { Box, Card, Typography } from "@mui/material"

export function QuestsStats(): JSX.Element {
  const firestore = useFirestore()
  const { status: userStatus, data: user } = useUser()
  const questsRef = collection(firestore, "quests")
  const userQuestsQuery = query(
    questsRef,
    where("userId", "==", user?.uid || "")
  )
  const { status: questsStatus, data: quests } =
    useFirestoreCollectionData(userQuestsQuery)
  const biddingQuestsQuery = query(
    questsRef,
    where("bidders", "array-contains", user?.uid || "")
  )

  const { status: biddingQuestsStatus, data: biddingQuests } =
    useFirestoreCollectionData(biddingQuestsQuery)
  return (
    <Box>
      <>
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
      </>
      <>
        {biddingQuestsStatus && (
          <>
            {biddingQuestsStatus === "loading" ? (
              <Typography>loading bids</Typography>
            ) : (
              <>
                {biddingQuests ? (
                  biddingQuests?.map((userBids: Bid, idx) => (
                    <Box key={idx}>
                      <FreelancerBids path={userBids?.questId} />
                    </Box>
                  ))
                ) : (
                  <Typography>no bids</Typography>
                )}
              </>
            )}
          </>
        )}
      </>
    </Box>
  )
}

export function FreelancerBids({ path }): JSX.Element {
  const firestore = useFirestore()
  const { status, data: user } = useUser()
  const bidsRef = collection(firestore, "quests", `${path}`, "bids")
  const bidsQuery = query(bidsRef, where("userId", "==", user?.uid || ""))
  const { status: bidsStatus, data: bids } =
    useFirestoreCollectionData(bidsQuery)
  return (
    <Box>
      {bidsStatus && (
        <>
          {bidsStatus === "loading" ? (
            <Typography>loading bids</Typography>
          ) : (
            <>
              {bids ? (
                bids.map((bid: Bid, idx) => (
                  <BidComponent key={idx} value={bid} />
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
