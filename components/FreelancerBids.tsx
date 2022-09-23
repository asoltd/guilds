import { collection, query, where } from "firebase/firestore"
import { useFirestore, useFirestoreCollectionData, useUser } from "reactfire"

export default function FreelancerBids(path): JSX.Element {
  const firestore = useFirestore()
  const { status, data: user } = useUser()
  const bidsRef = collection(firestore, "quests/path.path/bids")
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
