import { useFirestore, useFirestoreCollectionData } from "reactfire"
import { collection, query } from "firebase/firestore"
import { Bid } from "./Bid"
import { Bid as BidType } from "storage/quest"

export default function Bids({ path }): JSX.Element {
  const firestore = useFirestore()
  const questsQuery = query(collection(firestore, path))
  const { status, data: bids } = useFirestoreCollectionData(questsQuery)

  return (
    <>
      {status && (
        <>
          {status === "loading" ? (
            <div>loading</div>
          ) : (
            <>
              {bids?.length ? (
                bids.map((bid: BidType, idx) => (
                  <Bid key={idx} value={bid}></Bid>
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
