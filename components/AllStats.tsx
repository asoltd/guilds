import { collection, query, where } from "firebase/firestore"
import { useFirestore, useFirestoreCollectionData, useUser } from "reactfire"

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
      {quests?.map((quest, idx) => (
        <div key={idx}>
          <div>{quest?.title}</div>
          <div>{quest?.description}</div>
          <div>{quest?.reward}</div>
          <div>{quest?.tags}</div>
          <div>{quest?.userId}</div>
        </div>
      ))}
      {biddingQuests?.map((biddingQuest, idx) => (
        <div key={idx}>
          <FreelancerBids path={biddingQuest?.questId} />
        </div>
      ))}
    </div>
  )
}

export function FreelancerBids(path): JSX.Element {
  const firestore = useFirestore()
  const { status, data: user } = useUser()
  const bidsRef = collection(firestore, "quests", `${path.path}`, "bids")
  const bidsQuery = query(bidsRef, where("userId", "==", user?.uid || ""))
  const { status: bidsStatus, data: bids } =
    useFirestoreCollectionData(bidsQuery)
  return (
    <div>
      {bids?.map((bid, idx) => (
        <div key={idx}>
          <div>{bid?.amount}</div>
          <div>{bid?.timeEstimate}</div>
        </div>
      ))}
    </div>
  )
}

export function ProfileStats(): JSX.Element {
  return <div>Profile Page</div>
}

export function ExperienceAndReviews(): JSX.Element {
  return <div>Experience and reviews</div>
}
