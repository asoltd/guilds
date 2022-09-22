import { collection, query, where } from "firebase/firestore"
import { useFirestore, useFirestoreCollectionData } from "reactfire"

export default function FreelancerBids(path): JSX.Element {
  const firestore = useFirestore()
  const bidsRef = collection(firestore, "quests/path.path/bids")
  const bidsQuery = query(
    bidsRef,
    where("userId", "==", "QfABV59rDVWcUDBvtiaZCrQ8mTJ2") //hardcoded for now
  )
  const { status: bidsStatus, data: bids } =
    useFirestoreCollectionData(bidsQuery)
  console.log("bids", bids)
  return (
    <div>
      {bids?.map((bid, idx) => (
        <div key={idx}>
          <div>{bid?.amount}</div>
          <div>{bid?.timeEstimate}</div>
          <div>{bid?.userId}</div>
        </div>
      ))}
    </div>
  )
}
