import { collection, getFirestore, query, where } from "firebase/firestore"
import { useFirestore, useFirestoreCollectionData, useUser } from "reactfire"

export default function Stats(): JSX.Element {

  const firestore = useFirestore()
  const { status: userStatus, data: user} = useUser()
  const questsRef = collection(firestore, "quests")
  const questsQuery = query(questsRef, where("userId", "==", "QfABV59rDVWcUDBvtiaZCrQ8mTJ2"))
  const { status: questsStatus, data: quests } = useFirestoreCollectionData(questsQuery)
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
    </div>
  )
}