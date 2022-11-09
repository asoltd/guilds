import { useFirestore, useFirestoreCollectionData } from "reactfire"
import { collection, limit, orderBy, query } from "firebase/firestore"
import { Stack } from "@mui/material"
import { Quest } from "storage/quest"
import { ReusableSlider } from "components/ReusableComponents/ReusableSlider/ReusableSlider"

export function LatestQuestsSlider() {
  const firestore = useFirestore()
  const questRef = collection(firestore, "quests")
  const questsQuery = query(questRef, orderBy("createdAt", "desc"), limit(20))
  const { status: questsStatus, data: quests } =
    useFirestoreCollectionData(questsQuery)
  const exampleQuests = quests as Quest[]
  return (
    <Stack>
      <ReusableSlider
        variant="quest"
        status={questsStatus}
        items={exampleQuests}
      />
    </Stack>
  )
}
