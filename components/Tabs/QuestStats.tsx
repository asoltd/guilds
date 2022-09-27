import { Bid, Quest } from "storage/quest/types"
import { collection, query, where } from "firebase/firestore"
import { useFirestore, useFirestoreCollectionData, useUser } from "reactfire"
import { Bid as BidComponent } from "components/Bid"

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
    <div>
      <>
        {questsStatus && (
          <>
            {questsStatus === "loading" ? (
              <div>loading quests</div>
            ) : (
              <>
                {quests ? (
                  quests?.map((quest: Quest, idx) => (
                    <div key={idx}>
                      <div>{quest?.title}</div>
                      <div>{quest?.description}</div>
                      <div>{quest?.reward}</div>
                      <div>{quest?.tags}</div>
                      <div>{quest?.userId}</div>
                    </div>
                  ))
                ) : (
                  <div>no quests</div>
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
              <div>loading bids</div>
            ) : (
              <>
                {biddingQuests ? (
                  biddingQuests?.map((userBids: Bid, idx) => (
                    <div key={idx}>
                      <FreelancerBids path={userBids?.questId} />
                    </div>
                  ))
                ) : (
                  <div>no bids</div>
                )}
              </>
            )}
          </>
        )}
      </>
    </div>
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
    <>
      {bidsStatus && (
        <>
          {bidsStatus === "loading" ? (
            <div>loading bids</div>
          ) : (
            <>
              {bids ? (
                bids.map((bid: Bid, idx) => (
                  <BidComponent key={idx} value={bid} />
                ))
              ) : (
                <div>no bids</div>
              )}
            </>
          )}
        </>
      )}
    </>
  )
}
