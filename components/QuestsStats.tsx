import { collection, getFirestore, query, where } from "firebase/firestore"
import { useFirestore, useFirestoreCollectionData, useUser } from "reactfire"
import FreelancerBids from "components/FreelancerBids"

export default function QuestsStats(): JSX.Element {
  const firestore = useFirestore()
  const { status: userStatus, data: user } = useUser()
  const questsRef = collection(firestore, "quests")
  const userQuestsQuery = query(
    questsRef,
    where("userId", "==", "QfABV59rDVWcUDBvtiaZCrQ8mTJ2")
  )
  const { status: questsStatus, data: quests } =
    useFirestoreCollectionData(userQuestsQuery)
  const biddingQuestsQuery = query(
    questsRef,
    where("bidders", "array-contains", "QfABV59rDVWcUDBvtiaZCrQ8mTJ2")
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
          <FreelancerBids path={biddingQuest?.id} />
        </div>
      ))}
    </div>
  )
}
